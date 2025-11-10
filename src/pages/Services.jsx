import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaArrowLeft, FaArrowRight as FaRight } from 'react-icons/fa';

// High-quality service images with professional aesthetics
const imageUrls = {
  threading: '/images/hero.jpg',
  waxing: '/images/hero1.jpg',
  facial: '/images/hero2.jpg'
};

const Services = () => {

  const services = [
    {
      id: 'threading',
      title: 'Threading',
      description: 'Precise hair removal technique using cotton thread for perfect shaping. Our expert estheticians provide gentle and accurate threading services for a flawless look.',
      image: imageUrls.threading,
      icon: '🧵',
      items: [
        { name: 'Eyebrows' },
        { name: 'Upper Lip' },
        { name: 'Chin' },
        { name: 'Neck' },
        { name: 'Sides' },
        { name: 'Forehead' },
        { name: 'Full Face' },
        { name: 'Full Face & Neck' },
      ]
    },
    {
      id: 'waxing',
      title: 'Waxing',
      description: 'Experience smooth, hair-free skin with our professional waxing treatments. We use high-quality wax for minimal discomfort and long-lasting results.',
      image: imageUrls.waxing,
      icon: '✨',
      items: [
        { name: 'Eyebrows' },
        { name: 'Upper Lip' },
        { name: 'Chin' },
        { name: 'Neck' },
        { name: 'Sides' },
        { name: 'Full Face' },
        { name: 'Hands' },
        { name: 'Under Arm' },
        { name: 'Legs' },
        { name: 'Full Body' },
      ]
    },
    {
      id: 'facial',
      title: 'Facials & More',
      description: 'Pamper yourself with our range of facial treatments designed to rejuvenate and refresh your skin. We use premium products for the best results.',
      image: imageUrls.facial,
      icon: '💆',
      items: [
        { name: 'Basic Facial' },
        { name: 'Gold Facial' },
        { name: 'Diamond Facial' },
        { name: 'Bleach' },
        { name: 'Cleansing & Blackhead Removal' },
        { name: 'Mehndi (per hand)' },
        { name: 'Traditional Head Massage' },
        { name: 'Henna (Short Hair)' },
        { name: 'Henna (Long Hair)' },
      ]
    }
  ];

  const [activeService, setActiveService] = useState(services[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const next = (currentSlide + 1) % services.length;
    setCurrentSlide(next);
    setActiveService(services[next]);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + services.length) % services.length;
    setCurrentSlide(prev);
    setActiveService(services[prev]);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={activeService.image} 
            alt={activeService.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional beauty treatments to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <div className="relative bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
              aria-label="Previous service"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            
            <div className="flex-1 px-4">
              <div className="flex justify-center space-x-2">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setCurrentSlide(index);
                      setActiveService(service);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? 'bg-red-500 w-6' : 'bg-gray-300'}`}
                    aria-label={`Go to ${service.title}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
              aria-label="Next service"
            >
              <FaRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={activeService.image} 
                alt={`${activeService.title} service`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <div className="text-5xl mb-2">{activeService.icon}</div>
                  <h2 className="text-4xl font-bold text-white">{activeService.title}</h2>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-8">
                {activeService.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Menu</h3>
                <div className="space-y-3">
                  {activeService.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-colors w-full md:w-auto"
                  >
                    Book Now
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* All Services Grid */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12">Explore All Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => {
                    const index = services.findIndex(s => s.id === service.id);
                    setCurrentSlide(index);
                    setActiveService(service);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                    <img 
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/800x600/f3f4f6/9ca3af?text=Service+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Threading Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Precise and accurate hair removal</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Gentle on sensitive skin</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">No chemical products used</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Perfect shaping and definition</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Waxing Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Long-lasting smooth skin</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Professional-grade products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Suitable for all body areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <FaCheck className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Exfoliates and softens skin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Book Your Service?
            </h3>
            <p className="text-xl text-pink-100 mb-6">
              Contact us today to schedule your appointment
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto w-fit"
            >
              <span>Book Now</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

