
const url = "http://localhost:3000/invoices/";

export const createNewInvoice = async (form) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}