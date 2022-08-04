import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import Contact from "./Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
