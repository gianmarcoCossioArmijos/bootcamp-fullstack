def saludar_uno():
    print("Hola :)")


def saludar_dos(nombre):
    print(f"Hola :) {nombre}")


def sumar(numero_uno, numero_dos):
    return numero_uno + numero_dos


def saludar_tres(nombre="Mundo"):
    print(f"Hola :) {nombre}")


def saludar(edad, nombre="Mundo"):
    print(f"Hola :) {nombre} tu edad es {edad}")


def dimenciones_rectangulo():
    return 2, 5


def sumar(*numeros):
    return sum(numeros)

# kargs
def mostrar(**datos):
    for i, e in datos.items():
        print(f"{i} : {e}")


# lambda
suma = lambda x, y : x + y
mayor = lambda x, y : x if x < y else y


# docstring
def resta(a, b):
    """
    Duevuelve la suma de dos numeros
    args:
    - a: Primer numero
    - b: Segundo numero
    return:
    Resta de a y b
    """
    return a - b

help(resta)

