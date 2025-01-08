import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/router";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
