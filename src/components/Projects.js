import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  // Sample project data - replace with your actual projects later
  const projects = [
    {
      title: "Adam-AI Assistant",
      description: "Adam-AI Assistant is a web-based application that leverages OpenAI's GPT-4o model to provide Muslims with AI-driven chat support, personalized daily planning, and Islamic utilities like prayer time integration, built using Next.js, TypeScript, and Tailwind CSS.",
      imageUrl: "/commingsoon.jpg"
    },
    {
      title: "Stock Predictor",
      description: "In Progress",
      imageUrl: "/commingsoon.jpg"
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imageUrl: "/commingsoon.jpg"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 