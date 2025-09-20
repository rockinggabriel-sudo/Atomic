import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Target, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900/20 min-h-screen flex items-center px-4 sm:px-0">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/Jz82nly.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">ATOMIC</span>
            <span className="text-red-500 ml-2 sm:ml-4 block sm:inline">GAMING</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Professional esports organization competing at the highest level across multiple gaming titles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              to="/teams"
              className="animated-button bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center group text-sm sm:text-base"
            >
              View Our Teams
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="animated-button border border-red-600 text-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">x</h3>
              <p className="text-gray-400">Tournament Wins</p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">2</h3>
              <p className="text-gray-400">Professional Players</p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">3</h3>
              <p className="text-gray-400">Gaming Titles</p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">x</h3>
              <p className="text-gray-400">Prize Money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teams */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Teams</h2>
            <p className="text-gray-400 text-lg">Elite competitors across multiple gaming titles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fortnite', image: 'https://i.imgur.com/Gda3Dn2.png', rank: '#52 NAC' },
              { title: 'Valorant', image: 'https://i.imgur.com/Gda3Dn2.png', rank: 'TBD' },
              { title: 'Call of Duty', image: 'https://i.imgur.com/Gda3Dn2.png', rank: 'TBD' },
            ].map((team, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${team.image})` }}>
                  <div className="h-full bg-black/50 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{team.title}</h3>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{team.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/teams"
              className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center group"
            >
              View All Teams
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-gray-400 text-lg">Stay updated with our latest achievements and announcements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Atomic Returns to Esports Gaming ', date: 'Aug 1, 2025', excerpt: 'Atomic Gaming Returns to Esports' },
              { title: '???', date: '???, 2025', excerpt: 'Coming Soon' },
              { title: '???', date: '???, 2025', excerpt: 'Coming Soon' },
            ].map((news, index) => (
              <article key={index} className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300">
                <div className="text-red-400 text-sm mb-2">{news.date}</div>
                <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                <p className="text-gray-400 mb-4">{news.excerpt}</p>
                <Link to="/news" className="animated-underline text-red-400 hover:text-red-300 font-semibold inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;