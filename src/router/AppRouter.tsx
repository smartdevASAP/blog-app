import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Toaster } from "sonner";

function AppRouter() {
  return (
    <>
      {/* 🔔 Toast container (ONLY ONCE) */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className: "z-[9999]",
        }}
      />
      <Routes>
        {/* Landing / main site */}
        <Route path="/" element={<MainLayout />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Optional: 404 page */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default AppRouter;
