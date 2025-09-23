import React, { useState } from 'react';
import { Crown, Twitter } from 'lucide-react';

const LeadersPage = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const leaders = [
    {
      id: 1,
      name: 'AG Shray',
      role: 'Founder & CEO',
      image: 'https://i.imgur.com/ThfpAhp.jpeg',
      twitter: '@shraywya'
    },
    {
      id: 2,
      name: 'AG N0daz',
      role: 'President & Co-CEO',
      image: 'https://i.imgur.com/O16TY1ih.jpg',
      twitter: '@n0daz'
    },
    {
      id: 3,
      name: 'AG Aspect',
      role: 'Chief Operations Officer',
      image: 'https://i.imgur.com/ZoUyLt1.jpeg',
      twitter: '@aspe5t'
    },
    {
      id: 4,
      name: 'AG Supreme',
      role: 'Owner',
      image: 'https://i.imgur.com/x6cqzQY.jpeg',
      twitter: '@5upreme9'
    },
    {
      id: 5,
      name: 'AG ???',
      role: 'Co-Owner',
      image: 'https://i.imgur.com/2ciq90X.png',
      twitter: '@fratomicc'
    },
    {
      id: 6,
      name: 'AG ???',
      role: 'Content Coordinator',
      image: 'https://i.imgur.com/2ciq90X.png',
      twitter: '@fratomicc'
    },
    {
      id: 7,
      name: 'AG Jama',
      role: 'Community Coordinator',
      image: 'https://i.imgur.com/6xp9Xat.jpeg',
      twitter: '@jamamgmt'
    }
  ];

  const handleCardClick = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleTwitterClick = (e) => {
    e.stopPropagation();
    window.open('https://example.com', '_blank');
  };

  const handleBackClick = (e, id) => {
    e.stopPropagation();
    setFlippedCards(prev => ({
      ...prev,
      [id]: false
    }));
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Leadership <span className="text-red-500">Team</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving Atomic Gaming's success and shaping the future of competitive esports
          </p>
        </div>
      </section>

      {/* Leaders Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <div key={leader.id} className="perspective-1000">
                <div
                  className={`relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards[leader.id] ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCardClick(leader.id)}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-red-400 text-sm text-center font-semibold">
                      {leader.role}
                    </p>
                  </div>

                  {/* Back of Card */}
                  <div 
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-red-600 rounded-lg p-6 flex flex-col items-center justify-center"
                    onClick={(e) => handleBackClick(e, leader.id)}
                  >
                    <div 
                      className="bg-white p-4 rounded-full mb-4 hover:bg-gray-100 transition-colors duration-200 relative z-10 cursor-pointer"
                      onClick={handleTwitterClick}
                    >
                      <Twitter className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Philosophy</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            What sets us apart: We’re not here to blend in — we’re here to build, elevate, and lead. Driven by hunger and purpose, everything we create — from our rosters to our tournaments to our content — is designed to push the scene forward. We stay authentic, stay focused, and we’re here to take over.
          </p>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default LeadersPage;