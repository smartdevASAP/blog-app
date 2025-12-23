import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
//import App from "./App.tsx";
import AppRouter from "./router/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <AppRouter />
        {/* <App /> */}
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
