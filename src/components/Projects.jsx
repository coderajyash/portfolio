import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion';
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      className='my-20 text-4xl text-center'>Projects</motion.h2>
    <div className=''>
        {PROJECTS.map((project,index) => (
            <div key={index} className='mb-8 flex flex-wrap justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-bold text-white-200'><span className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>{project.category}</span></p>
                    </div>
                    <div className='w-full lg:w-3/4 max-w-xl'>
                    <h6 className='mb-2 font-semibold'>
                    <span className='mr-2 mt-1 rounded bg-white px-2 py-1 text-sm font-medium text-purple-800'>{project.title}</span>| <span className='text-sm text-purple-400'><a href={project.link}>Link</a></span>
                        </h6>
                        <p className='mb-4 text-white'>
                            {project.description.split("•").map((point, index) => 
      point.trim() && <li key={index}>{point.trim()}</li>
    )}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
  {project.technologies.map((tech, index) => (
    <span 
      key={index} 
      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
    >
      {tech}
    </span>
  ))}
</div>
                    </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Projects
