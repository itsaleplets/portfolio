import Aside from './components/Aside';
import Head from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style/App.css';

function App() {
  return (
    <div className="App, notranslate">
      <Aside />
      <Head />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
