import "./footer.css"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export let Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <footer className="footer" id="about">
            <div className="footer-background"></div>
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">About Me</h3>
                    <p className="footer-text">
                        A passionate developer focused on creating beautiful and functional web applications.
                        Always eager to learn and explore new technologies.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <div className="footer-links">
                        <a onClick={() => scrollToSection('home')} className="footer-link">Home</a>
                        <a onClick={() => scrollToSection('skills')} className="footer-link">Skills</a>
                        <a onClick={() => scrollToSection('projects')} className="footer-link">Projects</a>
                        <a onClick={() => scrollToSection('about')} className="footer-link">About</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Connect</h3>
                    <div className="footer-social">
                        <a href="https://github.com/ayushabhinav19" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/abhinavshukla4798" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:abhinavshukla9490@gmail.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-cta">Let's build something together!</div>
                <button className="back-to-top" onClick={() => scrollToSection('home')}>Back to Top ↑</button>
                <p>&copy; 2025 Abhinav Shukla. All rights reserved.</p>
            </div>
        </footer>
    );
};