from app import api
from flask_restx import Resource
from app.controllers.role_controller import RoleController
from flask import request
from app.schemas.roles_schema import RoleRequestSchema
from flask_jwt_extended import jwt_required

role_ns = api.namespace(
    name="Roles",
    path="/roles",
    description="Endpoint roles"
)

schema_request = RoleRequestSchema(role_ns)


@role_ns.route("")
# @role_ns.doc(security="Bearer")
class Roles(Resource):

    # @jwt_required()
    def get(self):
        ''' Listar todos los roles '''
        controller = RoleController()
        return controller.fetch_all()

    # @jwt_required()
    @role_ns.expect(schema_request.create(), validate=True)
    def post(self):
        ''' Crear nuevo rol '''
        controller = RoleController()
        return controller.save(request.json)


@role_ns.route("/<int:id>")
@role_ns.doc(security="Bearer")
class RolesByID(Resource):

    @jwt_required()
    def get(self, id):
        ''' Listar un rol por id '''
        controller = RoleController()
        return controller.find_by_id(id)

    @jwt_required()
    @role_ns.expect(schema_request.update(), validate=True)
    def patch(self, id):
        ''' Actualizar un rol por id enviando objeto parcial '''
        controller = RoleController
        return controller.update(id, request.json)

    @jwt_required()
    def delete(self, id):
        ''' Deshabilitar un rol por id '''
        controller = RoleController
        return controller.remove(id)

# @app.route("/roles", methods=['GET'])
# def list_roles():
#    return ":)", HTTPStatus.OK

# @app.route("/roles", methods=['POST'])
# def create_roles():
#    return ":*", HTTPStatus.CREATED

# @app.route("/role/<int:id>", methods=['PUT', 'PATCH'])
# def update_roles(id):
#    return f":3 {str(id)}", HTTPStatus.OK

# @app.route("/role/<int:id>", methods=['DELETE'])
# def delete(id):
#    return f":v {str(id)}", HTTPStatus.OK
