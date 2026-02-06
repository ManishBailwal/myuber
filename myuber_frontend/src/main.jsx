import React from "react";
import ReactDom from "react-dom/client";
import AppRouter from "./app/router";
import AppProviders from "./app/providers";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </React.StrictMode>,
);
