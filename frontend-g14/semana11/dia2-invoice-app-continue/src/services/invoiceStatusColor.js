
export const colorInvoiceStatusBG = (status) => {

    let color = "";

    if (status === "paid") {
        color = "bg-emerald-400/20";
        return color;
    }
    
    if (status === "pending") {
        color = "bg-orange-400/20";
        return color;
    }
    
    if (status === "draft") {
        color = "bg-slate-400/20";
        return color;
    }
}

export const colorInvoiceStatusText = (status) => {

    let color = "";

    if (status === "paid") {
        color = "text-emerald-400";
        return color;
    }
    
    if (status === "pending") {
        color = "text-orange-400";
        return color;
    }
    
    if (status === "draft") {
        color = "text-slate-400";
        return color;
    }
}