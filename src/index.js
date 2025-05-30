import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CsrfProvider } from '../src/context/csrfContext';
import AppRouter from "./route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CsrfProvider>
      <AppRouter />
    </CsrfProvider>
  </React.StrictMode>
);
