import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App min={-5} max={20} />
  </React.StrictMode>,
  document.getElementById("root")
);
