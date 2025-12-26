import { Link } from "react-router-dom";

interface SidebarItemProps {
  to: string; // required link
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

export default function SidebarItem({
  to,
  icon,
  label,
  active,
  onClick,
  collapsed,
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
        {!collapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}
