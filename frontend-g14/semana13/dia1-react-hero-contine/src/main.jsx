import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/Router'
import { Toaster, toast } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router />
    <Toaster richColors/>
  </>
)
