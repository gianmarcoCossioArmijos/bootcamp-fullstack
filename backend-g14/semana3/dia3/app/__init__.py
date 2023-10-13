from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import getenv

from app.config import environment

ENV = environment[getenv('FLASK_ENV')]

app = Flask(__name__)
app.config.from_object(ENV)

db = SQLAlchemy(app)