import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

import { fetchInvoices } from "../services/fetchInvoices";

import InvoicesList from "../components/invoices/InvoicesList";

const Home = () => {
    const [invoices, setInvoices] = useState([]);

  useEffect(() => {

    fetchInvoices()
      .then(data => setInvoices(data)); 
  }, [])

  return (
    <>
        <InvoicesList invoices={invoices} />
    </>
  )
}

export default Home