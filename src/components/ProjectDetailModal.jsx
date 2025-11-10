import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailModal = ({ isOpen, onClose, project }) => {

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose}>
                    <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform-gpu" initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()}>
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {project.title || "Detail Proyek"}
                            </h3>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"aria-label="Close Modal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-6 text-gray-700 dark:text-gray-300">
                            {project.imageURL && (
                                <img 
                                    src={project.imageURL} 
                                    alt={project.title} 
                                    className="w-full h-auto rounded-lg mb-4 object-cover" 
                                />
                            )}
                            
                            <p className="mb-4 whitespace-pre-line">{project.description}</p>
                            
                            {project.techStack && (
                                <p className="font-semibold mt-4">Tech Stack: <span className="font-normal">{project.techStack}</span></p>
                            )}
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold rounded-full bg-[#000080] hover:bg-[#0000a8] text-white transition-colors duration-200 px-3 py-2 mt-2 inline-block">
                                    Project Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;