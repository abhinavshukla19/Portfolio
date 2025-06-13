import { useState } from 'react';
import { Card } from "../../components/projectcards/projectcard"
import { projectData } from "./projectData"
import { motion } from "framer-motion"
import "./projects.css"

export let Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('all');
    const projectsPerPage = 6;

    // Get unique skills for filter buttons
    const allSkills = [...new Set(projectData.flatMap(project => project.skills))];

    // Filter projects based on selected filter
    const filteredProjects = filter === 'all' 
        ? projectData 
        : projectData.filter(project => project.skills.includes(filter));

    // Calculate pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const handleFilterClick = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <section className="projectsection" id="projects">
            <div className="projectheadingbox">
                <h2 className="projectheadingtext skill-headingtext">Projects</h2>
            </div>

            <div className="project-filters">
                <motion.button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('all')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Show all projects"
                    tabIndex={0}
                >
                    All Projects
                </motion.button>
                {allSkills.map((skill, index) => (
                    <motion.button
                        key={index}
                        className={`filter-btn ${filter === skill ? 'active' : ''}`}
                        onClick={() => handleFilterClick(skill)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Filter projects by ${skill}`}
                        tabIndex={0}
                    >
                        {skill}
                    </motion.button>
                ))}
            </div>

            <motion.div className="projectgrid" key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                {currentProjects.map((project, index) => (
                    <Card key={project.id} project={project} index={index} />
                ))}
            </motion.div>

            {totalPages > 1 && (
                <div className="pagination">
                    {[...Array(totalPages)].map((_, index) => (
                        <motion.button
                            key={index}
                            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => setCurrentPage(index + 1)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Go to page ${index + 1}`}
                            tabIndex={0}
                        >
                            {index + 1}
                        </motion.button>
                    ))}
                </div>
            )}
        </section>
    )
}