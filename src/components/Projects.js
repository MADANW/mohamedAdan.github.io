import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  // Sample project data - replace with your actual projects later
  const projects = [
    {
      title: "MuhsinAI",
      description: "A web-based application that provide Muslims with AI-driven chat support, personalized daily planning, and Islamic utilities like prayer time integration.",
      imageUrl: "/commingsoon.jpg",
      repoUrl: "https://github.com/MADANW/MuhsinAI"
    },
    {
      title: "FullStack Web App Template",
      description: "A lean, TypeScript-based starter for full-stack apps. Monorepo structure, built-in auth, and conventions to streamline development.",
      imageUrl: "/webtemplate.png",
      repoUrl: "https://github.com/MADANW/fullstackWebAppTemplate"
    },
    {
      title: "Tesla Stock Business Dashboard",
      description: "idk yet",
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