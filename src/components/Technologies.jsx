// import React from 'react'
// import { RiReactjsLine } from 'react-icons/ri'
// import { IoLogoJavascript } from "react-icons/io";
// import { FaPython } from "react-icons/fa";
// import { SiMysql } from "react-icons/si";
// import { SiApachecassandra } from "react-icons/si";
// import { SiRabbitmq } from "react-icons/si";
// import { FaJava } from "react-icons/fa6";
// import { SiFlask } from "react-icons/si";
// import { SiPandas } from "react-icons/si";
// import { SiSelenium } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
// import { DiNodejs } from "react-icons/di";
// import { SiFastapi } from "react-icons/si";


// import {motion, transform} from "framer-motion";






// const iconVariants = (duration) => ({
//  initial : { y: -10} ,
//  animate : { 
//     y: [10, -10],
//     transition : {
//      duration: duration,
//      repeat : Infinity,
//      ease: 'linear',
//      repeatType: 'reverse'
//  }
// }
// });

// const Technologies = () => {
//   return (
//     <div className='border-b border-neutral-800 pb-2 4'>
//       <motion.h2 
//       whileInView={{ opacity: 1, y: 0 }}
//       initial={{ opacity: 0, y: -100 }}
//       transition={{ duration: 0.8 }}
//       className='my-20 text-4xl text-center'>Technologies</motion.h2>
//       <div className='flex flex-wrap items-center justify-center gap-8 m-8'>
//         <motion.div 
//         variants={iconVariants(2)} 
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <RiReactjsLine className='text-7xl text-cyan-400' />
//             <span className='text-neutral-900 text-white'>React</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(1.7)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <FaPython className='text-7xl text-white' />
//             <span className='text-neutral-900 text-white'>Python</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(2.8)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <FaJava className='text-7xl text-white'/>
//             <span className='text-neutral-900 text-white'>Java</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(3)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <IoLogoJavascript className='text-7xl text-yellow-400' />
//             <span className='text-neutral-900 text-white'>Javascript</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(2)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiApachecassandra className='text-7xl text-white' />
//             <span className='text-neutral-900 text-white'>Cassandra</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(2.5)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiMysql className='text-7xl text-white' />
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(2.7)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiRabbitmq className='text-7xl text-white' />
//             <span className='text-white'>RabbitMQ</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(2.8)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiFastapi className='text-7xl text-grey-700' />
//             <span className='text-white'>Fast API</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(0.5)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiFlask className='text-7xl text-white' />
//             <span className='text-white'>Flask</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(1.5)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiPandas className='text-7xl text-white' />
//             <span className='text-nwhite'>Pandas</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(1)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiSelenium className='text-7xl text-white' />
//             <span className='text-white'>Selenium</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(1.8)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <SiMongodb className='text-7xl text-green-900' />
//             <span className='text-white'>MongoDB</span>
//         </motion.div>
//         <motion.div 
//         variants={iconVariants(1)}
//         intial="initial"
//         animate="animate"
//         className='p-4 text-center'>
//             <FaGithub className='text-7xl text-white' />
//             <span className='text-neutral-900 text-white'>Git</span>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default Technologies
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { SiRabbitmq, SiFastapi, SiPandas, SiSelenium, SiNumpy,SiPytest } from "react-icons/si";
const technologies = [
    "Python", "Java", "JavaScript", "HTML", "CSS","Bootstrap","ReactJS","Django","Flask", "FastAPI","TailwindCSS","Kibana",
    "RabbitMQ", "VSCode", "AWS(EC2)","MongoDB","Postgresql","Docker","Selenium","GitHub","Git","Pandas",
    "Numpy","Pytest", "MS Excel", "Agile"
  ];

const Technologies = () => {
    return (
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-center text-3xl text-white mb-6">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className='my-20 text-4xl text-center'>Technologies</motion.h2>
          </h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <motion.div
  className="md:col-span-2 rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[410px] shadow-lg"
>
  {/* Container for Vertical Divs */}
  <motion.div className="flex flex-col w-full h-full space-y-4 flex-1">
    
    {/* Top Div */}
    <motion.div className="flex-1 bg-[#251A3E] rounded-lg flex flex-col items-center justify-center" whileHover={{ scale: 1.05 }}>
      <span>Programming Languages</span>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-4">
        <div className="flex flex-col items-center">
          <StackIcon name="python" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span>Python</span>
        </div>
        <div className="flex flex-col items-center">
          <StackIcon name="java" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span>Java</span>
        </div>
        <div className="flex flex-col items-center">
          <StackIcon name="js" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span>Javascript</span>
        </div>
      </div>
    </motion.div>

    {/* Bottom Div */}
    <motion.div className="flex-1 bg-[#251A3E] rounded-lg flex flex-col items-center justify-center" whileHover={{ scale: 1.05 }}>
      <span>Frameworks & Libraries</span>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-4">
        <div className="flex flex-col items-center">
          <StackIcon name="reactjs" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center">
          <StackIcon name="django" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span>Django</span>
        </div>
        <div className="flex flex-col items-center">
          <StackIcon name="flask" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          <span>Flask</span>
        </div>
        <div className="flex flex-col items-center">
          <SiFastapi className="text-3xl sm:text-2xl md:text-5xl lg:text-8xl text-white" />
          <span>Fast API</span>
        </div>
      </div>
    </motion.div>

  </motion.div>
</motion.div>
        <div className="grid gap-4">
           
          <motion.div
            className="bg-[#21233f] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span>UI/UX Styling</span>
              <div className="flex space-x-8 mt-4">
              <div className="flex flex-col items-center"><StackIcon name="html5" className="text-4xl" /><span>HTML</span></div>
                <div className="flex flex-col items-center"><StackIcon name="bootstrap5" /><span>Bootstrap</span></div>
                <div className="flex flex-col items-center"><StackIcon name="tailwindcss" className="text-4xl"/><span>TailwindCSS</span></div>
              </div>
          </motion.div>
          <motion.div
            className="bg-[#393053] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span>DevOps & Tools</span>
              <div className="flex space-x-8 mt-4">
                <div className="flex flex-col items-center"><StackIcon name="docker" className="text-4xl" /><span>Docker</span></div>
                <div className="flex flex-col items-center"><StackIcon name="git" className="text-4xl" /><span>Git</span></div>
                <div className="flex flex-col items-center"><SiRabbitmq className='text-8xl text-white' /><span className="pt-1">RabbitMQ</span></div>
              </div>
          </motion.div>
        </div>
            <motion.div
              className="bg-[#817c92] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span>Databases & Cloud</span>
              <div className="flex space-x-8 mt-4">
                <div className="flex flex-col items-center"><StackIcon name="postgresql" className="text-4xl" /><span>Postgresql</span></div>
                <div className="flex flex-col items-center"><StackIcon name="mongodb" className="text-4xl" /><span>MongoDB</span></div>
                <div className="flex flex-col items-center"><StackIcon name="aws" className="text-4xl" /><span>AWS(EC2)</span></div>
              </div>
</motion.div>
            {/* Automation & Version Control */}
            <motion.div
              className="bg-[#635985] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span>Testing & Automation</span>
              <div className="flex space-x-8 mt-4">
                <div className="flex flex-col items-center"><SiSelenium className="text-8xl text-white"/><span>Selenium</span></div>
                <div className="flex flex-col items-center"><SiPytest className="text-8xl text-white"/><span>PyTest</span></div>
              </div>
            </motion.div>
            {/* NoSQL Databases */}
            <motion.div
              className="bg-[#18122B] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
              whileHover={{ scale: 1.05 }}
            ><span>Data & Analytics</span>
            <div className="flex space-x-8 mt-4">
              <div className="flex flex-col items-center"><SiPandas className="text-8xl text-white" /><span>Pandas</span></div>
              <div className="flex flex-col items-center"><SiNumpy className="text-8xl text-white" /><span>Numpy</span></div>
              <div className="flex flex-col items-center"><StackIcon name="kibana" className="text-4xl" /><span>Kibana</span></div>
            </div>
            </motion.div>
          </div>
          <div className="mt-6 overflow-hidden whitespace-nowrap text-white py-2 relative">
  {/* <motion.div
    className="inline-block"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" }}
    style={{ display: "flex", gap: "2rem", minWidth: "100vw" }}
  >
    {[...technologies, ...technologies].map((tech, index) => (
      <span key={index} className="text-lg font-semibold">
        {tech}
      </span>
    ))}
  </motion.div> */}
</div>
        </div>
      );
    };
    

export default Technologies;
