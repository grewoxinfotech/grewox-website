import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../assets/Grewox-infotech-logo.png';

const SOCIAL = {
  facebook: 'https://www.facebook.com/p/Grewox-Infotech-61572270848010/',
  linkedin: 'https://www.linkedin.com/company/grewox-infotech',
  instagram: 'https://www.instagram.com/grewoxinfotech/',
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10 text-primary-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center -ml-1">
            <img src={Logo} alt="Grewox Logo" className="h-10 w-auto" />
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            Empowering businesses with cutting-edge IT solutions. We specialze in Web, Mobile, and CRM development with a focus on innovation.
          </p>
          <div className="flex gap-4">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent-blue transition-colors"
              aria-label="Grewox Infotech on Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9V12.06h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.58v1.9h2.77l-.44 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
              </svg>
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent-blue transition-colors"
              aria-label="Grewox Infotech on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
                <path d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18H5.67V9.5h2.67V18zM7 8.35c-.85 0-1.54-.7-1.54-1.56S6.15 5.23 7 5.23s1.54.7 1.54 1.56S7.85 8.35 7 8.35zM18.33 18h-2.66v-4.14c0-.98-.02-2.25-1.37-2.25-1.37 0-1.58 1.07-1.58 2.18V18H10.06V9.5h2.56v1.16h.04c.36-.67 1.23-1.37 2.53-1.37 2.7 0 3.2 1.79 3.2 4.11V18z" />
              </svg>
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent-blue transition-colors"
              aria-label="Grewox Infotech on Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5zm8.95 1.42a1.14 1.14 0 1 1 0 2.28 1.14 1.14 0 0 1 0-2.28zM12 7.14A4.86 4.86 0 1 1 7.14 12 4.87 4.87 0 0 1 12 7.14zm0 1.9A2.96 2.96 0 1 0 14.96 12 2.97 2.97 0 0 0 12 9.04z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary-dark font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Services</Link></li>
            <li><Link to="/portfolio" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Portfolio</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-primary-dark font-semibold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Web Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Mobile App Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">CRM Solutions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">AI & Automation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-dark transition-colors text-sm">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary-dark font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-gray-600">
              <MapPin size={18} className="text-accent-blue shrink-0" />
              <span>Mota Varachha, Surat Gujarat, India</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-600">
              <Phone size={18} className="text-accent-blue shrink-0" />
              <span>+91 96626 43079</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-600">
              <Mail size={18} className="text-accent-blue shrink-0" />
              <span>grewoxinfotech@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left">
          © 2020–2026 Grewox Infotech. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-500">
          <Link to="/terms-of-service" className="hover:text-accent-blue transition-colors">Terms of Service</Link>
          <Link to="/privacy-policy" className="hover:text-accent-blue transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
