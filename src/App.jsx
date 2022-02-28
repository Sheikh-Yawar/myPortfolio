import About from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import ProjectList from './components/projectList/projectList';

const App = () => {
   return (
      <div>
         <Intro />
         <About />
         <ProjectList />
         <Contact />
      </div>
   );
};

export default App;
