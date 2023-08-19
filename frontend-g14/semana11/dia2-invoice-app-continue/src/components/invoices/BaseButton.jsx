import React from 'react'

import { invoiceBaseButton } from '../../services/invoiceBaseButton'

const BaseButton = ({ children }) => {
  return (
    <>
        <button className={`min-w-[100px] rounded-full px-4 py-2 ${invoiceBaseButton(children)} text-white capitalize`}>
            {children}
        </button>
    </>
  )
}

export default BaseButton