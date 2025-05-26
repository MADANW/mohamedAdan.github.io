import React, { useState } from 'react';
import './ProjectItem.css';
import './InteractiveHoverButton.css';

const ProjectItem = ({ title, description, imageUrl, repoUrl = "#" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-item-link">
      <div className="project-item">
        <div className="hover-background"></div>
        <div className="project-content-wrapper">
          <div className="project-image">
            {imageUrl && !imageError ? (
              <img 
                src={process.env.PUBLIC_URL + imageUrl} 
                alt={title} 
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="placeholder-image">
                <span>Project Image</span>
              </div>
            )}
          </div>
          <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="hover-content">
          <span>View Project</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem; 