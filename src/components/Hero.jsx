import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profilePic.jpeg';
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
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 pt-20 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                 className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                    Yash Raj Singh
                </motion.h1>
                <motion.span 
                variants={container(0.8)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent'>
                    Software Engineer (Python)
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-2xl py-6 rounded-lg font-thick tracking-tighter font-bold text-white'>
                    { HERO_CONTENT }
                </motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img
                 initial={{ x:100,opacity: 0 }}
                 animate={{ x:0,opacity: 1 }}
                 transition={{ duration: 0.5, delay: 1.2 }}
                 src={profilePic} 
                 className='w-full max-w-xs lg:max-w-lg rounded-full object-cover'
                 alt="Yash Raj Singh" />
            </div>
            </div>
        </div>      
    </div>
  )
};

export default Hero;
