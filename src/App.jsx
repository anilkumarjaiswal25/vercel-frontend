import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
const App = () => {
  return (
    <div className="font-serif h-section">
      <Header />
      <main className="">
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
