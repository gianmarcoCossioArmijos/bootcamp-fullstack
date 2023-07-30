
const boton = document.getElementById("boton");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const resultadoDiv = document.getElementById("resultado");

boton.addEventListener("click", function (event) {

    const peso = pesoInput.value;
    const altura = alturaInput.value;
    
    const imc = (peso / (altura ** 2));

    let estado;
    if (imc < 18.5) {
        estado = "Bajo";
    } else if (imc > 18.5 && imc < 24.9) {
        estado = "Normal"
    } else if (imc > 24.9 && imc < 29.9) {
        estado = "Sobrepeso"
    } else if (imc > 30){
        estado = "Obeso"
    } else {
        estado = "Valor incorrecto"
    }
        
    resultadoDiv.innerText = "Tu indice de Masa Corporal es " + estado;
});