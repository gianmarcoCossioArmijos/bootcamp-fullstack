export const invoiceBaseButton = (accion) => {

    let color = "";

    if (accion === "paid" || accion === "save changes") {
        color = "bg-indigo-500";
        return color;
    }
    
    if (accion === "edit") {
        color = "bg-slate-500";
        return color;
    }
    
    if (accion === "delete" || accion === "cancel") {
        color = "bg-red-500";
        return color;
    }
}