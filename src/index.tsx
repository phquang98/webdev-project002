import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import ProductPage from "./pages/Product";
import SignUpPage from "./pages/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Use this pattern (1 big Route) to maintain Header + Footer, TODO: maybe sth better ? */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />}></Route>
          <Route path="products" element={<ProductPage />}></Route>
          <Route path="signUp" element={<SignUpPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
