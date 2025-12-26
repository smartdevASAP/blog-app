import {
  LayoutDashboard,
  Compass,
  FilePlus,
  BookOpen,
  BarChart3,
  // MessageSquare,
  Bookmark,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white px-4 py-6 flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 mb-8">Weblog</div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6">
        {/* Main */}
        <div>
          <p className="text-xs text-gray-400 mb-2 uppercase">Main</p>
          <div className="space-y-1">
            <SidebarItem
              to="/dashboard"
              icon={<LayoutDashboard size={18} />}
              label="Overview"
            />
            <SidebarItem
              to="/dashboard/explore"
              icon={<Compass size={18} />}
              label="Explore"
            />
            <SidebarItem
              to="/dashboard/feed"
              icon={<BookOpen size={18} />}
              label="My Feed"
            />
          </div>
        </div>

        {/* Creator */}
        <div>
          <p className="text-xs text-gray-400 mb-2 uppercase">Creator</p>
          <div className="space-y-1">
            <SidebarItem
              to="/dashboard/write"
              icon={<FilePlus size={18} />}
              label="Write Blog"
            />
            <SidebarItem
              to="/dashboard/blogs"
              icon={<BookOpen size={18} />}
              label="My Blogs"
            />
            <SidebarItem
              to="/dashboard/trash"
              icon={<BarChart3 size={18} />}
              label="Trashed"
            />
          </div>
        </div>

        {/* Engagement */}
        <div>
          <p className="text-xs text-gray-400 mb-2 uppercase">Engagement</p>
          <div className="space-y-1">
            {/* <SidebarItem
              to="/dashboard/comments"
              icon={<MessageSquare size={18} />}
              label="Comments"
            /> */}
            <SidebarItem
              to="/dashboard/bookmarks"
              icon={<Bookmark size={18} />}
              label="Bookmarked"
            />
          </div>
        </div>

        {/* Monetization */}
        <div>
          <p className="text-xs text-gray-400 mb-2 uppercase">Monetization</p>
          <div className="space-y-1">
            <SidebarItem
              to="/dashboard/wallet"
              icon={<Wallet size={18} />}
              label="Wallet"
            />
          </div>
        </div>
      </nav>

      {/* Bottom */}
      <div className="space-y-1 border-t pt-4">
        <SidebarItem
          to="/dashboard/settings"
          icon={<Settings size={18} />}
          label="Settings"
        />
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
