function puntuar(seleccion) {

    const repuestas =  ["2020","California","Suspencion"];

    repuestas.forEach(respuesta => {

        if (respuesta === seleccion) {

            let puntaje = Number(JSON.parse(localStorage.getItem("puntaje")));
            puntaje = puntaje + 1;
            localStorage.setItem("puntaje", JSON.stringify(puntaje));
        }
    })
}

export default puntuar;