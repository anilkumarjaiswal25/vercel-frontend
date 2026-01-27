import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const api = "http://127.0.0.1:8000/api/contact"
  const ContactFrom = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    if (!token) {
      toast.error("Please login first")
      return;
    }
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email, subject })
      });
      const data = await response.json()
      if (response.ok) {
        toast.success("Message sent successfully 🎉");
        setUsername("");
        setEmail("");
        setSubject("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("message Error:", error);
      toast.error("not sent messages!");
    }
  }

  return (
    <div className=''>
      <section id='contact' className=" max-w-[1370px] mx-auto min-h-screen p-6 flex flex-col justify-center">
        <div

        >
          <h1 className="text-center text-4xl font-bold text-white">
            Get In <span className="purple">Touch</span>
          </h1>
          <p className="text-center text-lg text-white mt-[15px] max-w-2xl mx-auto">
            I’m currently open for new opportunities — whether you have a question, want to discuss a project, or just say hi, my inbox is always open!
          </p>


          <div className=" mt-[25px] grid grid-cols-1 md:grid-cols-2 gap-10">

            <form className="space-y-6 shadow-xl hover:shadow-2xl rounded-2xl p-8" onSubmit={ContactFrom}>
              <div className='flex flex-col mt-[30px] gap-[5px]'>
                <label htmlFor="username" className='text-start text-[18px] text-white'>UserName:</label>
                <input type="text" name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
              </div>
              <div className='flex flex-col mt-[30px] gap-[5px]'>
                <label htmlFor="email" className='text-start text-[18px] text-white'>Email:</label>
                <input type="text" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full text-white border border-gray-300 bg-[#2b2b3c] rounded-lg px-[5px] py-[2px] focus:outline-none focus:ring-3 focus:ring-purple-500' />
              </div>
              <div className='flex flex-col mt-[30px] gap-[5px]'>
                <label htmlFor="message" className="text-start text-[18px] text-white">
                  Your Message
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  rows="5"
                  placeholder=""
                  className="w-full border border-gray-300 text-white bg-[#2b2b3c] rounded-lg p-3 focus:outline-none focus:ring-3 focus:ring-purple-500"
                ></textarea>
              </div>
              <div className='mt-[30px] flex justify-center'>
                <button className='px-[30px] py-[8px] rounded-[4px] bg-purple-500 text-[20px] transition-all duration-100 ease-in-out hover:bg-purple-900'>Send Message</button>
              </div>
            </form>

            <div className="flex flex-col justify-center space-y-6 text-center md:text-left text-white">
              <h2 className="text-2xl font-semibold">Let’s Connect</h2>
              <p className="">
                You can also reach me directly through the following platforms:
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="https://github.com/yourusername" target="_blank" className="hover:underline text-purple-700"><FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub</a>
                </li>
                <li><a href="https://linkedin.com/yourusername" target="_blank" className="text-purple-700 hover:underline"><FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn</a></li>
                <li><a href="https://whatsapp.com/yourusername" target="_blank" className="text-purple-700 hover:underline"><FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Whatsapp</a></li>
                <li><a href="https://facebook.com/yourusername" target="_blank" className="text-purple-700 hover:underline"> <FontAwesomeIcon icon={faFacebook} className="mr-2" />Facebook</a></li>
                <li><a href="https://instagram.com/in/yourusername" target="_blank" className="text-purple-700 hover:underline"><FontAwesomeIcon icon={faInstagram} className="mr-2" />Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact