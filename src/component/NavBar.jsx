import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineFolderOpen,
  AiOutlineMail,
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLogout,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication/Auth";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn, isLoading, LogoutUser } = useAuth();
  useEffect(() => {
    if (user?.role === 'admin') {
      navigate('/admin');
    }
  }, [user, navigate]);

  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const links = [
    { name: "Home", path: "", icon: <AiOutlineHome className="text-[20px] me-[6px]" /> },
    { name: "About", path: "/about", icon: <AiOutlineUser className="text-[20px] me-[6px]" /> },
    { name: "Project", path: "/project", icon: <AiOutlineFolderOpen className="text-[20px] me-[6px]" /> },
    { name: "Contact", path: "/contact", icon: <AiOutlineMail className="text-[20px] me-[6px]" /> },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`text-[#ecf0f1] sticky top-0 left-0 right-0 bg-[#181a27] lg:bg-[rgba(0,0,0,0.5)] backdrop-blur-md  ${scrolled ? "z-[10000] lg:bg-[rgba(0,0,0,0.5)] lg:backdrop-blur-md" : "lg:bg-transparent"}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-around h-[120px]">
            <h1 className="purple text-2xl font-[550]">{isLoggedIn && user ? `Welcome, ${user.name}` : "Portfolio"}</h1>
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-[45px] text-[20px] font-medium">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="cursor-pointer hover:text-blue-600  flex items-center"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}

              {isLoggedIn ? (
                <>
                  {/* ✅ ADMIN LINK */}
                  {user?.role === "admin" && (
                    <NavLink
                      to="/admin"
                      className="cursor-pointer hover:text-blue-600 flex items-center"
                    >
                      <AiOutlineBars className="text-[20px] me-[6px]" />
                      Admin Panel
                    </NavLink>
                  )}

                  <NavLink
                    to="/resume"
                    className="cursor-pointer hover:text-blue-600 flex items-center"
                  >
                    <CgFileDocument className="text-[20px] me-[6px]" />
                    Resume
                  </NavLink>

                  <NavLink
                    to="/logout"
                    className="cursor-pointer hover:text-blue-600 flex items-center"
                  >
                    <AiOutlineLogout className="text-[20px] me-[6px]" />
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register" className="cursor-pointer hover:text-blue-600 flex items-center">
                    <AiOutlineUserAdd className="text-[20px] me-[6px]" />
                    Register
                  </NavLink>

                  <NavLink to="/login" className="cursor-pointer hover:text-blue-600 flex items-center">
                    <AiOutlineLogin className="text-[20px] me-[6px]" />
                    Login
                  </NavLink>
                </>
              )}

            </div>
            <div className="lg:hidden">
              <button
                className="text-[30px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon className="transition-all duration-150" icon={isOpen ? faXmark : faBars} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu - Overlay below Nav */}
        <div
          className={`lg:hidden bg-[#181a27] absolute left-0 right-0 top-full transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-[450px] opacity-100 z-[10001] " : "max-h-0 "} 
            overflow-hidden z-50`}
        >
          <div className="flex flex-col gap-6 py-6 items-center text-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-blue-600  flex items-center"
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
            {isLoggedIn ? (
              <>
                {/* ✅ ADMIN LINK */}
                {user?.role === "admin" && (
                  <NavLink
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-blue-600 flex items-center"
                  >
                    <AiOutlineBars className="text-[20px] me-[6px]" />
                    Admin Panel
                  </NavLink>
                )}

                <NavLink
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-600 flex items-center"
                >
                  <CgFileDocument className="text-[20px] me-[6px]" />
                  Resume
                </NavLink>

                <NavLink
                  to="/logout"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-600 flex items-center"
                >
                  <AiOutlineLogout className="text-[20px] me-[6px]" />
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-600 flex items-center">
                  <AiOutlineUserAdd className="text-[20px] me-[6px]" />
                  Register
                </NavLink>

                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-600 flex items-center">
                  <AiOutlineLogin className="text-[20px] me-[6px]" />
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar; 