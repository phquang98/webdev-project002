import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Expenses from "./pages/expenses.page";
import Invoice from "./pages/invoice.page";
import Invoices from "./pages/invoices.page";
import NewInvoice from "./pages/newinvoice.page";
import NotFound from "./pages/notfound.page";

ReactDOM.render(
  <React.StrictMode>
    {/* React ctx used by rrv6 ?, wrapped this around root of React application */}
    <BrowserRouter>
      <Routes>
        {/* absolute path /home, usually topmost only */}
        <Route path="/home" element={<App />}>
          {/* relative path without slash */}
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<div style={{ padding: "1rem" }}>This is a default view-data of /invoices</div>} />
            {/* dynamics relative path, useParams<stringHere>() to take it */}
            <Route path=":invoiceId" element={<Invoice />} />
            {/* relative path using regex ???, dont know if order between Route important or not */}
            <Route path="new" element={<NewInvoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<NotFound />} /> {/* handles notfoundorexistedpath, pollutedparampath,  */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
