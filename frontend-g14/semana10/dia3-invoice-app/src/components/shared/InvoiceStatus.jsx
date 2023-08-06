import React from 'react'

import { colorInvoiceStatus } from '../../services/invoiceStatusColor'

const InvoiceStatus = ({ label }) => {

  return (
    <>
        <h3 className={`w-2/12 px-4 py-2 rounded-md text-center capitalize bg-${colorInvoiceStatus(label)}-400/30 text-${colorInvoiceStatus(label)}-400`}>
            <span>●</span>
            {label}
        </h3>
    </>
  )
}

export default InvoiceStatus