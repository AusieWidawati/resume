import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, Investment, Community, Research, StarsCanvas} from './components';
import ProjectDetail from './components/ProjectDetail';
import VCDigestPage from './components/VCDigestPage';
import BootcampPage from './components/BootcampPage';

const Divider = () => (
  <div className="relative z-0 w-full px-3 md:px-24 py-2 md:py-6">
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
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/vc-digest" element={<VCDigestPage />} />
        <Route path="/investment/bootcamp" element={<BootcampPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
