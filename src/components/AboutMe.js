import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Mohamed Adan, a passionate software engineer with a focus on creating elegant solutions to complex problems.
            </p>
            <p>
              I specialize in AI and machine learning using modern technologies like Python, TensorFlow, and PyTorch; and web development using modern technologies like React, JavaScript, and CSS to make a viable product for public use. My goal is to build intuitive, user-friendly applications that make a difference.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
            </p>
          </div>
          <div className="skills">
            <h3>Main Skills</h3>
            <div className="skills-grid">
              <a href="https://www.w3schools.com/whatis/whatis_fullstack.asp" className="skill-item">Web Development</a>
              <a href="https://www.python.org/" className="skill-item">Python</a>
              <a href="https://www.ibm.com/think/topics/data-science" className="skill-item">Data Analysis</a>
              <a href="https://learn.microsoft.com/en-us/training/career-paths/ai-engineer" className="skill-item">AI Engineering</a>
              <a href="https://github.com/" className="skill-item">Git/GitHub</a>
              <a href="https://github.com/microsoft/AI-For-Beginners" className="skill-item">AI/ML</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 