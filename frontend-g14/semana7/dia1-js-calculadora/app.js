let operador = "";
let operando = "";
let numeroActual = 0;

const inputDisplay = document.querySelector("input");
const botones = document.querySelectorAll("button");

botones.forEach(function (boton) {

    boton.addEventListener("click", function (event) {

        const textoBoton = event.target.textContent;
        
        inputDisplay.value = textoBoton;

        if("+-*".includes(textoBoton)) {

            operador = textoBoton;
            operando = Number()
        } else if (textoBoton === "=") {
            
            if (operador === "+") {
                numeroActual = Number(operando);
            } else if (operador === "-") {
                numeroActual = Number(operando);
            } else if (operador === "*") {
                numeroActual = Number(operando);
            }
        } else if (textoBoton === "AC") {
            numeroActual = "0";
            operador = "";
            operando = "";
        } else {
            numeroActual = numeroActual + Number(textoBoton);
        }

        inputDisplay.value = numeroActual;
    })
});