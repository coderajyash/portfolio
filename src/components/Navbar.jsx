import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {motion} from 'framer-motion';

 const Navbar = () => {
   return ( <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flexshrink-0 items-center'>
            <motion.img 
            initial={{ y:50,opacity: 0 }}
            animate={{ y:1,opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className='mx-2 w-20' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://github.com/coderajyash'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/yash-raj-singh-121aa7173/'><FaLinkedin/></a>
        </div>
        </nav>
   )
 };
 
 export default Navbar;
 