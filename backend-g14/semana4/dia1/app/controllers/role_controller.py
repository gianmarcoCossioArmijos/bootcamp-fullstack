from app import db
from app.models.roles_model import RolModel
from http import HTTPStatus
from app.schemas.roles_schema import RoleResponseSchema


class RoleController:

    def __init__(self):
        self.db = db
        self.model = RolModel
        self.schema = RoleResponseSchema

    def fetch_all(self):
        records = self.model.where(status=True).all()
        response = self.schema(many=True)
        return response.dump(records)

    def save(self, body):
        try:
            record_new = self.model.create(**body)
            self.db.session.add(record_new)
            self.db.session.commit()
            return {
                "message": f"El rol {body['name']} se creo exitosamente"
            }, HTTPStatus.OK
        except Exception as e:
            self.db.session.rollback()
            return {
                "message": "Ocurrio un error al crear nuevo rol",
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
                "message": f"No se encontro un rol con id: {id}"
            }, HTTPStatus.NOT_FOUND

        except Exception as e:

            return {
                "message": "Ocurrio un error al listar rol por id",
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
                    "message": f"El rol con id {id} se ha actualizado"
                }, HTTPStatus.OK

            return {
                "message": f"No se encontro un rol con id: {id}"
            }, HTTPStatus.NOT_FOUND

        except Exception as e:
            return {
                "message": "Ocurrio un error al actualizar rol",
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
                    "message": f"El rol con id {id} se ha Deshbilitado"
                }, HTTPStatus.OK

            return {
                "message": f"No se encontro un rol con id: {id}"
            }, HTTPStatus.NOT_FOUND

        except Exception as e:
            return {
                "message": "Ocurrio un error al eliminar rol",
                "error": str(e)
            }, HTTPStatus.INTERNAL_SERVER_ERROR
        finally:
            self.db.session.close()
