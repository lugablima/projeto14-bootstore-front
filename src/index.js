import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./Assets/Styles/reset.css";
import "./Assets/Styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
