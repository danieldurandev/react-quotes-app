import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MultipleCustomHook } from "./components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MultipleCustomHook />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
