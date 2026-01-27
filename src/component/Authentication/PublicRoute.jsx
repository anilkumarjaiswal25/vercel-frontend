import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
