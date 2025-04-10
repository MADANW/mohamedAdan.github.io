import React, { useState } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, description, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-item">
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
  );
};

export default ProjectItem; 