import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routes/router";
import store from "./store";
import "./assets/css/main.css";

// Clear token from local storage when the server/vscode is off
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
