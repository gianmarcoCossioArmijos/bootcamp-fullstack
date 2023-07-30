// Destructuring

let persona = {
    nombre: "Jose Navarro",
    pais : "Peru",
    trabajo : "Developer"
}

// Forma comun
let nombre1 = persona.nombre;
let pais1 = persona.pais;
let trabajo1 = persona.trabajo;

// Forma corta con Destructuring
let {nombre, pais} =  persona;
console.log(nombre);
console.log(pais);