import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type SidebarItemProps = {
  to: string;
  icon: ReactNode;
  label: string;
};

function SidebarItem({ to, icon, label }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}

export default SidebarItem;
