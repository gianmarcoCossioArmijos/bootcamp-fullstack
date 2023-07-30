// DOCUMENT

// Selectores
// querySelector -- Atrapa elemntos por id,clase,etiqueta,etc
document.querySelector("footer").innerHTML="<h3>Insertando etiqueta h3 desde el DOM</h3>";
document.querySelector(".lista");

// getElementById
document.getElementById("lista");

// getElemwntByTagName -- devuelve una lista
document.getElementsByName("li")
const lis = Array.from(document.getElementsByName("li"));

// querySelectorAll -- devuelkve una coleccnio que se puede recorrer
document.querySelectorAll("li").forEach(function(li){
    console.log("elemento:", li);
})

// Selectores relativos -- atrapa elementos hijos del elemento atrapado
// lastChild -- atrapa el ultimo nodo hijo
document.querySelector("button").lastChild;

//firstChild -- atrapa el primer nodo hijo
document.querySelector("button").firstChild;

//childNodes -- atrapa todos los nodos hijos
document.querySelector("button").childNodes;

//childNodes -- atrapa todos los elementos html hijos
document.querySelector("button").children;

//nextElementSibling -- atrapa el siguiente elemento hermano
document.querySelector("button").firstElementChild.nextElementSibling;

// previousElementSibling -- atrapa el elemento anterior hermano
document.querySelector("button").lastElementChild.previousElementSibling;

// parentElement -- atrapa el elemento padre del elemento
document.querySelector("footer").parentElement;

// closest -- atrapa el elemento padre que se le indique
document.querySelector("li").parentElement.closest("main");

// Eventos
const boton = document.querySelector("button");

function saludar() {
    alert("Hola!");
}

function despedir() {
    alert("Adios!");
}

//onclick
boton.onclick = saludar;
boton.onmouseout = despedir;

//addEventListener
boton.addEventListener("click", saludar, true);

//remove
boton.remove("click");

