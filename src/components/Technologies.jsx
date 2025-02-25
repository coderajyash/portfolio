import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiApachecassandra } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiFastapi } from "react-icons/si";


import {motion, transform} from "framer-motion";






const iconVariants = (duration) => ({
 initial : { y: -10} ,
 animate : { 
    y: [10, -10],
    transition : {
     duration: duration,
     repeat : Infinity,
     ease: 'linear',
     repeatType: 'reverse'
 }
}
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-2 4'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      className='my-20 text-4xl text-center'>Technologies</motion.h2>
      <div className='flex flex-wrap items-center justify-center gap-8 m-8'>
        <motion.div 
        variants={iconVariants(2)} 
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
            <span className='text-neutral-900 text-white'>React</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.7)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <FaPython className='text-7xl text-white' />
            <span className='text-neutral-900 text-white'>Python</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.8)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <FaJava className='text-7xl text-white'/>
            <span className='text-neutral-900 text-white'>Java</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <IoLogoJavascript className='text-7xl text-yellow-400' />
            <span className='text-neutral-900 text-white'>Javascript</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiApachecassandra className='text-7xl text-white' />
            <span className='text-neutral-900 text-white'>Cassandra</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiMysql className='text-7xl text-white' />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.7)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiRabbitmq className='text-7xl text-white' />
            <span className='text-white'>RabbitMQ</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.8)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiFastapi className='text-7xl text-grey-700' />
            <span className='text-white'>Fast API</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(0.5)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiFlask className='text-7xl text-white' />
            <span className='text-white'>Flask</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiPandas className='text-7xl text-white' />
            <span className='text-nwhite'>Pandas</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiSelenium className='text-7xl text-white' />
            <span className='text-white'>Selenium</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.8)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <SiMongodb className='text-7xl text-green-900' />
            <span className='text-white'>MongoDB</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        intial="initial"
        animate="animate"
        className='p-4 text-center'>
            <FaGithub className='text-7xl text-white' />
            <span className='text-neutral-900 text-white'>Git</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
