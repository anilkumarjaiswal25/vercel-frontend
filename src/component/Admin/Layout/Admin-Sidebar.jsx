import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdMail,
} from "react-icons/md";

const AdminSidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/admin", icon: <MdDashboard /> },
    { name: "Users", path: "/admin/users", icon: <MdPeople /> },
    { name: "Messages", path: "/admin/messages", icon: <MdMail /> },
  ];

  return (
    <aside className="w-[260px] bg-gray-900 text-gray-100 min-h-screen">
      <div className="h-[70px] flex items-center justify-center text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav className="p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-md transition
              ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
