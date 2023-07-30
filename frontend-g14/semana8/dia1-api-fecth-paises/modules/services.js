
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones';

//export function fetchCountries() {

//    return fetch(url) // Devuelve promesa
//        .then(response => response.json())
//        .catch(err => console.log(err))
//}

export const fetchCountries = async() => {

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Error en el request: " + response.status);
        }
        
        return response.json();
    } catch (e) {

        console.error(e); 
    }
}
