import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Trophy, Users } from 'lucide-react';

const NewsPage = () => {
  const featuredNews = {
    id: 1,
    title: 'Atomic Gaming Returns to Esports',
    excerpt: 'Atomic Gaming is proud to announce its official return to the competitive esports Scene.',
    image: 'https://i.imgur.com/nzsjQh2.png',
    date: 'August 1, 2025',
    author: 'Atomic Gaming',
    category: 'Relaunch',
    readTime: '5 min read'
  };

  const newsArticles = [
    {
      id: 2,
      title: '???',
      excerpt: '???',
      image: 'https://i.imgur.com/nzsjQh2.png',
      date: 'August 3, 2025',
      author: 'Atomic Gaming',
      category: '???',
      readTime: '0 min read'
    },
    {
      id: 3,
      title: '???',
      excerpt: '???',
      image: 'https://i.imgur.com/nzsjQh2.png',
      date: 'August 3, 2025',
      author: 'Atomic Gaming',
      category: 'Team Archives',
      readTime: '0 min read'
    }
  ];

  const categories = [
    'All News',
    'Team Archives'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Latest <span className="text-red-500">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and announcements from Atomic Gaming
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-red-400 text-sm font-semibold">{featuredNews.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredNews.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredNews.author}
                    </div>
                  </div>
                  <Link
                    to="/atomic-gaming-returns"
                    className="animated-button bg-red-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-black rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <article key={article.id} className="bg-black rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600/90 text-white px-2 py-1 rounded text-xs font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">By {article.author}</span>
                        <button className="text-red-400 hover:text-red-300 font-semibold text-sm flex items-center">
                        <button className="animated-underline text-red-400 hover:text-red-300 font-semibold text-sm flex items-center">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 text-lg mb-8">
            Subscribe to our newsletter and never miss important updates from Atomic Gaming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            <button className="animated-button bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;