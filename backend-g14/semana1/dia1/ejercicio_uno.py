from math import pi as numero_pi

def saludoPersonalizado(saludo):
    print(f"{saludo}")

def sumar():
    num1 = int(input("ingresa el primer numero: "))
    num2 = int(input("ingresa el segundo numero: "))
    print(num1 + num2)

def radio_circulo():
    num = float(input("ingresa el radio de un circulo: "))
    area = round(numero_pi * num ** 2)
    print(f"El area es: {area}")

def celcios_farhenheit():
    celsios = float(input("ingresa temperatura en celsios: "))
    print(f"ºC a Farhenheit: {celsios * 1.8 + 32}")

celcios_farhenheit()