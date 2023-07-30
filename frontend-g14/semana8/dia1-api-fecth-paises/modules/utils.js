
export const renderCountries = function(countries) {

    const countryListElement = document.querySelector(".app__list");
    const dialog = document.querySelector(".app__dialog");
    const dialogClose = document.querySelector(".dialog__close");
    const moreInfoButton = document.querySelectorAll(".country__moreinfo");
    const dialogBody = document.querySelector(".dialog__body");

    let countryList = "";

    if (countries.length === 0) {

        countryListElement.classList.add("app__list-notFound");
        countryListElement.innerHTML =  `
                                <div>
                                <img src="./images/not_found.svg" width="200" heigth="200">
                                <h3>Sorry, no results found!</h3>
                                </div>
                                `
        return
    }

        countryListElement.classList.remove("app__list-notFound");
        countries.forEach(country => {
            countryList += `
                        <div class="country">
                            <img class="country__flag" src="${country.flags.png}" alt="${country.name.common}"></h4>
                            <div class="country__wrapper">
                                <h3 class="country__title">
                                    ${country.name.common}
                                </h3>
                                <div class="country__description">
                                    <strong">Population:</strong>${formatNumber(country.population)}
                                </div>
                                <div class="country__description">
                                    <strong">Region:</strong>${country.region}
                                </div>
                                <div class="country__description">
                                    <strong">Capital:</strong>${country.capital}
                                </div>
                                <button class="country__moreinfo" data-name="${country.name.common}">More</button>
                            </div>
                        </div>`;
        });

        countryListElement.innerHTML = countryList;
}

export const formatNumber = (number) => {
    return Intl.NumberFormat("es-PE").format(number);
}
