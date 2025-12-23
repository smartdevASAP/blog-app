import { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo_svg } from "../../assets/assets_config";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const menu_options = [
    { _id: 1, option: "Home", pointer: "home" },
    { _id: 2, option: "Trending", pointer: "trending" },
    { _id: 3, option: "Categories", pointer: "categories" },
    { _id: 4, option: "Authors", pointer: "authors" },
    { _id: 5, option: "Buy me Coffee", pointer: "coffee" },
  ];

  const handleClick = (menu: string) => {
    setSelectedMenu(menu);
    const el = document.getElementById(menu);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // close drawer on mobile
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <img src={logo_svg} alt="logo" className="h-8" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
            {menu_options.map((item) => (
              <li
                key={item._id}
                onClick={() => handleClick(item.pointer)}
                className={`cursor-pointer transition hover:text-blue-600 ${
                  selectedMenu === item.pointer ? "text-blue-600 underline" : ""
                }`}
              >
                {item.option}
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="px-5 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-5 py-2 bg-gray-100 text-gray-800 text-sm border border-gray-200 rounded-md hover:bg-gray-200 transition">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 md:hidden shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logo_svg} alt="logo" className="h-7" />
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-4 p-6 text-gray-700 text-sm font-medium">
          {menu_options.map((item) => (
            <li
              key={item._id}
              onClick={() => handleClick(item.pointer)}
              className={`cursor-pointer transition hover:text-blue-600 ${
                selectedMenu === item.pointer ? "text-blue-600" : ""
              }`}
            >
              {item.option}
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="mt-auto p-6 flex flex-col gap-3 border-t">
          <button className="w-full py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
          <button className="w-full py-2 bg-gray-100 text-gray-800 border rounded-md">
            Register
          </button>
        </div>
      </aside>
    </>
  );
}

export default NavBar;
