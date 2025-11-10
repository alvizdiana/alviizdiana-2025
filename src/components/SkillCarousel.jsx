import React, {useState} from 'react'
import {motion} from 'framer-motion'
import assets from '../../public/assets/asset.js'

const techLogos = [
    {id: 1, src: assets.codeigniter_logo, alt: 'CodeIgniter'},
    {id: 2, src: assets.css_logo, alt: 'CSS'},
    {id: 3, src: assets.drawio_logo, alt: 'DrawIO'},
    {id: 4, src: assets.figma_logo, alt: 'Figma'},
    {id: 5, src: assets.html_logo, alt: 'HTML'},
    {id: 6, src: assets.javascript_logo, alt: 'JavaScript'},
    {id: 7, src: assets.jupyter_logo, alt: 'Jupyter'},
    {id: 8, src: assets.mysql_logo, alt: 'MySQL'},
    {id: 9, src: assets.notion_logo, alt: 'Notion'},
    {id: 10, src: assets.python_logo, alt: 'Python'},
    {id: 11, src: assets.react_logo, alt: 'ReactJS'},
    {id: 12, src: assets.vue_logo, alt: 'VueJS'}
];
const SkillCarousel = () => {
    const [isPaused, setIsPaused] = useState(false);
    const animationDuration = 20;
    const carouselAnimation = {
        x: ['-100%', '0%'],
    };
    const carouselTransition = {
        x: {
            duration: isPaused? 0 : animationDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
        },
    };

  return (
    <div className="py-20 overflow-hidden">
        <motion.h2 initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">🛠️ Tech Stack</motion.h2>
        <div className="flex items-center space-x-8 pt-5" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <motion.div className='flex space-x-12 w-max' animate={carouselAnimation} transition={carouselTransition}>
                {[...techLogos, ...techLogos].map((logo, index) => (
                    <div key={`${logo.id}-${index}`} className='shrink-0'>
                        <img src={logo.src} alt={logo.alt} className='w-16 h-16 object-contain grayscale hover:scale-125 hover:grayscale-0 transition duration-300'/>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default SkillCarousel
