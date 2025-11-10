import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaHands, FaLeaf, FaHeart } from 'react-icons/fa';
import AppointmentButton from '../components/AppointmentButton';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Luxury beauty salon interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-red-400 mt-2">
              Beauty Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium beauty treatments with our expert team. We offer threading, waxing, facials, and more to enhance your natural beauty.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppointmentButton className="text-lg px-8 py-4" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl hover:transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly trained professionals with years of experience</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHands className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Products</h3>
              <p className="text-gray-600">High-quality products for the best results</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Beauty</h3>
              <p className="text-gray-600">Enhance your natural beauty with our treatments</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Relaxing Experience</h3>
              <p className="text-gray-600">Welcoming environment for a relaxing visit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          </div>

          {/* Threading Services */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Threading</h3>
            </div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Precise hair removal technique using cotton thread for perfect shaping.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Eyebrows' },
                { name: 'Upper Lip' },
                { name: 'Chin' },
                { name: 'Neck' },
                { name: 'Sides' },
                { name: 'Forehead' },
                { name: 'Full Face' },
                { name: 'Full Face & Neck' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg hover:transition-shadow">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium text-gray-800">{service.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Waxing Services */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">🪒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Waxing</h3>
            </div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Smooth and effective hair removal for long-lasting results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Upper Lip' },
                { name: 'Chin' },
                { name: 'Eyebrows' },
                { name: 'Full Face' },
                { name: 'Underarms' },
                { name: 'Half Arms' },
                { name: 'Full Arms' },
                { name: 'Full Legs' },
                { name: 'Half Legs' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg hover:transition-shadow">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium text-gray-800">{service.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Additional Services</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Facial' },
                { name: 'Bleach' },
                { name: 'Manicure' },
                { name: 'Pedicure' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg hover:transition-shadow">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium text-gray-800">{service.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Enhance Your Beauty?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Book your appointment today and experience the difference of professional beauty care.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

