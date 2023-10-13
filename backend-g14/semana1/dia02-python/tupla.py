# TUPLA -------------------
tupla = (1,2,3,4,5)
print(tupla)

# acceder a elemento de una tupla
elemento = tupla[2]
print(elemento)

# Obtener nueva subtupla de una tupla existente
subtupla = tupla[1:]
print(subtupla)

# Añadir elemento a tupla convertiendo a lista
tupla_lista = list(tupla)
tupla_lista.append(6)
lista_tupla = tuple(tupla_lista)
tupla = lista_tupla
print(tupla)

# contar cuantas veces se encuentra un elemento en la tupla
conteo = tupla.count(2)
print(conteo)

# Encontrar indice de un elemento de una tupla
indice = tupla.index(3)
print(indice)

# Crear una tupla simple o unitaria
tupla_simple = (1,)
print(tupla_simple)

# longitud de la tupla
longitud = len(tupla_lista)
print(longitud)