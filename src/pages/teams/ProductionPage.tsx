import React from 'react';
import { Camera, Mic, Edit, Monitor, Headphones, Film } from 'lucide-react';

const ProductionPage = () => {
  const productionTeam = [
    {
      id: 1,
      name: 'AG DevoZ',
      role: 'Head of Graphics',
      image: 'https://i.imgur.com/L3Qstm7.jpeg',
      specialties: ['Live Event Production', 'Broadcast Management', 'Team Coordination'],
      experience: '5 years',
      bio: ' ',
      equipment: ['Photoshop'],
      link: 'https://www.behance.net/DevoZdzn'
    },
    {
      id: 2,
      name: 'AG KidArtz',
      role: 'Thumbnail Designer',
      image: 'https://i.imgur.com/PxFK7ZI.jpeg',
      specialties: ['Highlight Reels', 'Social Media Content', 'Documentary Production'],
      experience: '4 years',
      bio: ' ',
      equipment: ['Photoshop'],
      link: 'https://payhip.com/KidArtssShop'
    },
    {
      id: 3,
      name: 'AG Berk',
      role: 'Brand Designer',
      image: 'https://i.imgur.com/pehreVT.jpeg',
      specialties: ['Live Streaming', 'Tournament Coverage', 'Player Interviews'],
      experience: '4 years',
      bio: ' ',
      equipment: ['Photoshop', 'Illustrator'],
      link: 'https://www.behance.net/creativeberkiel'
    },
    {
      id: 4,
      name: 'AG Murka',
      role: 'Graphic Designer',
      image: 'https://i.imgur.com/EsiE2gD.jpeg',
      specialties: ['Design', 'Production', 'Graphics'],
      experience: '4 years',
      bio: ' ',
      equipment: ['Photoshop'],
      link: 'https://www.behance.net/murkadzn'
    },
    {
      id: 5,
      name: 'AG ???',
      role: 'Video Editor',
      image: 'https://i.imgur.com/2ciq90X.png',
      specialties: ['Motion Graphics', 'Broadcast Graphics', 'Brand Design'],
      experience: '? years',
      bio: ' ',
      equipment: ['Premiere Pro'],
      link: 'https://behance.net'
    },
    {
      id: 6,
      name: 'AG Kingxe',
      role: 'Montage Editor',
      image: 'https://i.imgur.com/ZELIdWl.jpeg',
      specialties: ['Live Stream Management', 'Technical Direction', 'Quality Control'],
      experience: '7 years',
      bio: ' ',
      equipment: ['Vegas Pro'],
      link: 'https://solo.to/kingxe'
    }
  ];

  const productionServices = [
    {
      icon: Camera,
      title: 'Live Event Production',
      description: 'Full-scale tournament and event production with professional broadcast quality'
    },
    {
      icon: Edit,
      title: 'Content Creation',
      description: 'Highlight reels, documentaries, and promotional content for teams and players'
    },
    {
      icon: Monitor,
      title: 'Streaming Services',
      description: 'Multi-platform streaming setup and management for live broadcasts'
    },
    {
      icon: Mic,
      title: 'Audio Production',
      description: 'Professional audio mixing, podcast production, and sound design'
    },
    {
      icon: Film,
      title: 'Video Production',
      description: 'Commercial videos, player profiles, and marketing content creation'
    },
    {
      icon: Headphones,
      title: 'Post-Production',
      description: 'Editing, color grading, and finishing for all video content'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Production <span className="text-red-500">Team</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our world-class production team creates stunning visual content and manages live broadcasts for tournaments and events
          </p>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Production Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive production capabilities for all content needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionServices.map((service, index) => (
              <div key={index} className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Production Team</h2>
            <p className="text-gray-400 text-lg">The talented professionals behind our content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionTeam.map((member) => (
              <div key={member.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-red-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Equipment</h4>
                    <ul className="space-y-1">
                      {member.equipment.map((item, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className="text-red-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{member.experience} experience</span>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Production Statistics</h2>
            <p className="text-gray-400 text-lg">Our content creation and broadcast achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Videos Produced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Clients Happy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-400">Production Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionPage;