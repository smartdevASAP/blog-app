import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Dashboard/settings";
import ProtectedRoute from "../components/dashboard/ProtectedRoute";
import { Toaster } from "sonner";
import Explore from "../pages/Dashboard/Explore";
import Feed from "../pages/Dashboard/Feed";
import WriteBlogs from "../pages/Dashboard/WriteBlogs";
import MyBlogs from "../pages/Dashboard/MyBlogs";
import Trashed from "../pages/Dashboard/Trashed";
import Bookmarked from "../pages/Dashboard/Bookmarked";
import Wallet from "../pages/Dashboard/Wallet";
import BlogDetails from "../pages/blogDetails";

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

        {/* Dashboard (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard home */}
          <Route index element={<Dashboard />} />

          {/* Dashboard nested pages */}
          <Route path="explore" element={<Explore />} />
          <Route path="bloggers" element={<Feed />} />
          <Route path="write" element={<WriteBlogs />} />
          <Route path="blogs" element={<MyBlogs />} />
          <Route path="trash" element={<Trashed />} />
          <Route path="bookmarks" element={<Bookmarked />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="settings" element={<Settings />} />

          {/* Blog details inside dashboard */}
          <Route path="blog/:id" element={<BlogDetails />} />
        </Route>

        {/* Optional: public blog route (outside dashboard) */}
        {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}

        {/* 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default AppRouter;
