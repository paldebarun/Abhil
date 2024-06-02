import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ActiveLinkContext } from "./context/ActiveLinkContext.jsx";
export const server = import.meta.env.VITE_SERVER_API;
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveLinkContext>
      <App />
      <Toaster/>
    </ActiveLinkContext>
  </React.StrictMode>
);
