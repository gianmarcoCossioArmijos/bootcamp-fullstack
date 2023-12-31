from flask_restx import fields
from flask_restx.reqparse import RequestParser


class AuthRequestSchema:
    def __init__(self, namespace):
        self.ns = namespace

    def login(self):
        return self.ns.model("Auth Signin", {
            "username": fields.String(required=True, max_length=60),
            "password": fields.String(required=True, max_length=20),
        })

    def refresh(self):
        parser = RequestParser()
        parser.add_argument('Authorization', type=str,
                            location='headers', help='Ex. Bearer refresh_token')
        return parser

    def reset(self):
        return self.ns.model('Auth Reset Password', {
            "email": fields.String(required=True)
        })
