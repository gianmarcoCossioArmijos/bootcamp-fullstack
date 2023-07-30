
export const fetchMovies = async () => {

    const urlFetch = "http://localhost:3000/movies";

    const response = await fetch(urlFetch);
    const data = await response.json();
    console.log(data);
    return data;
}

export const deleteMovie = async (id) => {

    const url = `http://localhost:3000/movies/${id}`;
    const init = {
        method: "DELETE"
    }

    const response = await fetch(url, init)
    return response.json();
}

export const getMovie = async (id) => {

    const url = `http://localhost:3000/movies/${id}`;

    const response = await fetch(url)
    return response.json();
}