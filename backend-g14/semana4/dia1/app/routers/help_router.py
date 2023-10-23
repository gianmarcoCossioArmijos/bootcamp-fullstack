from app import api
from flask_restx import Resource
from flask import Response
from http import HTTPStatus

health_ns = api.namespace(
    name="Healthcheck",
    description="Validar que el recurso esta activo",
    path="/health"
)


@health_ns.route("")
class Healthcheck(Resource):

    def get(self):
        ''' Endpoint para comprobar la salud del proyecto '''
        return Response(HTTPStatus.OK)
