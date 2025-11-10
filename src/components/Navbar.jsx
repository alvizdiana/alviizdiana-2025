import React from 'react'
import assets from '../../public/assets/asset.js'
import ThemeTogleBtn from './ThemeTogleBtn.jsx'
import { motion } from 'motion/react'

const Navbar = ({theme, setTheme}) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <motion.div initial={{opacity:0, y:-50}} animate={{opacity:1, y:0}} transition={{duration:0.6, ease:'easeOut'}} className="flex justify-between item-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0 z-20 font-medium backdrop-blur-2xl bg-gray-100/50 dark:bg-gray-900/50 shadow-md overflow-hidden">
        <img src={theme === 'dark' ? assets.logo_light : assets.logo_dark} className='w-10 sm:w-14' alt="Alvi Izdiana Logo" />

        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeTogleBtn theme={theme} setTheme={setTheme} />
            <a href="#contact" 
                className='text-sm max-sm:hidden flex items-center gap-2 main-color text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'> 
                Connect 
                <img src={assets.arrow} width={18}/></a>
        </div>
    </motion.div>
  )
}

export default Navbar
