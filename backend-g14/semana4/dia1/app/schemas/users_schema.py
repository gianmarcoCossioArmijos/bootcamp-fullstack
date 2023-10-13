from flask_restx import fields
from flask_restx.reqparse import RequestParser
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app.models.users_model import UserModel


class UserRequestSchema:

    def __init__(self, namespace):
        self.ns = namespace

    def all(self):
        parser = RequestParser()
        parser.add_argument("page", type=int, default=1, location="args")
        parser.add_argument("per_page", type=int, default=5, location="args")
        return parser

    def create(self):
        return self.ns.model("User Create", {
            "name": fields.String(required=True, max_lenth=120),
            "last_name": fields.String(required=True, max_lenth=150),
            "username": fields.String(required=True, max_lenth=60),
            "password": fields.String(required=True, max_lenth=20),
            "email": fields.String(required=True, max_lenth=160),
            "rol_id": fields.Integer(required=True),
        })

    def update(self):
        return self.ns.model("User Update", {
            "name": fields.String(required=True, max_lenth=120),
            "last_name": fields.String(required=True, max_lenth=150),
            "username": fields.String(required=True, max_lenth=60),
            "email": fields.String(required=True, max_lenth=160),
            "rol_id": fields.Integer(required=True),
        })


class UserResponseSchema(SQLAlchemyAutoSchema):
    class Meta:

        model = UserModel
        exclude = ['password']
