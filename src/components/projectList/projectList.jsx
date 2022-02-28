import React from 'react';
import Project from '../project/project';
import { products } from '../../data';
import './projectList.css';
const ProjectList = () => {
   return (
      <div className="pl">
         <div className="pl-texts">
            <h1 className="pl-title">Some of my projects:</h1>
            <p className="pl-desc">
               Feel free to ask me about any of my projects.
            </p>
         </div>
         <div className="pl-list">
            {products.map((item) => (
               <Project
                  key={item.id}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  about={item.about}
               />
            ))}
         </div>
      </div>
   );
};

export default ProjectList;
