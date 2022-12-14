import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Globalstyles from "./global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Globalstyles />
    <App />
  </React.StrictMode>
);
