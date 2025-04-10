import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  // Sample project data - replace with your actual projects later
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1. This is a placeholder that you can replace with your actual project details.",
      imageUrl: null
    },
    {
      title: "Project 2",
      description: "A brief description of project 2. This is a placeholder that you can replace with your actual project details.",
      imageUrl: null
    },
    {
      title: "Project 3",
      description: "A brief description of project 3. This is a placeholder that you can replace with your actual project details.",
      imageUrl: null
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