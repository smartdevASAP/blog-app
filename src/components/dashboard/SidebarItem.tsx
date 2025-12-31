import { Link } from "react-router-dom";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
  badge?: number; // ✅ optional badge
}

export default function SidebarItem({
  to,
  icon,
  label,
  active,
  onClick,
  collapsed,
  badge,
}: SidebarItemProps) {
  return (
    <Link to={to} onClick={onClick}>
      <div
        className={`flex items-center justify-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
          ${
            active
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }
          ${!collapsed ? "justify-start" : "justify-center"}
        `}
      >
        {icon}
        {!collapsed && <span className="flex-1">{label}</span>}

        {!collapsed && badge && (
          <span className="ml-auto text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}
