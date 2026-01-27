import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { useAuth } from './Auth';
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { storeTokenInLocalStorage } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }) // ✅ Corrected: direct email, password use karein
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ LocalStorage ke sath-sath Context update karein taaki Navbar change ho jaye
        storeTokenInLocalStorage(data.token);
        // if(data.user && data.user.)
        if (data.user.role === "admin") {
          toast.success("Welcome back! Login successful 🎉");
          navigate('/admin')
        }
        else {
          navigate('/'); // Home page redirect
        }
      } else {
        // ✅ Corrected: data.message use karein (res_data nahi)
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log("Login Error:", error);
      toast.error("Something went wrong!");
    }
  };


  return (
    <div className=''>
      <section className='max-w-[600px] mx-auto min-h-screen px-[40px] py-[25px] text-white shadow-xl transition-all duration-150 hover:shadow-2xl'>
        <h1 className='text-center mt-[10px] text-[35px] purple'>Login Form</h1>
        <form onSubmit={handleSubmit} className='mt-5'>
          <div className='flex flex-col mt-[30px] gap-[5px]'>
            <label htmlFor="email" className='text-center text-[18px]'>Email:</label>
            <input type="text"
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
          </div>
          <div className='flex flex-col mt-[30px] gap-[5px]'>
            <label htmlFor="" className='text-center text-[18px]'>Password:</label>
            <input type="text"
              name="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
          </div>
          <div className='mt-[30px] flex justify-center'>
            <button className='px-[30px] py-[4px] rounded-[4px] bg-purple-500 text-[20px] transition-all duration-100 hover:bg-purple-900 cursor-pointer'>Login</button>
          </div>
          <div className='flex flex-row justify-center mt-[12px]'>
            <h1 className='text-[20px]'>Don't have an account? <span><Link className='purple cursor-pointer' to={'/register'}>Register</Link></span></h1>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login