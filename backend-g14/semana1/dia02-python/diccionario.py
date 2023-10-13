# DICCIONARIO -------------------
diccionario = {
    "uno":1,
    "dos":2,
    "tres": 3
}

# acceder a valor de diccionario por medio de clave
uno = diccionario["uno"]
print(uno)

# agregar un valor al diccionario
diccionario["cuatro"] = 4
print(diccionario)

# eliminar un valor al diccionario
del diccionario["cuatro"]
print(diccionario)

# validar que una clave existe
existe = "tres" in diccionario
print(existe)

# acceder a claves de diccionario
claves = diccionario.keys()
print(claves)

# acceder a valores de diccionario
valores = diccionario.values()
print(valores)

# obtener valor de una clave
# devolviendo un valor por defecto si no existe
cinco = diccionario.get("cinco", 0)
print(cinco)

# combinar dos diccionarios
nuevo_diccionario = {"cuatro":4, "cinco":5}
diccionario.update(nuevo_diccionario)
print(diccionario)