from flask import Flask

app = Flask(__name__)

# Definir Endpoints o rutas (api)


@app.route("/")
def hello_world():
    return "Como es posible este sucesooo!"
