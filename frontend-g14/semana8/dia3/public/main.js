
import { renderMovies } from "./movies.js";
import { fetchMovies } from "./services.js";

const moviesForm = document.getElementById("moviesForm");

const createMovie = async (form) => {

    const url = "http://localhost:3000/movies";
    const init = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(form)
    }

    const response = await fetch(url, init)
    return response.json();
}

moviesForm.addEventListener("submit", async (event)  => {

    event.preventDefault();
    const movieForm = document.forms["moviesForm"];
    const name = movieForm.name.value;
    const image = movieForm.image.value;
    const release = movieForm.release.value;
    const genre = movieForm.genre.value;
    const resumen = movieForm.resumen.value;

    console.log({name, image, release, genre, resumen});
    const newMovie = {name, image, release, genreId : Number(genre), resumen}

    const isNew = !Boolean(id)

    if(isnew) {

        const res = await createMovie(newMovie);
        if (res) {

            const resp = await fetchMovies();
            renderMovies(resp);
        }
    } else {

        const resp = await updadateMovie();
    }
})

document.addEventListener("DOMContentLoaded", async (event) => {

    const movies = await fetchMovies();
    renderMovies(movies);
})