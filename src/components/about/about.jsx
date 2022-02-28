import React from 'react';
import './about.css';
import Astronaut from '../../img/AstronautSmall.png';

const About = () => {
   return (
      <div className="a">
         <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
               <img src={Astronaut} alt="Sun Set photo" className="a-img" />
            </div>
         </div>
         <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              I am a third year engineering student at Manipal Institute of Technology, pursuing my B.Tech in Computer Science and Engineering.
            </p>
            <p className="a-desc">
              I am  a Full Stack Developer specialised in Mern Stack. I have a keen interest in developing scalable,maintainable web applications and working across the full stack. I am also a Graphic Designer. I love minimal design, bright colours, typography and gemometric patterns. Apart from this, I love to travel, read, play cricket and watch movies.
            </p>
         </div>
      </div>
   );
};

export default About;
