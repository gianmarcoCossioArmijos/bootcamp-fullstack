import filtrarGanador from "./modules/ganador.js";
import recorrerPregunta from "./modules/preguntas.js";
import puntuar from "./modules/puntaje.js";
import recorrerTrivia from "./modules/recorrido.js";

const main = document.querySelector("main");

function iniciar(puntaje, index, mensaje, mensajePuntuacion, seleccion) {

  localStorage.setItem("puntaje", JSON.stringify(puntaje));
  localStorage.setItem("index", JSON.stringify(index));
  localStorage.setItem("mensaje", JSON.stringify(mensaje));
  localStorage.setItem("mensajePuntuacion", JSON.stringify(mensajePuntuacion));
  localStorage.setItem("seleccion", JSON.stringify(seleccion));

  const pregunta = recorrerPregunta(index);
  renderTrivia(pregunta);
}

function seleccionarBoton(triviaSpans) {

    triviaSpans.forEach(span => {

        console.log(span);

        span.addEventListener("click", (event) => {

            console.log(event.target);
            const opcion = event.target.dataset.opcion;
            const seleccion = opcion;

            console.log(seleccion);
            localStorage.setItem("seleccion", JSON.stringify(seleccion));
            puntuar(seleccion);

            recorrerTrivia();
            filtrarGanador();

            let index = Number(JSON.parse(localStorage.getItem("index")));
            const pregunta = recorrerPregunta(index)
            renderTrivia(pregunta);
        })
    })
}

function renderTrivia(pregunta) {

  let seccionTrivia = ""

  if (pregunta.titulo === "resultado") {
    
    filtrarGanador();
    let mensaje = JSON.parse(localStorage.getItem("mensaje"));
    let mensajePuntuacion = JSON.parse(localStorage.getItem("mensajePuntuacion"));

    seccionTrivia = `
                    <section
                            class="w-3/4 h-96 m-auto justify-between px-4 py-12 flex flex-col text-center"
                            id="seccion">

                        <p class="text-white uppercase font-bold text-3xl">
                            ${mensaje}
                        </p>
                        <p class="text-white text-2xl italic">
                            ${mensajePuntuacion}
                        </p>

                        <button class="text-gray-900 bg-yellow-300 hover:bg-yellow-400 font-medium
                                rounded-lg text-sm px-5 py-3 text-center mt-7 mb-3 px-5 py-4"
                                id="boton__volverJugar">
                            Volver a jugar
                        </button>

                    </section>
                `;

    main.innerHTML = seccionTrivia;
    const botonVolverJugar = document.getElementById("boton__volverJugar");

    botonVolverJugar.addEventListener("click",() => {

        const puntaje = 0;
        const index = 0;
        const mensaje = "";
        const mensajePuntuacion = "";
        const seleccion = "";
        iniciar(puntaje, index, mensaje, mensajePuntuacion, seleccion);
    })
    
    return;
  }

  seccionTrivia = `
            <section 
                    class="h-96 flex flex-col justify-between px-4 py-6"
                    id="seccion">

                <input type="hidden" value="${pregunta.titulo}">
                <p class="px-2 text-lg text-white text-center font-bold">${pregunta.pregunta}</p>

                <div class="flex flex-col gap-2 items-start">

                    <button class="relative inline-flex items-center justify-center px-5 py-4
                            mb-2 w-full overflow-hidden text-sm font-medium rounded-lg
                            bg-yellow-400 hover:bg-yellow-500
                            text-black focus:ring-4 focus:outline-none
                            focus:ring-red-100 focus:ring-red-400"
                            id="trivia__spans"
                            data-opcion="${pregunta.opcion1}">

                                ${pregunta.opcion1}
                            </span>
                    </button>

                    <button class="relative inline-flex items-center justify-center px-5 py-4
                            mb-2 w-full overflow-hidden text-sm font-medium rounded-lg
                            bg-yellow-400 hover:bg-yellow-500
                            text-black focus:ring-4 focus:outline-none
                            focus:ring-red-100 focus:ring-red-400"
                            id="trivia__spans"
                            data-opcion="${pregunta.opcion2}">

                            ${pregunta.opcion2}
                        </span>
                    </button>

                    <button class="relative inline-flex items-center justify-center px-5 py-4
                            mb-2 w-full overflow-hidden text-sm font-medium rounded-lg
                            bg-yellow-400 hover:bg-yellow-500
                            text-black focus:ring-4 focus:outline-none
                            focus:ring-red-100 focus:ring-red-400"
                            id="trivia__spans"
                            data-opcion="${pregunta.opcion3}">

                            ${pregunta.opcion3}
                        </span>
                    </button>
            
                </div>

            </section>
            `

            main.innerHTML = seccionTrivia;
            const triviaSpans = document.querySelectorAll("#trivia__spans");
            seleccionarBoton(triviaSpans);
}

document.addEventListener("DOMContentLoaded", () => {

    const puntaje = 0;
    const index = 0;
    const mensaje = "";
    const mensajePuntuacion = "";
    const seleccion = "";
    iniciar(puntaje, index, mensaje, mensajePuntuacion, seleccion);
});

export default renderTrivia;
