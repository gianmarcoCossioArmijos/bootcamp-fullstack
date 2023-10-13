from app import db, mail
from app.models.users_model import UserModel
from http import HTTPStatus
from flask_jwt_extended import create_access_token, create_refresh_token
from secrets import token_hex
from flask_mail import Message
from os import getenv


class AuthController:
    def __init__(self):
        self.db = db
        self.model = UserModel

    def sign_in(self, body):
        try:
            username = body['username']
            record = self.model.where(username=username, status=True).first()

            if record:
                password = body['password']
                if record.check_password(password):
                    user_id = record.id
                    access_token = create_access_token(identity=user_id)
                    refresh_token = create_refresh_token(identity=user_id)
                    return {
                        'access_token': access_token,
                        'refresh_token': refresh_token
                    }, HTTPStatus.OK

                return {
                    'message': 'La contraseña es incorrecta'
                }, HTTPStatus.UNAUTHORIZED

            return {
                'message': f'No se encontro el usuario: {username}'
            }, HTTPStatus.NOT_FOUND

        except Exception as e:
            return {
                "message": "Ocurrio un error al iniciar sesion",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            db.session.close()

    def refresh_token(self, identity):
        try:
            access_token = create_access_token(identity=identity)
            refresh_token = create_refresh_token(identity=identity)
            return {
                'access_token': access_token,
                'refresh_token': refresh_token
            }, HTTPStatus.OK

        except Exception as e:
            return {
                "message": "Ocurrio un error al crear nuevo access token",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR

    def password_reset(self, body):
        try:
            email = body["email"]
            record = self.model.where(email=email, status=True).first()
            if record:
                new_password = token_hex(5)
                record.password = new_password
                record.hash_password()
                self.db.session.add(record)
                self.db.session.commit()
                message = Message(
                    subject='Flask Boiler Plate - Password Reset',
                    sender=('Flask Boiler Plate', getenv('MAIL_USERNAME')),
                    recipients=[email],  # thesoulreaper1202@gmail.com
                    body=f'<section style="display:flex;flex-direction:column;gap:10px;text-align:center;">Tu nueva contraseña es: <strong style="padding:5px;border-radius:10px;background-color:green;text-color:white;text-size=20px;">{new_password}<strong><section>'
                )
                mail.send(message)

                return {
                    "message": f"La contraseña ha sido restablecida"
                }, HTTPStatus.OK
            return {
                'message': f'No se encontro un usuario con el correo: {email}'
            }, HTTPStatus.NOT_FOUND
        except Exception as e:
            self.db.session.rollback()
            return {
                "message": "Ocurrio un error al resetear contraseña",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()
