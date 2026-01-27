import React from 'react'
import Typewriter from 'typewriter-effect';
import HomeIcon from '../assets/images/web-development-8734249_1280.png'
import htmlIcon from "../assets/images/skillicon/html5.svg";
import cssIcon from "../assets/images/skillicon/css3-original.svg";
import jsIcon from "../assets/images/skillicon/javascript.svg";
import bootstrapIcon from "../assets/images/skillicon/bootstrap.svg";
import tailwindIcon from "../assets/images/skillicon/tailwindcss.svg";
import jqueryIcon from "../assets/images/skillicon/jquery.svg";
import reactIcon from "../assets/images/skillicon/react.svg";
import phpIcon from "../assets/images/skillicon/php.svg";
import laravelIcon from "../assets/images/skillicon/laravel.svg";
import mysqlIcon from "../assets/images/skillicon/mysql-original.svg";

import vscodeIcon from "../assets/images/tools/vscode-original.svg";
import npmIcon from "../assets/images/tools/npm-original.svg";
import postmanIcon from "../assets/images/tools/postman-original.svg";
import gitIcon from "../assets/images/tools/git-original.svg";
import githubIcon from "../assets/images/tools/github-original.svg";

import { NavLink, useNavigate } from 'react-router';
const Hero = () => {
  return (
    <>
      <section id='home' className="max-w-[1370px] mx-auto min-h-screen p-6 flex flex-col md:flex-row items-center md:items-start md:gap-8 text-white">
        <div className="w-full md:w-[48%] mx-[1%] order-2 md:order-1 mt-[40px] md:mt-[100px]">
          <h1 className='text-center md:text-start text-[40px] font-[500] mb-[10px]'>
            Hi There!
          </h1>
          <h1 className="text-center md:text-start text-[40px] uppercase font-[500] mb-[10px]">
            Hi I'm <span className='purple'>Anil Jaiswal</span>
          </h1>
          <h1 className="purple text-center md:text-start text-[35px] font-medium mt-[40px]">
            <Typewriter
              options={{
                strings: [
                  "I am a Full Stack Developer.",
                  "I build dynamic web applications.",
                  "I specialize in React & Laravel.",
                  "I create RESTful APIs with Laravel.",
                  "I design modern frontends with React.",
                ],
                autoStart: true,
                loop: true,
                delay: 75, // typing speed
                deleteSpeed: 50, // deleting speed
              }}
            />
          </h1>
        </div>

        <div className="w-full md:w-[48%] mx-[1%] order-1 md:order-2 flex justify-center mt-[40px] md:mt-[100px]">
          <img src={HomeIcon} alt="Anil" className="object-contain w-full max-w-[350px] h-auto md:max-w-[500px]" />
        </div>
      </section>
      <section className='max-w-[1370px] mx-auto px-[40px] pb-[25px]'>
        <h1 className=' text-center text-[40px] font-medium  mt-[20px] text-white'>Developement <span className='purple'>Skills</span></h1>
        {/* <div className='flex flex-row justify-center  mt-[15px]'>
          <p className='text-white'>I enjoy turning ideas into live, interactive interfaces.
            I specialize in building fast, responsive, and user-friendly web experiences using React.
            From creating reusable components to managing application state, I focus on writing clean and maintainable code.
            I also work with modern tools like
            <span className='purple italic'> Tailwind CSS with React, JavaScript (ES6+), API integration like php laravel with mysql and version control (Git)</span>.
            My goal is always to deliver smooth UI interactions and seamless user experience.</p>
        </div> */}
        <div className='grid grid-cols-[repeat(auto-fit,210px)] gap-[40px] justify-center mt-[25px]'>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={htmlIcon} className='w-[70px] h-auto object-cover' alt="Html" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={cssIcon} className='w-[70px] h-auto object-cover' alt="css" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={jsIcon} className='w-[70px] h-auto object-cover' alt="javascript" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={bootstrapIcon} className='w-[70px] h-auto object-cover' alt="bootstrap" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={tailwindIcon} className='w-[70px] h-auto object-cover' alt="tailwind" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={jqueryIcon} className='w-[70px] h-auto object-cover' alt="jquery" />
          </div>
          <div className=' h-[110px] border border-purple-500 p-5 flex justify-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={reactIcon} className='w-[70px] h-auto object-cover' alt="react" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={phpIcon} className='w-[70px] h-auto object-cover' alt="php" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={laravelIcon} className='w-[70px] h-auto object-cover' alt="laravel" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={mysqlIcon} className='w-[70px] h-auto object-cover' alt="mysql" />
          </div>
        </div>
        <h1 className='text-center text-[40px] font-medium mt-[20px] text-white'>Tools I Work With</h1>
        <div className='grid grid-cols-[repeat(auto-fit,210px)] gap-[40px] justify-center mt-[25px]'>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={vscodeIcon} className='w-[70px] h-auto object-cover' alt="vs-code" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={npmIcon} className='w-[70px] h-auto object-cover' alt="npm" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={postmanIcon} className='w-[70px] h-auto object-cover' alt="postman" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={gitIcon} className='w-[70px] h-auto object-cover' alt="git" />
          </div>
          <div className='h-[110px] border border-purple-500 p-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-103'>
            <img src={githubIcon} className='w-[70px] invert h-auto object-cover' alt="github" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero