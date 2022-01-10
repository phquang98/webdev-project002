import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Use this pattern to maintain Header + Footer, TODO: maybe sth better ? */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
