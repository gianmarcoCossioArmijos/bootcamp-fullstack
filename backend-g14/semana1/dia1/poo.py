class Auto:

    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def encender(self):
        print("El auto esta encendido")

wolkswagen = Auto("Wolkswagen", "Golf")
audi = Auto("Audi", "M-6")

# __"---" = private
class CuentaBancaria:

    def __init__(self, titular, balance = 0):
        self.titular = titular
        self.__balance = balance

    def depositar(self, monto):
        self.__balance += monto
        return self.__balance
    
    def retirar(self, monto):
        if monto > self.__balance:
            return "Saldo insuficiente"
        
        self.__balance -= monto
        return self.__balance

cuenta_nueva = CuentaBancaria("Miself")
monto_actual = cuenta_nueva.depositar(120)

class Animal:

    def __init__(self, especie):
        self.especie = especie

    def presentar(self):
        print(f"Soy un {self.especie}")

# super() -- refencia a clase heredada o padre
class Perro(Animal):

    def __init__(self, nombre):
        super().__init__("Perro")
        self.nombre = nombre

    def ladrar(self):
        print("Guau Guau!")

fido = Perro("Fido")
fido.presentar()
fido.ladrar()