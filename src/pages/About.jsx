import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaHeart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our beauty salon and our commitment to quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Beauty Is Our Priority
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Welcome to our beauty salon, where we specialize in providing professional beauty treatments to enhance your natural beauty. With years of experience in the industry, our skilled technicians are dedicated to delivering exceptional results.
                </p>
                <p>
                  We use high-quality products and the latest techniques to ensure you receive the best possible service. Our friendly and welcoming environment makes every visit a relaxing and enjoyable experience.
                </p>
                <p>
                  Whether you're preparing for a special occasion or simply want to pamper yourself, we offer a wide range of services including threading, waxing, facials, and more to meet all your beauty needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/hero1.jpg" 
                  alt="Beauty Salon" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Our mission is to provide exceptional beauty services that enhance your natural beauty while ensuring a relaxing and comfortable experience. We are committed to using premium products, maintaining the highest standards of hygiene, and continuously improving our skills to serve you better.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Years of Experience</h3>
                <p className="text-gray-600">
                  Our team has extensive experience in the beauty industry, ensuring you receive professional and expert care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our skilled technicians are trained in the latest techniques and are passionate about helping you look your best.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Products</h3>
                <p className="text-gray-600">
                  We use only high-quality, professional-grade products that are safe for your skin and deliver excellent results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hygiene Standards</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of cleanliness and hygiene to ensure a safe and comfortable experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Service</h3>
                <p className="text-gray-600">
                  We tailor our services to meet your individual needs and preferences, ensuring a personalized experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover:transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Pricing</h3>
                <p className="text-gray-600">
                  We offer competitive pricing without compromising on quality, making beauty services accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-pink-100">
              <p>
                Founded with a passion for beauty and wellness, our salon has been serving customers for years. We started with a simple vision: to provide exceptional beauty services that make every client feel confident and beautiful.
              </p>
              <p>
                Over the years, we have built a loyal customer base through our commitment to quality, excellent customer service, and continuous improvement. Our team constantly updates their skills and knowledge to stay current with the latest trends and techniques in the beauty industry.
              </p>
              <p>
                Today, we are proud to be a trusted name in beauty services, known for our expertise, professionalism, and dedication to customer satisfaction. We look forward to welcoming you to our salon and helping you achieve your beauty goals.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your appointment today and let us help you look and feel your best.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto w-fit"
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

export default About;

