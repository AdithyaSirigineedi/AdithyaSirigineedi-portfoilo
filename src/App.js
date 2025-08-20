import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import profilePic from './images/Adithya.jpg';
import reactLogo from './images/reactlogo.png';
import htmlLogo from './images/htmllogo.png';
import cssLogo from './images/csslogo.png';
import jsLogo from './images/jslogo.png';
import nodeLogo from './images/nodejslogo.png';
import expressLogo from './images/expresslogo.png';
import mysqlLogo from './images/mysqllogo.png';
import bootstrapLogo from './images/bootstraplogo.png';
import gitLogo from './images/gitlogo.png';
import pythonLogo from './images/pythonlogo.png';
import materialuiLogo from './images/materialuilogo.png';
import firestoreLogo from './images/firestorelogo.png';
import hirePathLogo from './images/hirepath.png';
import conservatorsLogo from './images/conservators.png';
import inventoryLogo from './images/inventory.png';
import portfoiloLogo from './images/portfoilo.png';
import LoadingScreen from './components/loadingscreen.jsx';
import Form from './components/form.jsx';
import globeImage from './images/globe.png';
import QuizImage from './images/quiz.png';
import SplashCursor from './components/cursor.jsx';
import ShinyText from './components/text.jsx';
import ScrollButton from './components/scroll.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  const onResumeClick = () => {
    window.open('https://drive.google.com/file/d/1WjDmMlV_Ge6RITmjMi1_felM43Ii2Tf7/view?usp=sharingc', '_blank');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 11000);

    const elements = document.querySelectorAll(
      '.slide-left, .slide-right, .section-title, .projects, .educ, .expe, .contact-title,.address'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [loading]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <SplashCursor />
      <div className="hero-container" >
        <div className="text-container">
          <ShinyText text="Adithya Sirigineedi" disabled={false} speed={3} className='name slide-left' />
          {/* <h1 className="name slide-left">Adithya Sirigineedi</h1> */}
          <h2 className="title slide-left">Full Stack Developer</h2>
          <p className="description slide-left">
            I’m a passionate Full Stack Developer with a strong foundation in
            building scalable and user-friendly web applications.
            I am currently pursuing my B.Tech in Computer Science and have
            gained practical experience through internships and personal
            projects. I enjoy working with React, Node.js, MySQL, CSS, and
            Express, driven by a desire to create impactful digital experiences.
          </p>
          <button className="resume-button slide-left" onClick={onResumeClick}>
            Download Resume
            <svg
              className="resume-icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="image-container">
          <img
            src={profilePic}
            alt="Adithya Sirigineedi"
            className="profile-img slide-right"
          />
        </div>
      </div>

      <div className="technologies-section">
        <h2 className="section-title">Technologies</h2>
        <div className="tech-icons-container">
          <img src={reactLogo} alt="React" className="tech-icon" />
          <img src={htmlLogo} alt="HTML5" className="tech-icon" />
          <img src={cssLogo} alt="CSS3" className="tech-icon" />
          <img src={bootstrapLogo} alt="Bootstrap" className="tech-icon" />
          <img src={jsLogo} alt="JavaScript" className="tech-icon" />
          <img src={nodeLogo} alt="Node.js" className="tech-icon" />
          <img src={expressLogo} alt="Express.js" className="tech-icon" />
          <img src={mysqlLogo} alt="MySQL" className="tech-icon" />
          <img src={gitLogo} alt="Git" className="tech-icon" />
          <img src={pythonLogo} alt="Python" className="tech-icon" />
          <img src={materialuiLogo} alt="Material UI" className="tech-icon" />
          <img src={firestoreLogo} alt="Firestore" className="tech-icon" />
        </div>
      </div>

      <div className="cert-section">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            <span>NPTEL – DBMS</span>
            <span>GDSC Hackathon – VITB</span>
            <span>EDX - Python & Data Science</span>
            <span>160 Day GFG Challenge</span>
          </div>
        </div>
        <div className="marquee marquee-right">
          <div className="marquee-content">
            <span>Project Certificate – Codinza</span>
            <span>GFG - React</span>
            <span>Virtual Internship – Ediglobe</span>
            <span>HackerRank - Python(Basic)</span>
          </div>
        </div>
        <div className="marquee marquee-left">
          <div className="marquee-content">
            <span>Guvi - Python</span>
            <span>Great Learning - Python</span>
            <span>Great Learning - JavaScript</span>
            <span>HackerRank - SQL(Intermediate)</span>
          </div>
        </div>
      </div>

      <h2 id="projects" className="projects">Projects</h2>
      <div className="project-container">
        <div className="project-box">
          <img src={hirePathLogo} alt="HirePath" className="project-img slide-left" />
          <div className="project-content slide-right">
            <h3>HirePath</h3>
            <p>HirePath is a full-stack hiring platform developed for a specific company to streamline their recruitment process. The application allows employers to post jobs, manage applications, and track candidates, while jobseekers can register, browse job listings, and apply directly through the portal.</p>
            <div className="tags">
              <span>React</span>
              <span>CSS</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>Nodemailer</span>
            </div>
            <a href="#" className="preview-link">View Preview</a>
          </div>
        </div>

        <div className="project-box">
          <img src={conservatorsLogo} alt="Conservators App" className="project-img slide-left" />
          <div className="project-content slide-right">
            <h3>Conservators App</h3>
            <p>Conservators App is a web-based tool designed for wildlife conservators to monitor and document wild animal species. The application enables users to upload data about different species, including their names and estimated size percentages in a given habitat. It serves as a centralized platform for ecological tracking, population analysis, and conservation planning.</p>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Express</span>
              <span>Firestore</span>
              <span>Animal API</span>
            </div>
            <a href="https://github.com/AdithyaSirigineedi/Conservators-Website.git" className="preview-link">View Preview</a>
          </div>
        </div>

        <div className="project-box">
          <img src={inventoryLogo} alt="Inventory App" className="project-img slide-left" />
          <div className="project-content slide-right">
            <h3>Inventory & Billing App</h3>
            <p>A frontend-only web application for managing product inventory and billing. The system features separate interfaces for vendors and customers. Vendors can add and manage products, while customers can browse, filter items, add them to the cart, and generate a basic invoice. The application is designed to simulate a small-scale e-commerce platform with intuitive navigation and responsive design.</p>
            <div className="tags">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Razorpay (Test)</span>
            </div>
            <a href="https://github.com/AdithyaSirigineedi/Billing-and-inventory-management-frontend-project-..git" className="preview-link">View Preview</a>
          </div>
        </div>

        <div className="project-box">
          <img src={portfoiloLogo} alt="Portfolio Website" className="project-img slide-left" />
          <div className="project-content slide-right">
            <h3>Personal Portfolio</h3>
            <p>A responsive personal portfolio website showcasing my projects, technical skills, and achievements. Designed with a clean and modern layout to provide a user-friendly experience. Built using HTML, CSS, and JavaScript, with engaging visuals and smooth animations to enhance interactivity and presentation.</p>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <a href="https://github.com/AdithyaSirigineedi/Quiz-App.git" className="preview-link">View Preview</a>
          </div>
        </div>
        <div className="project-box">
          <img src={QuizImage} alt="Quiz Application" className="project-img slide-left" />
          <div className="project-content slide-right">
            <h3>Real Time Quiz Application</h3>
            <p>The Quiz Project is a simple, interactive web application designed to test users’ knowledge on a particular topic using multiple-choice questions. This project can be used for educational purposes, practice tests, or general entertainment.</p>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <a href="https://github.com/AdithyaSirigineedi/Quiz-App.git" className="preview-link">View Preview</a>
          </div>
        </div>

        <h2 id="education" className="educ">Education</h2>
        <div className="education-row">
          <div className="education-card">
            <div className="edu-year slide-left">2022 - 2026</div>
            <div className="edu-details slide-right">
              <h3>Bachelor of Technology</h3>
              <p>Vishnu Institute of Technology</p>
              <p>Current CGPA - 8.6 CGPA</p>
              <p>Bhimavaram, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-year slide-left">2020 - 2022</div>
            <div className="edu-details slide-right">
              <h3>Higher Secondary Education</h3>
              <p>Sri Chaitanya Junior College</p>
              <p>Percentage - 84%</p>
              <p>Eluru, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-year slide-left">2019 - 2020</div>
            <div className="edu-details slide-right">
              <h3>Secondary Education</h3>
              <p>Sri Chaitanya Techno School</p>
              <p>percentage - 100 %</p>
              <p>Eluru, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
        <h2 id="experience" className="expe">Experience</h2>
        <div className="experience-row">
          <div className="experience-card">
            <div className="exp-year slide-left">2024-2024</div>
            <div className="exp-details slide-right">
              <h3>AI Virtual Internship<span> – Swetcha</span></h3>
              <p>
                Participated in a virtual internship focused on foundational and applied aspects of Artificial Intelligence. Gained hands-on experience in machine learning algorithms, model training, and data preprocessing using Python. Built basic AI applications such as image classifiers and chatbots using tools like TensorFlow and Scikit-learn. Worked on mini-projects and weekly challenges that enhanced problem-solving skills and practical AI implementation.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>AI</span>
                <span>TensorFlow</span>
                <span>Scikit-learn</span>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="exp-year slide-left">2024 - 2024</div>
            <div className="exp-details slide-right">
              <h3>Web Development Virtual Internship <span>– Ediglobe</span></h3>
              <p>
                Developed responsive and interactive websites using HTML, CSS, and JavaScript.
                Collaborated with the team to enhance UI/UX and optimize site performance.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="exp-year slide-left">2023 - 2024</div>
            <div className="exp-details slide-right">
              <h3>Full Stack Developer <span>– Codinza</span></h3>
              <p>
                Built full-stack apps using HTML, CSS, JS.Used Firebase for backend and Nodemailer for email integration.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Nodemailer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <h2 className="contact-title">Get in Touch</h2>
          <div className="contact-container-wrapper">
            <div className="contact-container">
              <div className="form-wrapper">
                <Form />
              </div>
              <img src={globeImage} className="contact-image" />
            </div>
          </div>
        </div>
        <h2 className="address" id="contact">
          Eluru, AndhraPradesh, India<br/>
          <span>adithya.collector@gmail.com</span>
        </h2>
       
    <ScrollButton />

      </div>
    </>
  );
};

export default App;
