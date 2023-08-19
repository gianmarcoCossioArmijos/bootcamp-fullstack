
export const fetchInvoiceDetail = async(id) => {

    const reponse = await fetch(`http://localhost:3000/invoices/${id}`);
    const data = await reponse.json();
    console.log(data);
    return data;
  }