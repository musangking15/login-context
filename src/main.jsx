import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddProvider from "./Context/AddContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Provider>
  // <Provider>
  <BrowserRouter>
    <AddProvider>
      <App />
    </AddProvider>
  </BrowserRouter>
  // </Provider>
  // </Provider>
  // </React.StrictMode>
);
