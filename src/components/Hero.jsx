import React, { useState, useEffect } from 'react'
import assets from '../../public/assets/asset.js'
import { motion } from 'framer-motion'

const roles = [
    "Programmer",
    "Data Analyst",
    "Web Developer",
    "Data Visualization"
];

const Hero = () => {

    const resumeUrl = import.meta.env.BASE_URL + 'resume.pdf'

    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const sentence = roles[currentSentenceIndex];
        let timer;

        if(isDeleting){
            setTypingSpeed(75);
            timer = setTimeout(()=>{
                setCurrentText(prev => prev.substring(0, prev.length -1));
            }, typingSpeed);
        } else {
            setTypingSpeed(150);
            timer = setTimeout(() => {
                setCurrentText(prev => sentence.substring(0, prev.length +1));
            }, typingSpeed);
        }

        if (!isDeleting && currentText === sentence){
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentText === ''){
            setIsDeleting(false);
            setTypingSpeed(500);
            setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % roles.length);
        }

        return() => clearTimeout(timer);
    }, [currentText, isDeleting, currentSentenceIndex, typingSpeed]);

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        }
    };

  return (
    <div className='flex justify-between items-center mx-auto px-4 sm:px-8 lg:px-14 xl:px-24 pt-20 max-sm:flex-col-reverse max-sm:gap-10 overflow-hidden'>
        <div className='relative w-[300px] sm:w-[400px] max-w-lg h-[400px] md:my-10 pt-10 sm:pt-5 md:pt-9'>
            <motion.h1 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.8}} viewport={{once:true}} className='text-center md:text-left text-2xl sm:text-4xl font-bold dark:text-white'>🕊️ Hello,</motion.h1>
            <motion.h2 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.8}} viewport={{once:true}} className='text-center md:text-left text-3xl sm:text-5xl font-bold md:px-5 dark:text-white'>
                I am <motion.span animate={{filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }} transition={{duration: 4, ease: "linear", repeat: Infinity, }} className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl sm:text-5xl font-extrabold text-transparent drop-shadow-lg text-shiny-effect'>Alvi</motion.span>
                </motion.h2>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.8}} viewport={{once:true}} className='text-center md:text-left text-2xl sm:text-4xl font-bold md:px-5 dark:text-white'>
                <motion.span>{currentText}</motion.span>
                <motion.span
                variants = {cursorVariants}
                animate = "blinking"
                className = "ml-1 h-8 w-1 bg-white inline-block"
                />
            </motion.div>
            <motion.p initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}} viewport={{once:true}} className='text-center md:text-left text-xs md:pl-5 pt-3 dark:text-white'>I am a programmer with project experience in application development and data analysis using the technology stack Next.js (React.js), Tailwind CSS, Laravel, CI4, Looker Studio, Tableau, etc. I am an adaptable individual, eager to learn new things, and highly motivated to continue growing. I am ready to apply my skills and further develop them in a professional setting.</motion.p>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}} viewport={{once:true}} className='flex items-center pt-10 md:pt-5 px-4 gap-5'>
                <a href="mailto: alfiizdiana@gmail.com" target='_blank' className=' text-xs md:text-sm flex items-center gap-2 main-color text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full cursor-pointer hover:scale-103 transition-all'> Hire Me <img src={assets.arrow_up_right} width={18} alt="" /></a>
                <a href={resumeUrl} download="resume.pdf" className=' text-xs md:text-sm flex items-center gap-2 main-color text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full cursor-pointer hover:scale-103 transition-all'> Download CV <img src={assets.download} width={18} alt="" /></a>
            </motion.div>
        </div>
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}} viewport={{once:true}} className='relative w-[200px] h-[200px] sm:w-[300px] lg:w-[350px] max-w-lg sm:h-[300px] lg:h-[350px] md:mr-5 lg:mr-10'>
            <img className='w-full h-full object-cover rounded-full' src={assets.alvi} alt="Photo of Alvi Zumaela Izdiana" />

            {/* smalls */}
            <a href="https://github.com/alvizdiana"><motion.img animate={{y:[0, 20, 0], rotate: [0, 5, -5, 0]}} transition={{duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className='absolute top-0 left-0 w-14 h-14 object-cover transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300' src={assets.github_navy} alt="" /></a>
            <a href="https://www.linkedin.com/in/alvi-izdiana"><motion.img animate={{y:[0, -30, 0], rotate: [0, 5, -5, 0]}} transition={{duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className='absolute bottom-10 right-0 w-14 h-14 object-cover transform translate-x-1/2 transition-all duration-300' src={assets.linkedin_navy} alt="" /></a>
            <a href="https://wa.me/088806848668"><motion.img animate={{y:[0, 30, 0], rotate: [0, 5, -5, 0]}} transition={{duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className='absolute bottom-1 left-0 w-20 h-20 object-cover transform -translate-x-1/2 transition-all duration-300' src={assets.whatsapp_navy} alt="" /></a>
            <a href="mailto:alfiizdiana@gmail.com"><motion.img animate={{y:[0, -20, 0], rotate: [0, 5, -5, 0]}} transition={{duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className='absolute top-0 right-0 w-12 h-12 object-cover transform translate-x-1/2 transition-all duration-300' src={assets.email_navy} alt="" /></a>
        </motion.div>
    </div>

  )
}

export default Hero
