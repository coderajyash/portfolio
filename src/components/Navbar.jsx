import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/* Logo */}
        <div className='flex items-center'>
          <img className='w-12' src={logo} alt='logo' />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 text-lg font-semibold'>
          <Link to="hero" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Home</Link>
          <Link to="technologies" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Technologies</Link>
          <Link to="experience" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Experience</Link>
          <Link to="education" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Education</Link>
          <Link to="projects" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Projects</Link>
          <Link to="certifications" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Certifications</Link>
          <Link to="contact" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300'>Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className='hidden md:flex items-center space-x-4 text-xl'>
          <a href='https://github.com/coderajyash' target='_blank' rel='noopener noreferrer' className='hover:text-purple-800 transition duration-300'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/yash-raj-singh-121aa7173/' target='_blank' rel='noopener noreferrer' className='hover:text-purple-800 transition duration-300'>
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black bg-opacity-95 absolute top-16 left-0 w-full flex flex-col items-center py-6 gap-4 text-lg'>
          <Link to="hero" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="technologies" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Technologies</Link>
          <Link to="experience" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="education" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Education</Link>
          <Link to="projects" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="certifications" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Certifications</Link>
          <Link to="contact" smooth={true} duration={500} offset={-50} className='cursor-pointer hover:text-purple-800 transition duration-300' onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className='flex space-x-4 mt-4'>
            <a href='https://github.com/coderajyash' target='_blank' rel='noopener noreferrer' className='hover:text-purple-800 transition duration-300 text-xl'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/yash-raj-singh-121aa7173/' target='_blank' rel='noopener noreferrer' className='hover:text-purple-800 transition duration-300 text-xl'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
