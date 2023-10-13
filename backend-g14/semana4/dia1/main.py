from app import app, db
from app.models import BaseModel
from app import routers

BaseModel.set_session(db.session)