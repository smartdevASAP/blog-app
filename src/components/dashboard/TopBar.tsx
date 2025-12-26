import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

function TopBar() {
  const { user } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left Section: Page title / overview */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-100 text-gray-500 text-sm font-semibold px-2 py-1 rounded-sm">
          Overview
        </div>
        <p className="text-gray-700 font-medium text-sm">Dashboard</p>
      </div>

      {/* Right Section: Status, notifications, user */}
      <div className="flex items-center gap-6">
        {/* Status */}
        <div className="text-sm text-gray-600">
          Status: <span className="font-semibold text-green-600">Active</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        {/* User profile */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
            {user?.name?.[0] || "U"}
          </div>
          <span className="text-gray-700 font-medium">
            {user?.name || "User"}
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Optional dropdown menu */}
        {menuOpen && (
          <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 py-2">
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Profile
            </p>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Settings
            </p>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
