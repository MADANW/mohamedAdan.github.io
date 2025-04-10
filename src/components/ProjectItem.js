import React, { useState } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, description, imageUrl, repoUrl = "#" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <a href={repoUrl} className="project-item" target="_blank" rel="noopener noreferrer">
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
    </a>
  );
};

export default ProjectItem; 