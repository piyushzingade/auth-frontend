import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App is a TypeScript file (App.tsx)
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
