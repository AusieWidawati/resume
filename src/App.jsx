import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { INVESTMENT_PATHS, LEGACY_REDIRECTS } from './constants/routes';
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, Investment, Research, StarsCanvas} from './components';
import ProjectDetail from './components/ProjectDetail';
import VCDigestPage from './components/VCDigestPage';
import BootcampPage from './components/BootcampPage';

const Divider = () => (
  <div className="relative z-0 w-full px-3 md:px-24 py-2 md:py-6">
    <div className="section-divider" />
  </div>
);

// Lets sub-pages send visitors back to a specific section, e.g. { scrollTo: "investment" }
const useScrollToSection = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (!state?.scrollTo) return;
    // wait a frame so the sections have laid out
    requestAnimationFrame(() =>
      document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: "instant", block: "start" })
    );
  }, [state]);
};

const MainContent = () => {
  useScrollToSection();
  return (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Works />
    <Education />
    <Tech />
    <Divider />
    <Investment />
    <Divider />
    <Research />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path={INVESTMENT_PATHS.valuation} element={<BootcampPage />} />
        <Route path={INVESTMENT_PATHS.vcWeekly} element={<VCDigestPage />} />
        {/* Old addresses keep working (static paths outrank /project/:id) */}
        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
