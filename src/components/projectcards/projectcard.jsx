import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import { motion } from "framer-motion"
import "./projectcard.css"

export let Card = ({project, index}) => {
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="projectcard"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="projectimage">
                <img 
                    src={project.image} 
                    alt={`${project.title} Project Screenshot`} 
                    loading="lazy" 
                />
            </div>
            <div className="projectcontent">
                <h3 className="projecttitle">{project.title}</h3>
                <p className="projectdescription">{project.description}</p>
                <div className="skills-container">
                    {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
                <div className="projectlinks">
                    {project.liveLink && (
                        <motion.a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link live"
                            aria-label={`Open live demo of ${project.title} in new tab`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            tabIndex={0}
                        >
                            <ExternalLinkIcon size={16} />
                            Live Demo
                        </motion.a>
                    )}
                    {project.githubLink && (
                        <motion.a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link github"
                            aria-label={`View ${project.title} code on GitHub`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            tabIndex={0}
                        >
                            <GithubIcon size={16} />
                            View Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}