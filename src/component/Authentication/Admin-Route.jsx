import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";

const AdminRoute = () => {
  const { isLoggedIn, user } = useAuth();

  return isLoggedIn && user?.role === "admin"
    ? <Outlet />
    : <Navigate to="/" replace />;
};

export default AdminRoute;
