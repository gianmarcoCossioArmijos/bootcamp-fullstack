
export const countInvoices = (invoices) => {

    let total = 0;
    invoices.forEach(invoice => {
        
        total = total + 1;
    })
    
    return total;
}