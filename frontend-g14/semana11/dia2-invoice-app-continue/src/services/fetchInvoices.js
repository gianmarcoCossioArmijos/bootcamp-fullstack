const url = "http://localhost:3000/invoices";

export const fetchInvoices = async() => {

    const reponse = await fetch(url);
    const data = await reponse.json();
    return data;
  }