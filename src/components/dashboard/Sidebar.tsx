import { useState } from "react";
import api from "../../services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  BookOpen,
  Wallet,
  FilePlus,
  BarChart3,
  Bookmark,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useAppContext } from "../../context/AppContext";

function Sidebar() {
  const { setMenuText, bookmarks } = useAppContext();
  const [activeItem, setActiveItem] = useState<string>("Overview");
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = (label: string) => {
    setMenuText(label);
    setActiveItem(label);
  };

  const toggleSidebar = () => setCollapsed(!collapsed);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const { data } = await api.get("/logout", { withCredentials: true });

      if (data.success) {
        toast.success("Logging out");
        navigate("/");
      } else toast.error("error occured in logging out");
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  // Full desktop menu
  const menuItems = [
    {
      section: "Main",
      items: [
        {
          label: "Overview",
          icon: <LayoutDashboard size={18} />,
          to: "/dashboard",
        },
        {
          label: "Explore",
          icon: <Compass size={18} />,
          to: "/dashboard/explore",
        },
        {
          label: "bloggers",
          icon: <BookOpen size={18} />,
          to: "/dashboard/bloggers",
        },
      ],
    },
    {
      section: "Creator",
      items: [
        {
          label: "Write Blog",
          icon: <FilePlus size={18} />,
          to: "/dashboard/write",
        },
        {
          label: "My Blogs",
          icon: <BookOpen size={18} />,
          to: "/dashboard/blogs",
        },
        {
          label: "Trashed",
          icon: <BarChart3 size={18} />,
          to: "/dashboard/trash",
        },
      ],
    },
    {
      section: "Engagement",
      items: [
        {
          label: `Bookmarked ${bookmarks.length}`,
          icon: <Bookmark size={18} />,
          to: "/dashboard/bookmarks",
        },
      ],
    },
    {
      section: "Monetization",
      items: [
        {
          label: "Wallet",
          icon: <Wallet size={18} />,
          to: "/dashboard/wallet",
        },
      ],
    },
  ];

  // Mobile bottom nav
  const mobileItems = [
    {
      label: "Overview",
      icon: <LayoutDashboard size={20} />,
      to: "/dashboard",
    },
    { label: "Explore", icon: <Compass size={20} />, to: "/dashboard/explore" },
    { label: "My Feed", icon: <BookOpen size={20} />, to: "/dashboard/feed" },
    { label: "Wallet", icon: <Wallet size={20} />, to: "/dashboard/wallet" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col ${
          collapsed ? "w-20" : "w-64"
        } h-screen sticky top-0 border-r border-gray-200 bg-white px-4 py-6 transition-all duration-300`}
      >
        {/* Logo + collapse button */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <div className="text-2xl font-bold text-blue-600">Weblog</div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-gray-100"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6">
          {menuItems.map((section) => (
            <div key={section.section}>
              {!collapsed && (
                <p className="text-xs text-gray-400 mb-2 uppercase">
                  {section.section}
                </p>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.label}
                    to={item.to}
                    icon={item.icon}
                    label={!collapsed ? item.label : ""}
                    active={activeItem === item.label}
                    collapsed={collapsed}
                    onClick={() => handleClick(item.label)}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="space-y-1 border-t border-gray-200 pt-4">
          <SidebarItem
            to="/dashboard/settings"
            icon={<Settings size={18} />}
            label={!collapsed ? "Settings" : ""}
            active={activeItem === "Settings"}
            collapsed={collapsed}
            onClick={() => handleClick("Settings")}
          />
          <button
            onClick={() => logout()}
            className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg w-full"
          >
            <LogOut size={18} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-md">
        {mobileItems.map((item) => (
          <SidebarItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label="" // mobile nav shows only icons
            active={activeItem === item.label}
            collapsed={true}
            onClick={() => handleClick(item.label)}
          />
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
