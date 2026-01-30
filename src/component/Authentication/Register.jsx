import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from './Auth';
const Register = () => {
  const navigate = useNavigate();
  const { storeTokenInLocalStorage } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://anil-jaiswal.onrender.com/api/register`, {
      // const response = await fetch('http://localhost:8000/api/register', {
        method: "POST",
        headers: {
          "Accept": "application/json",      // Laravel ko batane ke liye ki JSON chahiye
          "Content-Type": "application/json" // Hum JSON data bhej rahe hain
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json();
      if (response.ok) {
        storeTokenInLocalStorage(data.token); // ✅ Yeh zaroori hai
        toast.success("Account created successfully 🎉");
        navigate('/');
      }

      else {
  alert(data.message || "Signup Failed");
  console.log(data.errors);
}
    }
    catch (error) {
  console.log("Network error :", error)
}
  }


return (
  <div className=''>
    <section className='max-w-[600px] mx-auto min-h-screen px-[40px] py-[25px] text-white shadow-xl transition-all duration-150 hover:shadow-2xl'>
      <h1 className='text-center mt-[10px] text-[35px] purple'>Registration Form</h1>
      <form action="" onSubmit={handleSubmit} className='mt-5'>
        <div className='flex flex-col mt-[30px] gap-[5px]'>
          <label htmlFor="name" className='text-center text-[18px]'>Name:</label>
          <input type="text"
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
        </div>
        <div className='flex flex-col mt-[30px] gap-[5px]'>
          <label htmlFor="email" className='text-center text-[18px]'>Email:</label>
          <input type="text"
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
        </div>
        <div className='flex flex-col mt-[30px] gap-[5px]'>
          <label htmlFor="phone" className='text-center text-[18px]'>Phone Number:</label>
          <input type="text"
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
        </div>
        <div className='flex flex-col mt-[30px] gap-[5px]'>
          <label htmlFor="password" className='text-center text-[18px]'>Password:</label>
          <input
            type="text"
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
        </div>
        <div className='mt-[30px] flex justify-center'>
          <button className='px-[30px] py-[4px] rounded-[4px] bg-purple-500 text-[20px] transition-all duration-100 hover:bg-purple-900 cursor-pointer'>Register</button>
        </div>
        <div className='flex flex-row justify-center mt-[12px]'>
          <h1 className='text-[20px]'>Already have an account? <span><Link className='purple cursor-pointer' to={'/login'}>Login</Link></span></h1>
        </div>
      </form>
    </section>
  </div>
)
}

export default Register