import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <div>
      <MainLayout />
      <Routes>
        <Route path="" element="" />
      </Routes>
    </div>
  );
}

export default AppRouter;
