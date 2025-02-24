import React from "react";
import resume_image from '../assets/resume_image.png';
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})
const Resume = () => {
  return (
    <div className="flex flex-col items-center py-10">
        <span variants={container(0.8)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r mb-4 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent'>
                    Resume
                </span>
      <a 
        href="https://drive.google.com/file/d/1Z6EpD_M4vwVXMGsiTBnDe5Cpf6VZq5ax/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        {/* <img 
          src={resume_image}
          alt="Resume Preview"
          className="w-80 md:w-[500px] lg:w-[600px] shadow-xl rounded-xl border border-gray-300 hover:shadow-3xl transition transform hover:scale-105"
        /> */}
        <motion.img
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.8 }}
                 src={resume_image} 
                 className='w-80 md:w-[500px] lg:w-[600px] shadow-xl rounded-xl border border-gray-300 hover:shadow-3xl transition transform hover:scale-105'
                 alt="Resume" />
      </a>

      <p className="mt-4 text-purple-400">Click on the image to download  resume</p>
    </div>
  );
};

export default Resume;
