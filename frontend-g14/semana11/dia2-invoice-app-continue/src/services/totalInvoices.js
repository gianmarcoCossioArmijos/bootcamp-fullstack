
export const countInvoices = (invoices) => {

    let total = 0;
    invoices.forEach(() => {
        
        total = total + 1;
    })
    
    return total;
}