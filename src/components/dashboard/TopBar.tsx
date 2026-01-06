import { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";

function TopBar() {
  const { user, menuText } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- CLOSE DROPDOWN ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- CHECK AUTH COOKIE ---------------- */
  useEffect(() => {
    const verifySession = async () => {
      try {
        const { data } = await api.get("/me", { withCredentials: true });
        if (!data?.success) {
          toast.error("Session expired");
        }
      } catch (err) {
        console.error(err);
        toast.error("Authentication check failed");
      }
    };

    verifySession();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* ---------------- LEFT ---------------- */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Dashboard</span>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-700 capitalize">
            {menuText || "Overview"}
          </span>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="flex items-center gap-6 relative">
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          {/* User Menu */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              {user?.name || "User"}
            </span>

            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="
                absolute right-0 top-12 w-44
                bg-white border border-gray-200
                rounded-xl shadow-lg overflow-hidden
                animate-fadeIn
              "
            >
              <DropdownItem label="Profile" />
              <DropdownItem label="Settings" />
              <div className="border-t border-gray-100 my-1" />
              <DropdownItem label="Logout" danger />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------------- DROPDOWN ITEM ---------------- */
function DropdownItem({
  label,
  danger = false,
}: {
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`
        w-full text-left px-4 py-2 text-sm
        transition
        ${
          danger
            ? "text-red-600 hover:bg-red-50"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
}

export default TopBar;
