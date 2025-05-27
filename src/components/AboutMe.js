import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-grid">
          {/* Main Introduction */}
          <div className="about-intro">
            <div className="intro-content">
              <h3>$ ./introduce_myself.sh</h3>
                              <p className="intro-text">
                  > Hello, I'm Mohamed Adan<br/>
                  > Passionate software engineer && data analyst<br/>
                  > Focus: elegant solutions to complex problems
                </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="expertise-card">
            <h4>$ cat skills.txt</h4>
            <div className="expertise-list">
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>AI_ML_Engineer.py</strong>
                  <p>Python | TensorFlow | Data Modeling</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>FullStack_Developer.js</strong>
                  <p>React | JavaScript | CSS | Node.js</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>Data_Analyst.sql</strong>
                  <p>NumPy | Pandas | Flask | Analytics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mission-card">
            <h4>$ echo $MISSION</h4>
            <p>
              To build intuitive, user-friendly applications that solve real-world problems, 
              streamline workflows, and deliver measurable results.
            </p>
          </div>

          {/* Personal Interests */}
          <div className="interests-card">
            <h4>$ ls ~/interests/</h4>
                          <div className="interests-list">
                <span className="interest-tag">traveling.exe</span>
                <span className="interest-tag">tech_exploration.sh</span>
                <span className="interest-tag">industry_trends.md</span>
                <span className="interest-tag">problem_solving.py</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 