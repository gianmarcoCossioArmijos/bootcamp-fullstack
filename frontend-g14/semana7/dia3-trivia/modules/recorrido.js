function recorrerTrivia() {

    let index = Number(JSON.parse(localStorage.getItem("index")));
    index = index + 1;
    console.log(index);
    localStorage.setItem("index", JSON.stringify(index));
}

export default recorrerTrivia;