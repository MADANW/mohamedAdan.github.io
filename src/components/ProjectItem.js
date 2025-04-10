import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, description, imageUrl }) => {
  return (
    <div className="project-item">
      <div className="project-image">
        {imageUrl ? (
          <img src={process.env.PUBLIC_URL + imageUrl} alt={title} />
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