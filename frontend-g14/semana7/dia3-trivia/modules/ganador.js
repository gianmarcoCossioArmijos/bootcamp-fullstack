function filtrarGanador() {

    let mensaje = "";
    let mensajePuntuacion = "";
    let puntaje = Number(JSON.parse(localStorage.getItem("puntaje")));

    if (puntaje === 0) {
        
        mensaje = "¡Suerte para la proxima! 😪";
        mensajePuntuacion = "Tu puntuacion es 30 de 100";

        localStorage.setItem("mensaje", JSON.stringify(mensaje));
        localStorage.setItem("mensajePuntuacion", JSON.stringify(mensajePuntuacion));
        return;
    } else if (puntaje === 1) {
        
        mensaje = "¡Suerte para la proxima! 😟";
        mensajePuntuacion = "Tu puntuacion es 30 de 100";

        localStorage.setItem("mensaje", JSON.stringify(mensaje));
        localStorage.setItem("mensajePuntuacion", JSON.stringify(mensajePuntuacion));
        return;
    } else if (puntaje === 2) {

        mensaje = "¡Casi perfecto! sigue intentando 👏";
        mensajePuntuacion = "Tu puntuacion es 60 de 100";

        localStorage.setItem("mensaje", JSON.stringify(mensaje));
        localStorage.setItem("mensajePuntuacion", JSON.stringify(mensajePuntuacion));
        return;
    } else if (puntaje === 3) {

        mensaje = "¡Ganaste! bien hecho 👑";
        mensajePuntuacion = "Tu puntuacion es 100 de 100";

        localStorage.setItem("mensaje", JSON.stringify(mensaje));
        localStorage.setItem("mensajePuntuacion", JSON.stringify(mensajePuntuacion));
        return;
    } else {
        return;
    }
}

export default filtrarGanador;