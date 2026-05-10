import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, Investment, Community, Research, StarsCanvas} from './components';

const Divider = () => (
  <div className="w-full px-8 md:px-24 py-2">
    <div className="section-divider" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
