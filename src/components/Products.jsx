import React from 'react';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Luxury Facial Cream',
    rating: 4.8,
    image: '/images/hero.jpg',
    category: 'Skincare'
  },
  {
    id: 2,
    name: 'Revitalizing Hair Serum',
    rating: 4.7,
    image: '/images/hero1.jpg',
    category: 'Hair Care'
  },
  {
    id: 3,
    name: 'Natural Lip Balm Set',
    rating: 4.9,
    image: '/images/hero2.jpg',
    category: 'Makeup'
  },
  {
    id: 4,
    name: 'Spa Body Scrub',
    rating: 4.6,
    image: '/images/hero.jpg',
    category: 'Body Care'
  }
];

const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exclusive range of beauty products, carefully selected for quality and effectiveness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden hover:transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating}/5.0</span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  <FaShoppingBag /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
