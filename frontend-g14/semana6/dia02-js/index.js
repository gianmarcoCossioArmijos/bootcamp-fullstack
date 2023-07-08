//Undefined
let nombre
console .log(typeof(nombre));

//Null
let name = null
console.log(typeof(name));

//Boolean
let verdadero = true
console.log(typeof(verdadero));

//Number
let numero = -35.2
console.log(typeof(numero));

//String
let cadena = "Holi";
console.log(typeof(cadena));

//Const - No permite reasignar el valor
//Let - permite reasignar el valor

//Operadores matematicos
// * - / + ** %

//Operadores de comparacion
// > < >= <= == === != !==

//Operadores logicos
// && || !negacion

//operadoeres de cadena
// +

//Operadores terniarios --> ? :
const edad = 120;
const mayor = edad > 18 ? "mayor" : "menor";
console.log(mayor);

//Consicionales
/* if (condicion) {
        verdadero
    } else {
        falso
    } */

/* if (condicion) {
        verdadero
    } else if (condicion) {
        verdadero
    } else {
        falso
    } */

/* switch (expresion) {
    case caso:
        codigo
        break
    case caso:
        codigo
        break
    default:
        codigo
  } */

// EJERCICIOS
// 1. Retorna True si  dos strings tienen la misma longitud sino devolver False
const cadena1 = "strngirn";
const cadena2 = "dicinlc";

function longitud(a, b) {
    if (a.length === b.length) return console.log(true);
    else return console.log(false);
}
longitud(cadena1, cadena2);

// 2. Retornar True si un numero es menor que 40 sino devolver False
const num1 = 10;

function menorCuarenta(a) {
    if(a < 40) return console.log(true);
    else return console.log(false);
}
menorCuarenta(num1);

// 3. Retornar True si un numero es menor que 60 sino devolver False
const num2 = 70;

function menorSesenta(a) {
    if(a < 60) return console.log(true);
    else return console.log(false);
}
menorSesenta(num2);

// 4. Retornar True si un numero es par sino devolver False
const num3 = 20;

function parImpar(a) {
    if(a % 2 === 0) return console.log(true);
    else return console.log(false);
}
parImpar(num3);

// 5. Retornar True si un numero es impar sino devolver False
const num4 = 20;

function imparPar(a) {
    if(a % 2 !== 0) return console.log(true);
    else return console.log(false);
}
imparPar(num4);

// 6. Calcular are de triangulo y mostrar base ya ltura en caso tengamos dichos valores
const base = 2;
const altura = 7;

function area(a, b) {
  return console.log((b * a) / 2);
}
area(base, altura);

// Estructuras repetitivas
// For
for(let i = 0; i < 3; i++) {
    console.log(i);
}

// While
let j = 0;
while (j < 4) {
    console.log(j);
    j++;
}

// Do While
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 4);

// 1. -------------------------------------
const age = 15;

if (age >= 18 ) console.log("Mayor de edad");
else console.log("Menor de edad");

// 2. -------------------------------------
const idioma = "en";

if (idioma === "en") console.log("Hello");
else if (idioma === "es") console.log("Hola");
else if (idioma == "aim") console.log("Kamisaraki");
else console.log("Ingrese un idioma valido");

// 3. -------------------------------------
const numberr = 10;

if (numberr % 3 == 0 && numberr % 5  == 0) console.log("Fizzbuzz");
else if (numberr % 3  == 0) console.log("Fizz");
else if (numberr % 5  == 0) console.log("Buzz");
else console.log("Ingrese un valor valido");

// 4. -------------------------------------
const numb = 10;

if (numberr % 2 == 0) console.log(true);
else console.log(false);

// 5. -------------------------------------
for (let l = 0; l < 10; l = l + 2) {
    console.log(l);
}

// Funciones
function hayarEdad (year){
    const fecha = new Date();
    let edad = fecha.getFullYear() - year;
    return console.log("Edad:", edad);
}

hayarEdad(2000);