import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/globalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// About Pages
import OurStory from './pages/OurStory';
import OurProcess from './pages/OurProcess';

// Service Pages
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import GameDevelopment from './pages/GameDevelopment';
import BlockchainDevelopment from './pages/BlockchainDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import CloudSolutions from './pages/CloudSolutions';
import DevOps from './pages/DevOps';
import Consulting from './pages/Consulting';

// Additional Pages
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';

// Career Pages
import Careers from './pages/Careers';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      <GlobalStyles />
      <LoadingScreen />
      <Router>
        <ScrollToTop />
        <ScrollProgress />
        <BackToTop />
        <Navbar transparent={true} />
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Main Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* About Pages */}
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/process" element={<OurProcess />} />

            {/* Service Pages */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/game-development" element={<GameDevelopment />} />
            <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/consulting" element={<Consulting />} />

            {/* Additional Pages */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/portfolio/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/portfolio/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />

            {/* Career Pages */}
            <Route path="/careers" element={<Careers />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
