import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/3D PNG.png" 
                alt="Beauty Salon Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">Beauty Salon</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional beauty services to enhance your natural beauty. We offer threading, waxing, facials, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Threading</li>
              <li>Waxing</li>
              <li>Facials</li>
              <li>Henna</li>
              <li>Massage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-pink-400 mt-1" />
                <span className="text-gray-300">Chelmsford, Essex, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-pink-400" />
                <a href="tel:+447587352958" className="text-gray-300 hover:text-pink-400 transition-colors">
                  +44 7587 352958
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-pink-400" />
                <a href="mailto:info@beautysalon.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                  info@beautysalon.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-pink-400" />
                <a href="https://wa.me/447587352958" className="text-gray-300 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Beauty Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

