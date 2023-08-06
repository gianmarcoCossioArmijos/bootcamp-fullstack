const trivia = [
    {
        titulo : "pregunta 1",
        pregunta : "¿En que año se convirtio el skateboarding en deporte olimpico? 🏅",
        opcion1 : "2021",
        opcion2 : "2020",
        opcion3 : "2022"
    },
    {
        titulo : "pregunta 2",
        pregunta : "¿En donde nacio el skateboarding? 🌅",
        opcion1 : "Washington",
        opcion2 : "Montreal",
        opcion3 : "California"
    },
    {
        titulo : "pregunta 3",
        pregunta : "¿Cual de las siguientes opciones no es parte de un skate? 🛹",
        opcion1 : "Suspencion",
        opcion2 : "Trucks",
        opcion3 : "Estoboles"
    },
    {
        titulo : "resultado",
        imagen : ""
    }
]

function recorrerPregunta(index) {

    return trivia[index];
}

export default recorrerPregunta;