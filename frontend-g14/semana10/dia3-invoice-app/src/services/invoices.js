const url = "http://localhost:3000/invoices";

export const fetchInvoices = async() => {

    const reposnse = await fetch(url);
    const data = await reposnse.json();
    return data;
  }