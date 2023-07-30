
// Arrays
const lista = [1,2,3, "Jose", "Pepe", true];
console.log(lista);
console.log(lista[4]);

lista[2] = "Hola";
console.log(lista);

// Agregar valor al final del arreglo
lista.push(100);
console.log(lista);

// Eliminar el ultimo valore de un arreglo
lista.pop();
console.log(lista);

// Objetos

// Key : Value
const objetos = {
    nombre : "Gianmarco",
    apellido : "Cossio",
    "mi edad" : 25
};

console.log(objetos);

delete objetos['mi edad'];
console.log(objetos);

// Destructuring
const valor = objetos.nombre;
console.log(valor);

const {nombre, apellido} =  objetos;
console.log(nombre, apellido);

const {nombre : nombreValor, apellido : apellidoValor} =  objetos;
console.log(nombreValor, apellidoValor);

// Spread operator
const producto = {
    nombre : "laptop",
    precio : 3000
}

const cliente = {
    nombre : "Cesar",
    isVip : true
}

const nuevosObjetos = { ...producto, ...cliente};
console.log(nuevosObjetos);

const nuevosObjetosSinColision = {
    producto : {...producto},
    cliente : {...cliente}
};
console.log(nuevosObjetosSinColision);

//Maniplulacion de datos de Spreads
console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));