import React from 'react';
import { motion } from "framer-motion";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import job_portal from '../assets/images/project/job_portal.png';
import portfolioImg from '../assets/images/project/portfolio.png';
const Project = () => {
  const githubUrl = 'https';
  const demoUrl = 'https://my_project.com';
  const projects = [
    { src: portfolioImg, heading: 'Portfolio', text: 'these website created using frontend react and backend laravel with mysql database' },
    { src: job_portal, heading: 'Job Portal', text: 'these website created using frontend react and backend laravel with mysql database' },
  ]
  return (
    <>
      <div className=''>
        <section id='project' className='max-w-[1370px] mx-auto min-h-screen p-6 '>
          <div
          >
            <h1 className='text-center text-[40px] font-bold text-white'>
              My <span className='purple'>Projects</span>
            </h1>
            <p className='text-white text-center text-[24px]'>I am self created these website with full responsive</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[60px] mt-[25px]'>
              {projects.map((v, i) => (
                <div
                  key={i}
                  className='h-section rounded-lg shadow-lg transition-all duration-400 hover:scale-102'>
                  <div>
                    <img src={v.src} alt="Portfolio" className='rounded-[8px] w-[100%] p-[8px] object-cover' />
                  </div>
                  <div className='p-5'>
                    <h1 className='text-white text-center text-[22px] md:text-[24px]'>{v.heading}</h1>
                    <p className='text-white text-start text-[16px]'>{v.text}</p>
                  </div>
                 
                  <div className="flex justify-center gap-[30px] mb-[15px] text-white">
                    <a
                      href={githubUrl}
                      target="_blank"
                      className="flex items-center justify-center px-[30px] py-[5px] rounded-[4px] border-none bg-purple-500 transition-all duration-150 hover:bg-purple-900 text-[20px]"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" /> Github
                    </a>

                    <a
                      href={demoUrl}
                      target="_blank"
                      className="flex items-center justify-center px-[30px] py-[5px] border-none rounded-[4px] bg-purple-500 transition-all duration-150 hover:bg-purple-900  text-[20px]"
                    >
                      Demo
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Project

