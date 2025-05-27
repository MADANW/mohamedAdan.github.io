import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  // Sample project data - replace with your actual projects later
  const projects = [
    {
      title: "MuhsinAI",
      description: "A web-based application that provide Muslims with AI-driven chat support, personalized planning, and prayer time integration.",
      imageUrl: "/muhsinai.png",
      repoUrl: "https://github.com/MADANW/MuhsinAI"
    },
    {
      title: "Algorithmic Trading bot",
      description: "An algorithmic trading bot that uses machine learning to make trading decisions",
      imageUrl: "/webtemplate.png",
      repoUrl: "https://github.com/MADANW/fullstackWebAppTemplate"
    },
    {
      title: "Credit Risk & Spending Trends Dashboard",
      description: "A financial intelligence report for consumer behavior analysis and loan risk prediction",
      imageUrl: "/commingsoon.jpg",
      repoUrl: "#"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 