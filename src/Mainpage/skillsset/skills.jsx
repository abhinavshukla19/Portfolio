import { Skillballoon } from "../../components/skillballon/skillballon";
import { motion } from "framer-motion";
import "./skills.css";

export let Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const skillGroups = {
    "Frontend Development": ["HTML", "CSS", "JavaScript", "React"],
    "Backend Development": ["Python", "Node js" , "Express js"],
    "Deployment & Hosting": ["GitHub", "Supabase" , "Render"]
  };

  const skillEmojis = {
    HTML: "🌐",
    CSS: "🎨",
    JavaScript: "⚡",
    React: "⚛️",
    Supabase:"⚡",
    "Express js":"⚙️",
    Python: "🐍",
    "Node js": "🟢",
    GitHub: "🐙",
    Render:"☁️"
  };

  return (
    <section id="skills" className="skill-section">
      <div className="skill-headingbox">
        <h2 className="skill-headingtext">My Skills</h2>
      </div>
      <div className="glass-card">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div key={category} className="skill-group-card">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-balloons">
                {skills.map((skill) => (
                  <motion.div key={skill} variants={item} className="skill-pill-anim">
                    <Skillballoon
                      skillname={skill}
                      skillemoji={skillEmojis[skill]}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
