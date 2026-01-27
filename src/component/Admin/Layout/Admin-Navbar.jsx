import React from "react";
import { useAuth } from "../../Authentication/Auth";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const { user } = useAuth();

  return (
    <header className="h-[70px] bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <AiOutlineUser className="text-xl" />
          <span className="font-medium">{user?.name}</span>
        </div>

        <NavLink
          to="/logout"
          className="flex items-center gap-1 text-red-600 hover:text-red-700"
        >
          <AiOutlineLogout />
          Logout
        </NavLink>
      </div>
    </header>
  );
};

export default AdminNavbar;
