import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useAuth } from "../component/Authentication/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import userIcon from '../assets/images/user_219988.png';
const About = () => {
  const navigate=useNavigate();
  const { isLoggedIn, user } = useAuth();
  const resume = () => {
  if(!user){
    toast.error("please login then see you resume")
  }
  else{
     navigate('/resume')
  }
  }


  return (
    <div className="">
      <section id="about" className="max-w-[1370px] mx-auto min-h-screen p-6 ">
        <div>

          <h1 className='text-center text-[40px] font-bold purple'>
            About <span className='text-white'>me</span>
          </h1>

          <div className="grid lg:grid-cols-[35%_auto] gap-[10px] mt-[40px]">
            <div className="">
              <h1 className="purple text-center text-[30px]">ANIL JAISWAL</h1>
              <h1 className="purple text-center">( Web Developer )</h1>
              <div className="w-full flex justify-center px-[10px] py-[10px]">
                <img src={userIcon} alt="user" className="max-w-[220px] md:max-w-[320px] h-auto object-cover" />
              </div>
              <h1 className="text-center text-white mt-[12px]">CONTACT WITH ME </h1>
              <ul className="flex justify-center gap-[1px] flex-wrap mt-[10px]">
                <li className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="icon-colour home-social-icons">
                    <AiOutlineGithub size={22} />
                  </a>
                </li>

                <li className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="icon-colour home-social-icons">
                    <AiOutlineInstagram size={22} />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="icon-colour home-social-icons">
                    <MdOutlineWhatsapp size={22} />
                  </a>
                </li>

                <li className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="icon-colour home-social-icons">
                    <FaLinkedinIn size={22} />
                  </a>
                </li>
              </ul>


            </div>
            <div className="px-[12px] py-[12px] md:px-[10px] md:py-[10px]">
              <div>
                <h1 className="text-[32px] text-white">LET ME <span className="purple">INTRODUCE</span> MYSELF ✍️
                </h1>
                <div className="text-white mt-[20px]">
                  <p className="">I have skills in both frontend and backend technologies like <span className="purple italic">JavaScript</span>, <span className="purple italic">React.js</span>, <span className="purple italic">Tailwind CSS ,bootstrap</span>, <span className="purple italic">PHP</span>, <span className="purple italic">MySQL</span> and <span className="purple italic">Laravel</span>, and I work as a <span className="purple italic">Full-Stack Web Developer</span> building complete web applications.
                  </p>
                  <p className="mt-[10px] italic">I want to keep <span className="purple italic">improving my skills</span> and <span className="purple italic">learning new technologies</span>. In a company environment, I will <span className="purple italic">explore new tools</span> and stay updated so I can <span className="purple italic">deliver better results</span>.
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h1 className="text-[32px] purple">EDUCATION</h1>
                <div className="flex gap-[40px] text-white mt-[20px]">
                  <h1 className="">2023</h1>
                  <div className="text-white ml-[30px]">
                    <h1>12th in <span className="purple italic">PCM</span></h1>
                    <h2><span className="italic purple">JIC</span> Kooknagar gonda</h2>
                    <h3>271312</h3>
                  </div>
                </div>
                <div className="flex gap-[40px] text-white mt-[20px]">
                  <h1>2023-26</h1>

                  <div className="text-white">
                    <h1>Diploma in <span className="purple italic">information technology</span></h1>
                    <h2>Hewett Polytechnic Lucknow</h2>
                    <h3>226006</h3>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h1 className="text-[32px] purple">EXPERIENCE</h1>
                <div className="flex gap-[40px] text-white mt-[20px]">
                  <h2>2025</h2>
                  <div className="ml-[30px]">
                    <h1 className="text-white">Web Developer <span className="italic purple">Intern</span></h1>
                    <p><span className="purple italic">softflew</span> Software Company, Lucknow</p>
                    <p className="text-[14px] italic text-purple">(6 Months)</p>
                  </div>
                </div>
                <div className='mt-[30px] flex justify-end'>
                  <button className='text-white px-[30px] py-[4px] rounded-[4px] bg-purple-500 text-[20px] transition-all duration-100 hover:bg-purple-900' onClick={resume}>Resume</button>
                </div>
              </div>
            </div>
          </div>










































          {/* <p className="text-white text-lg leading-relaxed mt-[15px]">
            Hello! I'm <span className="font-semibold purple">Anil Jaiswal</span>,
            a passionate Frontend Developer who loves crafting visually appealing
            and user-friendly web interfaces. I enjoy building responsive websites
            using <span className="font-medium">React</span> and <span className="font-medium">Tailwind CSS</span>.
          </p>

          <p className="text-white text-lg leading-relaxed mt-[15px]">
            I have a solid understanding of HTML, CSS, JavaScript, and React.
            I’m constantly learning new technologies and improving my coding
            skills through personal projects and online learning.
          </p>

          <p className="text-white text-lg leading-relaxed mt-[15px]">
            My goal is to become a skilled full-stack developer and contribute
            to building innovative, scalable, and meaningful web applications.
          </p>

          <h3 className="text-xl font-semibold text-blue-500 mt-[15px]">
            Technologies I’m Familiar With:
          </h3>
          <ul className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Mysql", "Git", "Php", "Laravel"].map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul> */}

          {/* <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="text-white px-6 py-3 rounded-lg font-semibold shadow-md bg-purple-700 hover:bg-[#c770f0] transition-all"
          >
            Download Resume
          </a>
        </div> */}
        </div >
      </section >
    </div >
  );
};

export default About;
