import React from 'react'

import { colorInvoiceStatusBG } from '../../services/invoiceStatusColor'
import { colorInvoiceStatusText } from '../../services/invoiceStatusColor'

const InvoiceStatus = ({ status }) => {

  return (
    <>
        <h3 className={`w-[110px] px-4 py-2 flex gap-2 rounded-md capitalize ${colorInvoiceStatusBG(status)} ${colorInvoiceStatusText(status)}`}>
            <span>●</span>
            <span>{status}</span>
        </h3>
    </>
  )
}

export default InvoiceStatus