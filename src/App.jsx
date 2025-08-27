import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Custom Hook for detecting when an element is in view
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
};

// Component to wrap sections and apply animations
const AnimatedSection = ({ children, id }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <section id={id} ref={ref} className={`fade-in-section ${isInView ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
};

// Component for the Circular Progress Bar
const CircularProgress = ({ skillName, percentage, isInView }) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (isInView ? (percentage / 100) * circumference : circumference);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setDisplayPercentage(prev => {
          if (prev < percentage) {
            return prev + 1;
          }
          clearInterval(interval);
          return percentage;
        });
      }, 15);
      return () => clearInterval(interval);
    }
  }, [isInView, percentage]);

  return (
    <div className="progress-bar-wrapper">
      <svg className="progress-bar-svg" width="120" height="120">
        <circle className="progress-bg" strokeWidth="10" r={radius} cx="60" cy="60" />
        <circle className="progress-bar" strokeWidth="10" r={radius} cx="60" cy="60" style={{ strokeDasharray: circumference, strokeDashoffset: offset }} />
        <text x="50%" y="50%" className="progress-text">{displayPercentage}%</text>
      </svg>
      <span className="skill-name">{skillName}</span>
    </div>
  );
};

// Component for the Typing Effect
const TypingEffect = ({ text, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (subIndex === text[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % text.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            setDisplayText(text[index].substring(0, subIndex));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <p className="typing-container">
            I am a {displayText}
            <span className="typing-cursor">|</span>
        </p>
    );
};


function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  
  const skillsData = [
    { name: 'React.js', percentage: 85 },
    { name: 'Java', percentage: 80 },
    { name: 'SpringBoot', percentage: 75 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'Firebase', percentage: 80 },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };
  
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name1">Sayyad</span>
            <span className="logo-slash">/</span>
            <span className="logo-name2">Vasim</span>
            <span className="logo-bracket">&gt;</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <div className="nav-socials">
            <a href="https://github.com/vasimsayyed" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vasim-sayyad-48b370260/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>

      <div className="app-container">
        <header id="hero" className="hero">
          <div className="hero-content">
            <h1>VASIM SAYYED</h1>
            <TypingEffect text={["Full stack web developer", "Website builder"]} />
            <div className="contact-info">
              <span>Sayyadvasim394@gmail.com</span>
              <span>+91 7249884045</span>
            </div>
          </div>
          <div className="hero-photo"></div>
        </header>

        <main className="content">
          <AnimatedSection id="experience">
            <h2>Experience</h2>
            {/* New Timeline Structure */}
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3>Full Stack Web Development Intern</h3>
                  <p><strong>Future Interns</strong> | Aug 2025 – Sept 2025</p>
                  <ul>
                    <li>Completed a structured internship program focused on Full Stack Web Development.</li>
                    <li>Gained hands-on experience in front-end and back-end technologies.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3>AI Mock Interview Web Application</h3>
                  <p><strong>React.js Developer</strong> | Jan 2025 - Present</p>
                  <ul>
                    <li>Designed and developed an interactive web-based AI Mock Interview platform using React.js.</li>
                    <li>Integrated AI/ML-based question generation and response analysis.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3>Medical Insurance Premium Predictor</h3>
                  <p><strong>ML Engineer & Streamlit Developer</strong> | Feb 2025 - Present</p>
                  <ul>
                      <li>Built a machine learning model to predict medical insurance premiums.</li>
                      <li>Created a user-friendly Streamlit web app for instant premium predictions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="card project-card">
                <div className="project-banner" style={{ backgroundImage: `url('/ai-banner.jpg')` }}></div>
                <h3>AI Mock Interview Web App</h3>
                <p>A web platform for real-time, AI-driven job interview simulations built with React.js.</p>
                <div className="project-links"><a href="https://github.com/vasimsayyed/AI-Mock-Interview-Web-App-">GitHub</a></div>
              </div>
              <div className="card project-card">
                <div className="project-banner" style={{ backgroundImage: `url('/insurance-banner.jpg')` }}></div>
                <h3>Insurance Premium Predictor</h3>
                <p>A web app using ML models to predict medical insurance costs for users.</p>
                <div className="project-links"><a href="https://github.com/vasimsayyed/Medical-health-insurance-prediction-using-ML">GitHub</a></div>
              </div>
            </div>
          </AnimatedSection>

          <section id="skills" ref={skillsRef}>
            <div className={`fade-in-section ${skillsInView ? 'is-visible' : ''}`}>
              <h2>Skills</h2>
              <div className="card">
                <div className="skills-container">
                  {skillsData.map(skill => (
                    <CircularProgress key={skill.name} skillName={skill.name} percentage={skill.percentage} isInView={skillsInView} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AnimatedSection id="certificates">
            <h2>Certificates</h2>
            <div className="certificates-grid">
              <div className="card">
                <h3>Master in Data Structure and Algorithm</h3>
                <p>Completed an in-depth course on DSA using C and C++ by Abdul Bari.</p>
              </div>
              <div className="card">
                <h3>Java Full Stack</h3>
                <p>Pursuing the TalentNext Course on Java Full Stack Development (May to September).</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </AnimatedSection>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Vasim Sayyed. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;