from app import db
from app.models.users_model import UserModel
from app.schemas.users_schema import UserResponseSchema
from http import HTTPStatus


class UserController:
    def __init__(self):
        self.db = db
        self.model = UserModel
        self.schema = UserResponseSchema

    def fetch_all(self, query_params):
        try:
            page = query_params['page']
            per_page = query_params['per_page']
            records = self.model.where(status=True).order_by('id').paginate(
                page=page,
                per_page=per_page
            )

            response = self.schema(many=True)

            return {
                "results": response.dump(records.items),
                "pagination": {
                    "totalResults": records.total,
                    "totalPages": records.pages,
                    "perPage": records.per_page,
                    "currentPage": records.page
                }
            }, HTTPStatus.OK

        except Exception as e:
            return {
                "message": "Ocurrio un erro",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()

    def save(self, body):
        try:
            record_new = self.model.create(**body)
            record_new.hash_password()
            self.db.session.add(record_new)
            self.db.session.commit()

            return {
                "message": f"El usuario {body['username']} se creo con exito"
            }, HTTPStatus.CREATED
        except Exception as e:
            return {
                "message": "Ocurrio un erro",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()

    def find_by_id(self, id):
        try:
            record = self.model.where(id=id, status=True).first()

            if record:
                response = self.schema(many=False)
                return response.dump(record), HTTPStatus.OK

            return {
                "message": f"Nose se encontro el usuario co el id {id}"
            }, HTTPStatus.NOT_FOUND
        except Exception as e:
            return {
                "message": "Ocurrio un erro",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()

    def update(self, id, body):
        try:
            record = self.model.where(id=id, status=True).first()

            if record:
                record.update(**body)
                self.db.session.add(record)
                self.db.session.commit()

                return {
                    "message": f"El usuairo con el id {id} se ha actualizado"
                }, HTTPStatus.OK

            return {
                "message": f"Nose se encontro el usuario co el id {id}"
            }, HTTPStatus.NOT_FOUND
        except Exception as e:
            self.db.rollback()
            return {
                "message": "Ocurrio un erro",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()

    def remove(self, id):
        try:
            record = self.model.where(id=id, status=True).first()

            if record:
                record.update(status=False)
                self.db.session.add(record)
                self.db.session.commit()
                return {
                    "message": f"El usuario con id {id} se ha Deshbilitado"
                }, HTTPStatus.OK

            return {
                "message": f"No se encontro un usuario con id: {id}"
            }, HTTPStatus.NOT_FOUND

        except Exception as e:
            return {
                "message": "Ocurrio un error al eliminar usuario",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()
