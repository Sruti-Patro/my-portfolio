import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact/>
      {/* Add other sections here */}
    </div>
  );
}

export default App;

