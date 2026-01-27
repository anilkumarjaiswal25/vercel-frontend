import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Admin-Navbar";
import AdminSidebar from "./Admin-Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar />

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
