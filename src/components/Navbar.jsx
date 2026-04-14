import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import Button from './Button';
import Logo from '../assets/Grewox-infotech-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 py-2 border-b border-gray-100 shadow-lg backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src={Logo} alt="Grewox Logo" className="h-12 w-auto mix-blend-screen" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent-blue ${
                location.pathname === link.path ? 'text-accent-blue font-bold' : 'text-primary-dark/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="hidden lg:block">
            <Button size="md">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

       {/* Custom Mobile Menu with AnimatePresence */}
       <AnimatePresence>
         {isOpen && (
           <>
             {/* Backdrop */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 bg-accent-blueDark/25 backdrop-blur-sm z-[60] md:hidden"
             />

             {/* Drawer */}
             <motion.div
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed top-0 right-0 bottom-0 w-[280px] bg-white border-l border-gray-100 z-[70] p-8 md:hidden shadow-2xl flex flex-col"
             >
                <div className="flex justify-between items-center mb-12">
                   <div className="flex items-center">
                      <img src={Logo} alt="Logo" className="h-8 w-auto mix-blend-screen" />
                   </div>
                   <button onClick={() => setIsOpen(false)} className="p-2 text-primary-dark hover:text-accent-blue transition-colors">
                      <X size={24} />
                   </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-semibold tracking-tight hover:text-accent-blue transition-colors flex items-center justify-between group ${
                          location.pathname === link.path ? 'text-accent-blue' : 'text-primary-dark'
                        }`}
                      >
                        {link.name}
                        {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="mt-8 pt-8 border-t border-gray-100"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      <Button size="lg" className="w-full" showArrow={true}>
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                <div className="mt-auto text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       Grewox Infotech Premium
                    </p>
                </div>
             </motion.div>
           </>
         )}
       </AnimatePresence>
     </nav>
  );
};

export default Navbar;
