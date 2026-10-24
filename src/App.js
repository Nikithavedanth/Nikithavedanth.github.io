
import './App.css';
import { About } from './components/about/about';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import Home from './components/home/home';
import { Internships } from './components/internships/internships';
import { Projects } from './components/projects/projects';
import { ScrollUp } from './components/scrollup/scrollup';
import { Skills } from './components/skills/skills';
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
