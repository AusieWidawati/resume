import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, Investment, Community, Research, StarsCanvas} from './components';
import ProjectDetail from './components/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';

const Divider = () => (
  <div className="w-full px-8 md:px-24 py-2">
    <div className="section-divider" />
  </div>
);

const MainContent = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Education />
    <Tech />
    <Divider />
    <Works />
    <Divider />
    <Investment />
    <Divider />
    <Community />
    <Divider />
    <Research />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/resume">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
