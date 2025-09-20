import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import LeadersPage from './pages/teams/LeadersPage';
import CompetitivePage from './pages/teams/CompetitivePage';
import CreatorsPage from './pages/teams/CreatorsPage';
import ProductionPage from './pages/teams/ProductionPage';
import PartnersPage from './pages/teams/PartnersPage';
import ShopPage from './pages/ShopPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import NewsletterPage from './pages/NewsletterPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FAQPage from './pages/FAQPage';
import CookiePopup from './components/CookiePopup';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page wrapper with fade animation
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        <Route path="/teams" element={<AnimatedPage><TeamsPage /></AnimatedPage>} />
        <Route path="/teams/leaders" element={<AnimatedPage><LeadersPage /></AnimatedPage>} />
        <Route path="/teams/competitive" element={<AnimatedPage><CompetitivePage /></AnimatedPage>} />
        <Route path="/teams/creators" element={<AnimatedPage><CreatorsPage /></AnimatedPage>} />
        <Route path="/teams/production" element={<AnimatedPage><ProductionPage /></AnimatedPage>} />
        <Route path="/teams/partners" element={<AnimatedPage><PartnersPage /></AnimatedPage>} />
        <Route path="/shop" element={<AnimatedPage><ShopPage /></AnimatedPage>} />
        <Route path="/news" element={<AnimatedPage><NewsPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        <Route path="/careers" element={<AnimatedPage><CareersPage /></AnimatedPage>} />
        <Route path="/atomic-gaming-returns" element={<AnimatedPage><NewsletterPage /></AnimatedPage>} />
        <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicyPage /></AnimatedPage>} />
        <Route path="/terms-of-service" element={<AnimatedPage><TermsOfServicePage /></AnimatedPage>} />
        <Route path="/faq" element={<AnimatedPage><FAQPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <CookiePopup />
      </div>
    </Router>
  );
}

export default App;