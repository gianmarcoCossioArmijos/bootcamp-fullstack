# LISTA -------------------
ista = [1, 2, 3, 4, 5]

# agregar elemento a lista en la ultima posicion
lista.append(6)

# agregar elemento a lista en la posicion deseada
lista.insert(2, 2.5)

# eliminar el ultimo elemento de lista
lista.pop()

# conatr cunatas veces se repite un elemento de lista
cuenta = lista.count(2)

# agregar varios elementos a lista
lista.extend([6,7,8])

# devuelve indice de una lista
indice = lista.index(2.5)

# devuelve lista ordenada al reves
lista.reverse()
print(lista)

# devuelve lista ordenada de menor a mayor
lista.sort()
print(lista)


print(cuenta)
print(lista)