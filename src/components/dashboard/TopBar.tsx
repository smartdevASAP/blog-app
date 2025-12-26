import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

function TopBar() {
  const { user, menuText } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const statusRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target as Node)
      ) {
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex  justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm relative">
      {/* Left Section: Page title / overview */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-100 text-gray-500 text-sm font-semibold px-2 py-1 rounded-sm">
          Dashboard/
        </div>
        <p className="text-gray-400 font-medium text-sm">{menuText}</p>
      </div>

      {/* Right Section: Status, notifications, user */}
      <div className="flex items-center gap-6 relative">
        {/* Status Dropdown */}

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

        {/* User dropdown */}
        {menuOpen && (
          <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 py-2 z-50">
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
