import React, { useState } from 'react'
import assets from '../../public/assets/asset.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectDetailModal from './ProjectDetailModal.jsx'
import {motion} from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: "Tableau Dashboard for Sales Data Analysis",
        description: "A comprehensive dashboard created using Tableau to visualize e-commerce B2B sales data. This project involves data cleaning, transformation, and the creation of interactive visualizations to analyze sales performance, customer behavior, and market trends.",
        imageURL: assets.tableau_dash,
        projectLink: "https://public.tableau.com/views/BrazilE-CommerceB2B2016-2018Dashboard/Story1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        category: "Data Analytics",
        demoLink: "https://public.tableau.com/views/BrazilE-CommerceB2B2016-2018Dashboard/Story1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
        id: 2,
        title: "Interactive Landing Page",
        description: "A fully responsive interactive landing page built with React.js and Tailwind CSS. This project showcases various UI components, animations, and a contact form with validation.",
        imageURL: assets.interactive_landing_page,
        projectLink: "https://github.com/alvizdiana/Interactive-Landing-Page-Reactjs",
        category: "Web Development",
        demoLink: "https://alvizdiana.github.io/Interactive-Landing-Page-Reactjs/"
    },
    {
        id: 3,
        title: "Vue.js Portfolio Website",
        description: "A personal portfolio website built with Vue.js, showcasing my projects, skills, and experience. The site features a clean and modern design, with smooth animations and a responsive layout.",
        imageURL: assets.vue_portfolio,
        projectLink: "https://github.com/alvizdiana/Alvi-Izdiana-2025",
        category: "Web Development",
        demoLink: "https://alvizdiana.github.io/Alvi-Izdiana-2025/"
    },
    {
        id: 4,
        title: "Expert System for early detection of Depressive Disorder",
        description: "An expert system for early detection of depressive disorders built with CodeIgniter 4 and MySQL, this system uses the forward chaining method as its inference engine, SMTP Gmail for email validation, and equipped with AJAX on its dashboard to display page changes without needing to reload the page.",
        imageURL: assets.Depressive_es,
        projectLink: "https://github.com/alvizdiana/Expert-System-for-Depressive-with-Forward-Chaining",
        category: "Web Development",
        demoLink: ""
    },
    {
        id: 5,
        title: "Dashboard Visualization using Plotly Dash",
        description: "An interactive web-based dashboard for data visualization and analysis. Built with Dash (Plotly, Dash Core Component, Dash Bootstrap Component), the analysis results include patterns of relationships between several factors with performance scores and employee satisfaction levels, as well as factors that influence employee resignation decisions.",
        imageURL: assets.plotly_dash,
        projectLink: "https://github.com/alvizdiana/Employee-Satisfaction-And-Performance-with-Dash",
        category: "Data Analytics",
        demoLink: ""
    }
]

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    
    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    }
    const [activeFilter, setActiveFilter] = useState('All'); 
    
    const categories = ['All', 'Web Development', 'Data Analytics'];

    const filteredProjects = projectData.filter(project => {
        if (activeFilter === 'All') {
            return true; 
        }
        return project.category === activeFilter;
    });

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

  return (
        <section className="py-12 pb-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <motion.div className="container mx-auto px-4" viewport={{once:true}} transition={{staggerChildren: 0.2}}>
                <motion.h2 initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-2xl xl:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                🚀 My Newest Projects
                </motion.h2>

                <div className="flex justify-center space-x-4 mb-10">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleFilterClick(category)}
                            className={`
                                px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-200 cursor-pointer
                                ${
                                    activeFilter === category 
                                        ? 'bg-[#000080] text-white shadow-md'
                                        : 'bg-gray-200 text-gray-800 hover:bg-indigo-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-indigo-500/30' 
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div 
                        key={project.id} // Ganti index dengan project.id
                        initial={{opacity:0, y:30}} 
                        whileInView={{opacity:1, y:0}} 
                        transition={{duration:0.5, delay: index * 0.2}} 
                        viewport={{once:true}}
                    >
                        {/* Tidak perlu key di sini lagi */}
                        <ProjectCard {...project} onClick={() => handleOpenModal(project)}/>
                    </motion.div>
                ))}
                <ProjectDetailModal 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    project={selectedProject || {}} // Pastikan mengirim objek kosong jika null
                />
                </div>

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
                        No projects found in "{activeFilter}" category.
                    </p>
                )}
            </motion.div>
        </section>
    )
}

export default Projects
