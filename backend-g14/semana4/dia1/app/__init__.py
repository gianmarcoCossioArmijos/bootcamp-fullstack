from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import getenv
from flask_restx import Api
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_mail import Mail

from app.config import environment

ENV = environment[getenv('FLASK_ENV')]

app = Flask(__name__)
app.config.from_object(ENV)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

jwt = JWTManager(app)
mail = Mail(app)

authorizations = {
    "Bearer": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization"
    }
}

api = Api(
    app,
    title="Flask Boilerplate",
    version="0.1",
    description="Endpoints de Boilerplate Flask",
    doc="/swagger-ui",
    authorizations=authorizations
)
