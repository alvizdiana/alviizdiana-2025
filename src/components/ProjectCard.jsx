import React, { use } from 'react'
import assets from '../../public/assets/asset.js'
import { a } from 'motion/react-client';

const ProjectCard = ({title, description, imageURL, projectLink, demoLink, onClick}) => {

    const hasDemo = !!demoLink;

  return (
    <div onClick={onClick} className='w-auto rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer'>
        <div className='relative overflow-hidden h-48'>
            <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' src={imageURL} alt={`Foto Proyek ${title}`} />
            <div className='absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300'></div>
        </div>
        <div className='p-6'>
            <div>
                <h3 className='font-bold text-xl mb-2 text-gray-900 dark:text-white truncate'> {title} </h3>
                <p className='text-gray-700 dark:text-gray-400 text-base line-clamp-3'>{description}</p>
                
                <div className='flex mt-4 space-between gap-5'>
                    <button onClick={() => window.open(projectLink, '_blank')} className='px-4 py-2 text-sm font-semibold rounded-full bg-[#000080] hover:bg-[#0000a8] text-white transition-colors duration-200'>Source</button>
                    {hasDemo &&(
                        <button onClick={() => window.open(demoLink, '_blank')} 
                        className={`px-4 py-2 text-sm font-semibold rounded-full bg-[#000080] hover:bg-[#0000a8] text-white transition-colors duration-200`}>Demo</button>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
