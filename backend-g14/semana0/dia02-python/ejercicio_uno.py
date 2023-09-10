# Escribir un codigo donde definas una variable
# con el valor 20(int), luego una condicion que 
# valide si dicha variable es mayor o igual a 18
# si cumple la condicion mostrar en mensaje

# UNO -------------------
numero = 20

if numero >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# DOS -------------------
numero_dos = 85

if numero_dos >= 90:
    print("Excelente")
elif numero_dos >= 70:
    print("Bien")
else:
    print("Necesitas mejorar")

# TRES -------------------
lista = ["Pera", "Manzana", "Uva"]

for i in lista:
    print(i)


# CUATRO -------------------

# for in range con variaciones 
for i in range(5,15,5):
    print(f"For empieza en 5 hasta 15, con un intervalo de 5: {i}")