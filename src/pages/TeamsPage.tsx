import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Sword, Video, Camera, Handshake } from 'lucide-react';

const TeamsPage = () => {
  const teamSections = [
    {
      id: 1,
      title: 'Leadership Team',
      description: 'Meet the visionary leaders driving Atomic Gaming\'s success and shaping the future of competitive esports. Our executive team brings decades of experience in gaming, business, and technology.',
      image: 'https://i.imgur.com/VaS9bkm.png',
      icon: Crown,
      path: '/teams/leaders',
      highlights: ['C-Suite', 'Owner', 'Executive Leadership']
    },
    {
      id: 2,
      title: 'Competitive Teams',
      description: 'Our elite competitive rosters competing at the highest level worldwide. These are the champions representing Atomic Gaming on the global stage.',
      image: 'https://i.imgur.com/VaS9bkm.png',
      icon: Sword,
      path: '/teams/competitive',
      highlights: ['Fortnite', 'VALORANT', '???']
    },
    {
      id: 3,
      title: 'Content Creators',
      description: 'Our talented content creators who entertain viewers and build our community across all platforms. They bring the excitement of gaming to fans worldwide.',
      image: 'https://i.imgur.com/VaS9bkm.png',
      icon: Video,
      path: '/teams/creators',
      highlights: ['Twitch Streamers', 'YouTube Creators', 'Social Media']
    },
    {
      id: 4,
      title: 'Production Team',
      description: 'Our world-class production team creates stunning visual content and manages live broadcasts for tournaments and events. They bring professional quality to every stream.',
      image: 'https://i.imgur.com/VaS9bkm.png',
      icon: Camera,
      path: '/teams/production',
      highlights: ['Graphic Design', 'Video Production', 'Motion Design']
    },
    {
      id: 5,
      title: 'Strategic Partners',
      description: 'Collaborating with industry-leading brands to enhance our competitive edge and deliver exceptional experiences. Our partnerships drive innovation and growth.',
      image: 'https://i.imgur.com/VaS9bkm.png',
      icon: Handshake,
      path: '/teams/partners',
      highlights: ['Product Partners', 'Sponsors', 'Apparel Partners']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-red-500">Teams</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the talented individuals and teams that make Atomic Gaming a world-class esports organization
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {teamSections.map((section, index) => (
              <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-red-600 p-3 rounded-lg">
                        <section.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <section.icon className="h-8 w-8 text-red-500" />
                    <h2 className="text-4xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {section.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">Key Areas:</h3>
                    <div className="flex flex-wrap gap-3">
                      {section.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={section.path}
                    className="animated-button inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold group"
                  >
                    Explore {section.title}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Organization</h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you're a competitive player, content creator, or industry professional, there's a place for you at Atomic Gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="animated-button border border-red-600 text-red-400 px-8 py-4 rounded-lg font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;