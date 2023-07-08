document.querySelector("button")
        .onclick = function() {
            alert("Hola Mundillo")
        };

console.log("Holi Boli");
console.error("Error")
console.warn("Warning");

//PARSE INT
let n1 = "1";
let n2 = "2";

let total = parseInt(n1) + parseInt(n2);
console.log(total);

let n3 = "6.7";
let n4 = "2";

let total2 = parseFloat(n1) + parseFloat(n2);
console.log(total);

console.log(n3, typeof(n3.toString()));

//SCOPE GLOBAL
let nombre = "pedro";
console.log("nombre", nombre);

{
    let name2 = "pedro";
    console.log("nombre", nombre);
    console.log("nombre", name2);
}

//FUNCION
function suma(a, b) {
    return a + b
}
console.log(suma(4, 3));

let multiplicar = function (a, b){
    return a * b
}
console.log(multiplicar(5, 3));

const restar =  (a, b) => {
    console.log("Funcion restar")
    return a - b
}
console.log(restar(10, 5));

//FUNCION COMO VALOR
function division (a, b ){
    return a / b
}

let x = division;
console.log("division", division(10, 5));

let z = division(15, 5);
console.log("division", z);

function operacion(a, division){
return a + division
}

console.log("operacion", operacion(10, division(15, 3)));