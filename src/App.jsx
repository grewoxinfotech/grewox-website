import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

const seoByPath = {
  '/': {
    title: 'Grewox Infotech | Web, Mobile, CRM & AI Solutions',
    description:
      'Grewox Infotech builds high-performance websites, mobile apps, CRM platforms, custom software, and AI solutions for growing businesses.',
    keywords:
      'web development company, mobile app development, CRM development, AI automation, custom software development, Grewox Infotech',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Grewox Infotech',
      url: '/',
      email: 'grewoxinfotech@gmail.com',
      telephone: '+91 96626 43079',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.linkedin.com/company/grewox-infotech',
        'https://www.instagram.com/grewoxinfotech/',
      ],
    },
  },
  '/about': {
    title: 'About Grewox Infotech | Trusted IT Partner',
    description:
      'Learn about Grewox Infotech, our mission, values, industry experience, and how we deliver scalable digital solutions for global clients.',
    keywords:
      'about Grewox Infotech, IT company Surat, software development team, trusted technology partner',
    path: '/about',
  },
  '/services': {
    title: 'Services | Web Development, Mobile Apps, CRM & AI',
    description:
      'Explore Grewox Infotech services including web development, mobile app development, CRM software, AI automation, digital marketing, and custom software.',
    keywords:
      'web development services, mobile app development services, CRM software company, AI automation services, custom software development',
    path: '/services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Software Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Grewox Infotech',
      },
      areaServed: 'Worldwide',
    },
  },
  '/portfolio': {
    title: 'Portfolio | Case Studies & Project Results',
    description:
      'See Grewox Infotech portfolio highlights across CRM, healthcare, e-commerce, enterprise software, education platforms, and AI automation.',
    keywords:
      'software development portfolio, app development case studies, CRM projects, AI automation portfolio, Grewox projects',
    path: '/portfolio',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Grewox Infotech Portfolio',
      description:
        'Portfolio highlights showcasing CRM, healthcare, e-commerce, enterprise, education, and AI automation projects.',
    },
  },
  '/contact': {
    title: 'Contact Grewox Infotech | Start Your Project',
    description:
      'Contact Grewox Infotech for web development, mobile apps, CRM systems, AI solutions, and custom software consultation.',
    keywords:
      'contact software company, contact app developers, Grewox Infotech contact, project consultation',
    path: '/contact',
  },
  '/industries': {
    title: 'Industries We Serve | Grewox Infotech',
    description:
      'Discover how Grewox Infotech delivers tailored solutions for e-commerce, fintech, travel, healthcare, home services, and more.',
    keywords:
      'industries we serve, fintech app development, healthcare app development, ecommerce software company',
    path: '/industries',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Grewox Infotech',
    description: 'Read the privacy policy for Grewox Infotech and understand how we collect and handle your information.',
    keywords: 'privacy policy Grewox Infotech',
    path: '/privacy-policy',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Grewox Infotech',
    description: 'Read the terms of service governing the use of Grewox Infotech website and services.',
    keywords: 'terms of service Grewox Infotech',
    path: '/terms-of-service',
  },
};

function AppShell() {
  const location = useLocation();
  const seo = seoByPath[location.pathname] || seoByPath['/'];

  return (
    <div className="min-h-screen flex flex-col bg-primary-light text-primary-dark">
      <SEO {...seo} />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
