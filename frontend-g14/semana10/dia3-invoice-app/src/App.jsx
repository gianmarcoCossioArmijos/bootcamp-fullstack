import { useState } from "react";
import { useEffect } from "react";

import { fetchInvoices } from "./services/invoices";

import InvoicesList from "./components/invoices/InvoicesList";
import InvoicesHeader from "./components/invoices/InvoicesHeader";

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {

    fetchInvoices()
      .then(data => setInvoices(data)); 
  })

  return (
    <>
      <InvoicesHeader invoices={invoices} />

      <InvoicesList invoices={invoices} />
    </>
  )
}

export default App
