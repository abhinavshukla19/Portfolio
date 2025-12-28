import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faReact, faJs, faNode, faHtml5, faCss3Alt, faPython, faGitAlt, faAngular } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faChevronDown, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons"
import "./hero-section.css"

export let Herosection = ({color, textcolor}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [text] = useTypewriter({
        words: ['Abhinav Shukla'],
        typeSpeed: 150,
        deleteSpeed: 100,
        delaySpeed: 1000,
        cursorStyle: ':'
    });

    const [role] = useTypewriter({
        words: ['Full stack Developer', 'React Developer', 'Web Developer'],
        typeSpeed: 100,
        deleteSpeed: 80,
        delaySpeed: 2000,
        loop: true,
        cursorStyle: '|'
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const isDarkMode = color === "#242424";

    return (
        <section className={`hero-section ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="hero-background">
                <div className="gradient-blur"></div>
                <div className="tech-icons">
                    <FontAwesomeIcon icon={faReact} className="icon-react" />
                    <FontAwesomeIcon icon={faJs} className="icon-js" />
                    <FontAwesomeIcon icon={faNode} className="icon-node" />
                    <FontAwesomeIcon icon={faHtml5} className="icon-html" />
                    <FontAwesomeIcon icon={faCss3Alt} className="icon-css" />
                    <FontAwesomeIcon icon={faPython} className="icon-python" />
                    <FontAwesomeIcon icon={faGitAlt} className="icon-git" />
                    <FontAwesomeIcon icon={faAngular} className="icon-angular" />
                    <FontAwesomeIcon icon={faDatabase} className="icon-db" />
                    <FontAwesomeIcon icon={faCode} className="icon-code" />
                </div>
            </div>

            <motion.div 
                className="hero-content"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1 
                    className="hero-title"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                    style={{color: textcolor}}
                >
                    Hello, I'm <span className="gradient-text">{text}<Cursor cursorStyle=":" /></span>
                </motion.h1>

                {/* Personal intro */}
                <motion.p 
                    className="hero-intro"
                    variants={fadeIn}
                    transition={{ delay: 0.22 }}
                >
                    A full-stack developer passionate about performance-driven design and intuitive UX.
                </motion.p>

                <motion.h2 
                    className="hero-role"
                    variants={fadeIn}
                    transition={{ delay: 0.3 }}
                    style={{color: textcolor}}
                >
                    I'm a <span className="role-text">{role}<Cursor cursorStyle="|" /></span>
                </motion.h2>

                <motion.p 
                    className="hero-subtitle"
                    variants={fadeIn}
                    transition={{ delay: 0.4 }}
                    style={{color: textcolor}}
                >
                    I build smart, fast, and responsive web applications
                </motion.p>

                <motion.div 
                    className="hero-buttons"
                    variants={fadeIn}
                    transition={{ delay: 0.6 }}
                >
                    <a href="#projects" className="primary-button hero-cta">View My Work</a>
                    <a href="#about" className="secondary-button hero-cta">Get in Touch</a>
                </motion.div>

                <motion.div 
                    className="social-links"
                    variants={fadeIn}
                    transition={{ delay: 0.8 }}
                >
                    <a href="https://github.com/ayushabhinav19" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="www.linkedin.com/in/abhinavshukla4798" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="mailto:ayushabhinav19@gmail.com" className="social-icon">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div 
                className="scroll-indicator"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <FontAwesomeIcon icon={faChevronDown} style={{color: textcolor}} />
            </motion.div>
        </section>
    )
}