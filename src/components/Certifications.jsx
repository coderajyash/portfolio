import React from 'react'
import { CERTIFICATIONS } from '../constants'
import {motion} from 'framer-motion';

import { FaMeta } from "react-icons/fa6";
import { SiCoursera,SiHackerrank } from "react-icons/si";
const Certifications = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8}}
      className='my-20 text-4xl text-center'>Certifications</motion.h2>
    <div className=''>
        {CERTIFICATIONS.map((certi,index) => (
            <div key={index} className='mb-8 flex flex-wrap justify-center'>
                    <div className='w-full lg:w-1/4 p-4 text-center text-white'>
                    {certi.provider === 'Coursera - Meta' ? (
  <FaMeta className='text-5xl text-white' />
) : certi.provider === 'HackerRank' ? (
  <SiHackerrank className='text-5xl text-white' />
) : certi.provider === 'Educative' ? (
  <img src='/src/assets/educative.ico' alt='Educative' className='w-12 h-12' />
) : (
  <SiCoursera className='text-5xl text-white' />
)}
                    </div>
                    <div className='w-full lg:w-3/4 max-w-xl'>
                    <h6 className='mb-2 font-semibold'>
                        {certi.title} by <span className='text-sm text-purple-400'>{certi.provider} </span>| <span className='text-sm text-purple-400'><a href={certi.link}>Link</a></span>
                        </h6>
                        {certi.coursework.map((course,index) => (
                             <span key={index} className='text-sm font-bold text-purple-400'>{course} | </span>
                        ))}
                    </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Certifications
