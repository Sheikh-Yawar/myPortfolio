import React from 'react';
import './project.css';
const Project = ({ img, link, name, about }) => {
   return (
      <div
         className="card"
         style={{
            backgroundImage: `url(${img})`,
         }}
      >
         <div className="card-content">
            <h2 className="card-title">{name}</h2>
            <p className="card-body">{about}</p>
            <a href={link} className="button" target="_blank" rel="noreferrer">
               Learn More
            </a>
         </div>
      </div>
   );
};

export default Project;
