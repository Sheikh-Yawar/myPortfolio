import React, { useRef } from 'react';
import './contact.css';
const Contact = () => {
   return (
      <div className="c">
         <h1 className="c-title">Wanna get in touch</h1>
         <div class="social-media">
            <a
               href="https://github.com/Sheikh-Yawar"
               className="logo"
               target="_blank"
               rel="noreferrer"
            >
               <i class="fa-brands fa-github"></i>
            </a>
            <a
               href="https://twitter.com/Sheikhyawar18"
               target="_blank"
               className="logo"
               rel="noreferrer"
            >
               <i class="fa-brands fa-twitter"></i>
            </a>
            <a
               href="https://www.instagram.com/thesheikh_yawar/"
               target="_blank"
               className="logo"
               rel="noreferrer"
            >
               <i class="fa-brands fa-instagram"></i>
            </a>
            <a
               href="https://www.linkedin.com/in/sheikh-yawar-56022a193/"
               target="_blank"
               className="logo"
               rel="noreferrer"
            >
               <i class="fa-brands fa-linkedin"></i>
            </a>
         </div>
      </div>
   );
};

export default Contact;
