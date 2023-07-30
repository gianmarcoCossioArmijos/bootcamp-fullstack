import { fetchCountries } from "./services.js";
import { renderCountries } from "./utils.js";

const searchInput = document.querySelector(".app__search");
const filterSelect = document.querySelector(".app__filter");
const scrollButton = document.querySelector(".app_scrolltop");
let countryData = [];

searchInput.addEventListener("input", (event) => {
    
    const value = event.target.value;

    const filteredCountries = countryData.filter((country) => {
    const loweredName = country.name.common.toLowerCase();
    const loweredValue = value.toLowerCase();

    const joinedCapital = country.capital.join(",");
    const loweredCapital = joinedCapital.toLowerCase();

    return (
        loweredName.includes(loweredValue) ||
        loweredCapital.includes(loweredValue)
    );
});

    console.log(filteredCountries);
    renderCountries(filteredCountries);
});

filterSelect.addEventListener("input", (event) => {
    const value = event.target.value;

    const filteredRegion = countryData.filter((country) => {
    const loweredValue = value.toLowerCase();
    const loweredRegion = country.region.toLowerCase();
    return loweredRegion.includes(loweredValue);
});

    console.log(filteredRegion);
    renderCountries(filteredRegion);
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
    scrollButton.style.visibility = "visible";
    scrollButton.style.opacity = 1;
    } else {
    scrollButton.style.visibility = "hidden";
    scrollButton.style.opacity = 0;
    }
});

document.addEventListener("DOMContentLoaded", async () => {
  //console.log("DOM cargado!")
  //const countries = fetchCountries()
  //    .then(response => renderCountries(response));

  //renderCountries(countries);

    const data = await fetchCountries();
    countryData = data;
    renderCountries(data);

    scrollButton.style.visibility = "hidden";
    scrollButton.style.opacity = 0;
});
