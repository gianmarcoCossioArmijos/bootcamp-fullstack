# CONJUNTO -------------------
conjunto = {1,2,3,4,5}
print(conjunto)

# agregar elemento
conjunto.add(6)
print(conjunto)

# eliminar elemento
conjunto.remove(6)
print(conjunto)

# eliminar elemento si existe
conjunto.discard(5)
print(conjunto)

# eliminar todos los elementos
conjunto.clear()
print(conjunto)

# conjunto vacio
conjunto_vacio = set()
print(conjunto_vacio)

# union de conjuntos
conjunto_uno = {1,2,3}
conjunto_dos = {3,4,5}
union = conjunto_uno.union(conjunto_dos)
print(union)

# interseccion de conjuntos
interseccion = conjunto_uno.intersection(conjunto_dos)
print(interseccion)

# diferencia de conjuntos
diferencia_uno = conjunto_uno.difference(conjunto_dos)
diferencia_dos = conjunto_dos.difference(conjunto_uno)
print(diferencia_uno, diferencia_dos)

# diferencia de asimetrica de conjuntos
diferencia_asimetrica = conjunto_uno.symmetric_difference(conjunto_dos)
print(diferencia_asimetrica)