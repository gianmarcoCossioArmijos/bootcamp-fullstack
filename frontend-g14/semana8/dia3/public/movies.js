
import { deleteMovie } from "./services.js";
import { fetchMovies } from "./services.js";
import { getMovie } from "./services.js";

export const renderMovies = (movies) => {

    const moviesList = document.querySelector(".movies__list"); 
    let elementsList = "";

    movies.forEach(movie => {
        
        elementsList = elementsList + 
                                `
                                <tr>
                                    <td>${movie.id}</td>
                                    <td>
                                        <img src="${movie.image ?? "https://illustoon.com/photo/dl/7627.png"}" alt="${movie.name}">
                                    </td>
                                    <td>
                                        <strong>${movie.name}</strong>
                                        <div class="fs-small">${movie.release}</div>
                                        <div class="fs-small">${movie.genreID}</div>
                                        <div class="fs-small">${movie.resumen}</div>
                                    </td>
                                    <td>
                                        <button class="movie__edit" data-id="${movie.id}">editar</button>
                                        <button class="movie__delete" data-id="${movie.id}">eliminar</button>
                                    </td>
                                </tr>
                                `
    });

    moviesList.innerHTML = elementsList;

    const removeButtons = document.querySelectorAll(".movie__delete");
    
    removeButtons.forEach(button => {

        button.addEventListener("click", async (event) => {

            const idMovie = event.target.dataset.id;
            const res = await deleteMovie(idMovie);

            if (res) {

                const movies = await fetchMovies();
                renderMovies(movies);
            }
        })
    })

    const editButtons = document.querySelectorAll(".movie__edit");
    
    editButtons.forEach(button => {

        button.addEventListener("click", async (event) => {

            const idMovie = event.target.dataset.id;
            const res = await getMovie(idMovie);

            if (res) {
                
                const movieForm = document.forms["moviesForm"];

                movieForm.id.value = res.id;
                movieForm.name.value = res.name;
                movieForm.image.value = res.image;
                movieForm.release.value = res.release;
                movieForm.genre.value = res.genreID;
                movieForm.resumen.value = res.resumen;
            }
        })
    })
}
