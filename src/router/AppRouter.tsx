// import MainLayout from "../layouts/MainLayout";
// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";

// function AppRouter() {
//   return (
//     <div>
//       <Route path="/" element={<MainLayout />} />
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         {/* not found page 404 */}
//       </Routes>
//     </div>
//   );
// }

// export default AppRouter;

import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function AppRouter() {
  return (
    <Routes>
      {/* Landing / main site */}
      <Route path="/" element={<MainLayout />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Optional: 404 page */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
