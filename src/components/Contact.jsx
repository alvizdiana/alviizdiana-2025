import React, {useState} from 'react'
import assets from '../../public/assets/asset.js'
import {motion} from 'motion/react'

const ACCESS_KEY = "aa127b63-2098-46ff-a71c-ea82ce2ada39"

const Contact = (e) => {

    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        let isValid = true;

        const requiredFields = ["name", "email", "projectType", "message"];

        for (const fieldName of requiredFields){
            if(!data[fieldName] || data[fieldName].trim() === ""){
                setMessage(`Failed to send: Field ${fieldName} is required.`);
                isValid = false;
                break;
            }
        }

        if(!isValid){
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        
        formData.append("access_key", ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setMessage("Thank Your for your submission!");
                event.target.reset(); 
            } else {
                console.error("Web3Forms Error:", data);
                setMessage(`Failed to send message: ${data.message || 'Try again.'}`);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setMessage("A network error has occured, please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    }
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{staggerChildren:0.2}} id="contact" className='sm:flex sm:flex-row-reverse justify-between mx-auto px-10 md:px-25 pt-20 pb-10 sm:py-10 bg-[#000080]/10 overflow-hidden'>
        <div className='sm:w-6/10'>
            <motion.form initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} viewport={{once:true}} onSubmit={onSubmit}>
                <h2 className='text-xl font-bold text-center mb-10 text-white bg-[#000080] rounded-full'>Let's Collaborate!</h2>
                <p className={`py-2 mb-5 text-center text-sm ${message.includes('Failed') ? 'text-red-500 underline underline-offset-auto' : 'text-green-500 underline underline-offset-auto'}`}>
                    {message}
                </p>
                <div>
                    <label htmlFor="name" className='text-sm dark:text-white'>Your Name (or Company Name)</label>
                    <input type="text" id="name" name="name" className='m-2 w-full border-b border-gray-500 dark:text-white' required/>
                </div>
                <div>
                    <label htmlFor="email" className='text-sm dark:text-white'>Your Email</label>
                    <input type="email" id="email" name="email" className='m-2 w-full border-b border-gray-500 dark:text-white' required/>
                </div>
                <div>
                    <label htmlFor="projectType" className='text-sm dark:text-white'>Type of Project</label>
                    <input type="text" id="projectType" name="projectType" className='m-2 w-full border-b border-gray-500 dark:text-white' required/>
                </div>
                <div>
                    <label htmlFor="message" className='text-sm dark:text-white'>Project Detail</label>
                    <textarea id="message" name="message" className='m-2 w-full border rounded-md border-gray-500 dark:text-white'></textarea>
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting} className='flex justify-end items-end rounded-full bg-[#000080] py-2 px-4 text-white hover:bg-[#0000a8] hover:scale-103 text-sm'>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </motion.form>
        </div>
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} viewport={{once:true}} className='sm:w-3/10 pt-10 sm:p-0'>
            <h1 className='text-xl font-bold text-center mb-10 text-white bg-[#000080] rounded-full'>Contact Info</h1>
            <div>
                <div className='flex my-5 md:my-0'>
                    <div>
                        <img className='w-10 md:w-10 lg:w-12 xl:w-14 mr-5 mt-1 md:mt-3' src={assets.gmail_navy} alt="" />
                    </div>
                    <div className='py-0 md:py-3'>
                        <h3 className='font-bold text-sm dark:text-white'>Email</h3>
                        <p className='text-sm dark:text-white underline underline-offset-4'><a href="mailto:alviizdiana@gmail.com" target='_blank'>alfiizdiana@gmail.com</a></p>
                    </div>
                </div>
                <div className='flex my-5 md:my-0'>
                    <div>
                        <img className='w-10 md:w-10 lg:w-12 xl:w-14 mr-5 mt-1 md:mt-3' src={assets.linkedin_navy} alt="" />
                    </div>
                    <div className='py-0 md:py-3'>
                        <h3 className='font-bold text-sm dark:text-white'>Linkedin</h3>
                        <p className='text-sm dark:text-white underline underline-offset-4'><a href="https://www.linkedin.com/in/alvi-izdiana">alvi izdiana</a></p>
                    </div>
                </div>
                <div className='flex my-5 md:my-0'>
                    <div>
                        <img className='w-10 md:w-10 lg:w-12 xl:w-14 mr-5 mt-1 md:mt-3' src={assets.github_navy} alt="" />
                    </div>
                    <div className='py-0 md:py-3'>
                        <h3 className='font-bold text-sm dark:text-white'>Github</h3>
                        <p className='text-sm dark:text-white underline underline-offset-4'><a href="https://github.com/alvizdiana">alvizdiana</a></p>
                    </div>
                </div>
                <div className='flex my-5 md:my-0'>
                    <div>
                        <img className='w-10 md:w-10 lg:w-12 xl:w-14 mr-5 mt-1 md:mt-3' src={assets.whatsapp_navy} alt="" />
                    </div>
                    <div className='py-0 md:py-3'>
                        <h3 className='font-bold text-sm dark:text-white'>Phone</h3>
                        <p className='text-sm dark:text-white underline underline-offset-4'><a href="https://wa.me/088806848668">088806848668</a></p>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Contact
