
// Variables declaradas
const url = "https://fakestoreapi.com/products/categories";
const page = document.querySelector("html")
const categoriesSection = document.querySelector(".categories");
const productsSection = document.querySelector(".products");

// Funcion para renderizar categorias
async function renderCategories() {

    const response = await fetch(url); // fetch y captura de la data
    const data = await response.json(); // conversion de la data en json

    let categoryButtons = "" // variable que contendra las categorias(botones)

    // recorrido de data, para renderizar las categorias, una a una
    data.forEach(category => {
        
        categoryButtons = 
                        categoryButtons + 
                        `
                        <button class="category">${category}</button>
                        `
        categoriesSection.innerHTML = categoryButtons; // renderizado de las categorias
    });

    const categorieButton = document.querySelectorAll(".category"); // captura de los botones de categoria

    //recorrido de los botones añadiendo un event listener click
    categorieButton.forEach(button => {
        button.addEventListener("click", event => {

            fetchProductByCategory(event.target.textContent); // se ejecuta el fetch de productos por categoria
        });
    });
};

renderCategories(); // renderizacion de categorias y productos por categoria

// funcion fetch de productos por categoria
async function fetchProductByCategory(category) {

    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`); // fetch de productos pasando la categoria
    const json = await response.json(); // data convertida a json

    let productsElement = "";

    // recorrido de productos y asigancion en la variable productsElement
    json.forEach(product => {

        productsElement = productsElement + `
                                            <article class="product">
                                                <img class="product__image" src="${product.image}" alt="${product.title}">
                                                <div class="product__description">
                                                    <h3 class="product__title">${product.title}</h3>
                                                    <p class="product__price">S/. ${product.price}</p>
                                                </div>
                                            </article>
                                            `
    });

    productsSection.innerHTML = productsElement; //renderizado de productos
}