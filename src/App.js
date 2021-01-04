import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div >
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
