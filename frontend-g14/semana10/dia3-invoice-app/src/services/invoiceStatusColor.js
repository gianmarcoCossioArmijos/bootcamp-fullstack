
export const colorInvoiceStatus = (status) => {

    let color = "";

    if (status === "paid") {
        color = "emerald";
        return color;
    }
    
    if (status === "pending") {
        color = "orange";
        return color;
    }
    
    if (status === "draft") {
        color = "slate";
        return color;
    }
}