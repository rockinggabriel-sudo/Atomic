import React, { useState } from 'react';
import { ShoppingCart, Plus, Star, Filter } from 'lucide-react';

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const products = [
    {
      id: 1,
      name: 'ATOMIC Pro Jersey BLACK',
      category: 'apparel',
      price: 59.99,
      image: 'https://i.imgur.com/yPSDI1T.png',
      rating: 5.0,
      description: 'Official team jersey worn by our professional players',
      link: 'https://crafted.gg/products/2025-atomic-jersey-black'
    },
    {
      id: 2,
      name: 'ATOMIC Pro Jersey WHITE',
      category: 'apparel',
      price: 59.99,
      image: 'https://i.imgur.com/rBVb5H4.png',
      rating: 5.0,
      description: 'Official team jersey worn by our professional players',
      link: 'https://crafted.gg/products/2025-atomic-jersey-white'
    },
    {
      id: 3,
      name: 'Coming Soon',
      category: 'accessories',
      price: 0.00,
      image: 'https://i.imgur.com/VaS9bkm.png',
      rating: 0.0,
      description: 'New accessories coming soon',
      link: 'https://crafted.gg/collections/atomic-gaming'
    },
    {
      id: 4,
      name: 'Coming Soon',
      category: 'accessories',
      price: 0.00,
      image: 'https://i.imgur.com/VaS9bkm.png',
      rating: 0.0,
      description: 'New accessories coming soon',
      link: 'https://crafted.gg/collections/atomic-gaming'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Atomic Gaming <span className="text-red-500">Store</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Represent your favorite esports team with official merchandise and pro gaming gear
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Categories</h3>
                  <Filter className="h-5 w-5 text-red-400" />
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                {cart.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Cart</h3>
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        {cart.length}
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                      View Cart
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-400">{filteredProducts.length} products available</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/70 text-white px-2 py-1 rounded-lg flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-400">
                          ${product.price}
                        </span>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="animated-button bg-red-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Esports Collection
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              The Official Jerseys of Atomic Gaming.
            </p>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Shop ATOMIC Jerseys
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-400">Comfortable & Durable</p>
            </div>
            <div>
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Turnaround</h3>
              <p className="text-gray-400">High-Quality Jerseys without a wait</p>
            </div>
            <div>
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Affordable</h3>
              <p className="text-gray-400">Professional designs at competitive rates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;