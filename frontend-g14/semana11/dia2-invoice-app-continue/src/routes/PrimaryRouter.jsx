import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import PrimaryLayout from "../layouts/PrimaryLayout";
import NewInvoice from "../pages/NewInvoice";
import InvoiceDetail from "../pages/InvoiceDetail";

export const PrimaryRouter = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/new-invoice",
                element: <NewInvoice />
            },
            {
                path: "/invoices/:id",
                element: <InvoiceDetail />
            }
        ]
    }
])