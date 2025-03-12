
// import { motion } from "framer-motion";
// import StackIcon from "tech-stack-icons";
// import { SiRabbitmq, SiFastapi, SiPandas, SiSelenium, SiNumpy,SiPytest } from "react-icons/si";
// const technologies = [
//     "Python", "Java", "JavaScript", "HTML", "CSS","Bootstrap","ReactJS","Django","Flask", "FastAPI","TailwindCSS","Kibana",
//     "RabbitMQ", "VSCode", "AWS(EC2)","MongoDB","Postgresql","Docker","Selenium","GitHub","Git","Pandas",
//     "Numpy","Pytest", "MS Excel", "Agile"
//   ];

// const Technologies = () => {
//     return (
//         <div className="container mx-auto py-10 px-4">
//           <h1 className="text-center text-3xl text-white mb-6">
//           <motion.h2 
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.8 }}
//             className='my-20 text-4xl text-center'>Technologies</motion.h2>
//           </h1>
//           <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
//           <motion.div
//   className="md:col-span-2 rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[410px] shadow-lg"
// >
//   {/* Container for Vertical Divs */}
//   <motion.div className="flex flex-col w-full h-full space-y-4 flex-1">
    
//     {/* Top Div */}
//     <motion.div className="flex-1 bg-[#251A3E] rounded-lg flex flex-col items-center justify-center" whileHover={{ scale: 1.05 }}>
//       <span>Programming Languages</span>
//       <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-4">
//         <div className="flex flex-col items-center">
//           <StackIcon name="python" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
//           <span>Python</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <StackIcon name="java" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
//           <span>Java</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <StackIcon name="js" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
//           <span>Javascript</span>
//         </div>
//       </div>
//     </motion.div>

//     {/* Bottom Div */}
//     <motion.div className="flex-1 bg-[#251A3E] rounded-lg flex flex-col items-center justify-center" whileHover={{ scale: 1.05 }}>
//       <span>Frameworks & Libraries</span>
//       <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-4">
//         <div className="flex flex-col items-center">
//           <StackIcon name="reactjs" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
//           <span>React</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <StackIcon name="django" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
//           <span>Django</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <StackIcon name="flask" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
//           <span>Flask</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiFastapi className="text-3xl sm:text-2xl md:text-5xl lg:text-8xl text-white" />
//           <span>Fast API</span>
//         </div>
//       </div>
//     </motion.div>

//   </motion.div>
// </motion.div>
//         <div className="grid gap-4">
           
//           <motion.div
//             className="bg-[#21233f] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <span>UI/UX Styling</span>
//               <div className="flex space-x-8 mt-4">
//               <div className="flex flex-col items-center"><StackIcon name="html5" className="text-4xl" /><span>HTML</span></div>
//                 <div className="flex flex-col items-center"><StackIcon name="bootstrap5" /><span>Bootstrap</span></div>
//                 <div className="flex flex-col items-center"><StackIcon name="tailwindcss" className="text-4xl"/><span>TailwindCSS</span></div>
//               </div>
//           </motion.div>
//           <motion.div
//             className="bg-[#393053] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <span>DevOps & Tools</span>
//               <div className="flex space-x-8 mt-4">
//                 <div className="flex flex-col items-center"><StackIcon name="docker" className="text-4xl" /><span>Docker</span></div>
//                 <div className="flex flex-col items-center"><StackIcon name="git" className="text-4xl" /><span>Git</span></div>
//                 <div className="flex flex-col items-center"><SiRabbitmq className='text-8xl text-white' /><span className="pt-1">RabbitMQ</span></div>
//               </div>
//           </motion.div>
//         </div>
//             <motion.div
//               className="bg-[#817c92] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span>Databases & Cloud</span>
//               <div className="flex space-x-8 mt-4">
//                 <div className="flex flex-col items-center"><StackIcon name="postgresql" className="text-4xl" /><span>Postgresql</span></div>
//                 <div className="flex flex-col items-center"><StackIcon name="mongodb" className="text-4xl" /><span>MongoDB</span></div>
//                 <div className="flex flex-col items-center"><StackIcon name="aws" className="text-4xl" /><span>AWS(EC2)</span></div>
//               </div>
// </motion.div>
//             {/* Automation & Version Control */}
//             <motion.div
//               className="bg-[#635985] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span>Testing & Automation</span>
//               <div className="flex space-x-8 mt-4">
//                 <div className="flex flex-col items-center"><SiSelenium className="text-8xl text-white"/><span>Selenium</span></div>
//                 <div className="flex flex-col items-center"><SiPytest className="text-8xl text-white"/><span>PyTest</span></div>
//               </div>
//             </motion.div>
//             {/* NoSQL Databases */}
//             <motion.div
//               className="bg-[#18122B] rounded-xl flex flex-col items-center justify-center text-white text-lg font-semibold h-[200px] shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             ><span>Data & Analytics</span>
//             <div className="flex space-x-8 mt-4">
//               <div className="flex flex-col items-center"><SiPandas className="text-8xl text-white" /><span>Pandas</span></div>
//               <div className="flex flex-col items-center"><SiNumpy className="text-8xl text-white" /><span>Numpy</span></div>
//               <div className="flex flex-col items-center"><StackIcon name="kibana" className="text-4xl" /><span>Kibana</span></div>
//             </div>
//             </motion.div>
//           </div>
//           <div className="mt-6 overflow-hidden whitespace-nowrap text-white py-2 relative">
// </div>
//         </div>
//       );
//     };
    

// export default Technologies;


//--------------------Approach 2 ------------
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { SiRabbitmq, SiFastapi, SiPandas, SiSelenium, SiNumpy, SiPytest } from "react-icons/si";

const technologies = [
  "Python", "Java", "JavaScript", "HTML", "CSS", "Bootstrap", "ReactJS", "Django", "Flask", "FastAPI", "TailwindCSS", "Kibana",
  "RabbitMQ", "VSCode", "AWS(EC2)", "MongoDB", "Postgresql", "Docker", "Selenium", "GitHub", "Git", "Pandas",
  "Numpy", "Pytest", "MS Excel", "Agile"
];

const Technologies = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-center text-3xl text-white mb-6">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="my-20 text-4xl text-center"
        >
          Technologies
        </motion.h2>
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Programming Languages */}
        <motion.div
          className="col-span-1 lg:col-span-2 rounded-xl bg-[#251A3E] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">Programming Languages</span>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            <div className="flex flex-col items-center">
              <StackIcon name="python" className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="java" className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="js" className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
              <span>Javascript</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-xl bg-[#18122B] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">Data & Analytics</span>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <SiPandas className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span>Pandas</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNumpy className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span>Numpy</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="kibana" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl" />
              <span>Kibana</span>
            </div>
          </div>
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          className="col-span-1 lg:col-span-2 rounded-xl bg-[#251A3E] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">Frameworks & Libraries</span>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            <div className="flex flex-col items-center">
              <StackIcon name="reactjs" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="django" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>Django</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="flask" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>Flask</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFastapi className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span>Fast API</span>
            </div>
          </div>
        </motion.div>

        {/* UI/UX Styling */}
        <motion.div
          className="rounded-xl bg-[#21233f] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">UI/UX Styling</span>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <StackIcon name="html5" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="bootstrap5" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl" />
              <span>Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="tailwindcss" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl" />
              <span>TailwindCSS</span>
            </div>
          </div>
        </motion.div>

        {/* DevOps & Tools */}
        <motion.div
          className="rounded-xl bg-[#393053] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">DevOps & Tools</span>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <StackIcon name="docker" className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="git" className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center">
              <SiRabbitmq className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span className="pt-1">RabbitMQ</span>
            </div>
          </div>
        </motion.div>

        {/* Databases & Cloud */}
        <motion.div
          className="rounded-xl bg-[#817c92] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">Databases & Cloud</span>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <StackIcon name="postgresql" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>Postgresql</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="mongodb" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <StackIcon name="aws" className="text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl" />
              <span>AWS(EC2)</span>
            </div>
          </div>
        </motion.div>

        {/* Testing & Automation */}
        <motion.div
          className="rounded-xl bg-[#635985] flex flex-col items-center justify-center text-white text-lg font-semibold min-h-[200px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mb-4">Testing & Automation</span>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <SiSelenium className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span>Selenium</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPytest className="text-8xl lg:text-8xl md:text-5xl sm:text-2xl text-white" />
              <span>PyTest</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;