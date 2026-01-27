import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Hook import karein
import { useAuth } from "./Auth";
import { toast } from "react-toastify";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    LogoutUser();
    toast.success("Logged out successfully!", { toastId: "logout-toast" });
    
    // Direct function call se navigate karein
    navigate("/login", { replace: true }); 
  }, [LogoutUser, navigate]);

  return null; // Kuch bhi render karne ki zaroorat nahi
};