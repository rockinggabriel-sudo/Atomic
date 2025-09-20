import React from 'react';
import { Handshake, Building, Star, DollarSign, Globe, Award } from 'lucide-react';

const PartnersPage = () => {
  const partners = [
    {
      id: 1,
      name: 'Crafted',
      type: 'Official Apparel Partner',
      logo: 'https://i.imgur.com/nvFbypc.jpeg',
      description: 'Designed the way esports gear was always meant to be— stylish, comfortable, and game-ready.',
      partnership: {
        duration: '3 months',
        value: '$',
        benefits: ['Custom-Trailored Jerseys', 'Premium Quality Materials', 'Fast Turnaround', 'Affordable Pricing']
      },
      contact: {
        name: 'CraftedGG',
        role: 'Contact Form',
        email: 'contact@crafted.gg'
      }
    },
    {
      id: 2,
      name: 'COMING SOON',
      type: 'Official Energy Drink Partner',
      logo: 'https://i.imgur.com/VaS9bkm.png',
      description: 'Partnership Coming Soon...',
      partnership: {
        duration: '???',
        value: '$???',
        benefits: ['Product Sponsorship', 'Event Activation', 'Custom Flavors', 'Marketing Campaigns']
      },
      contact: {
        name: '???',
        role: 'Contact Form',
        email: 'contact@example.com'
      }
    },
    {
      id: 3,
      name: 'StreamTech Solutions',
      type: 'Broadcasting Technology Partner',
      logo: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      description: 'Advanced streaming and broadcasting technology solutions for our content creation and live events.',
      partnership: {
        duration: '4 years',
        value: '$3.2M',
        benefits: ['Streaming Equipment', 'Technical Support', 'Software Licenses', 'Training Programs']
      },
      contact: {
        name: 'David Kim',
        role: 'Enterprise Sales Manager',
        email: 'partnerships@streamtech.com'
      }
    },
    {
      id: 4,
      name: 'GameWear Apparel',
      type: 'Official Merchandise Partner',
      logo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      description: 'Premium gaming apparel and merchandise manufacturing partner for all team jerseys and fan gear.',
      partnership: {
        duration: '5 years',
        value: '$4.1M',
        benefits: ['Team Jerseys', 'Fan Merchandise', 'Custom Designs', 'Global Distribution']
      },
      contact: {
        name: 'Sarah Johnson',
        role: 'Brand Partnerships Lead',
        email: 'partnerships@gamewear.com'
      }
    },
    {
      id: 5,
      name: 'CloudHost Gaming',
      type: 'Infrastructure Partner',
      logo: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      description: 'Cloud infrastructure and server hosting solutions supporting our gaming operations and content delivery.',
      partnership: {
        duration: '3 years',
        value: '$1.5M',
        benefits: ['Dedicated Servers', 'CDN Services', 'DDoS Protection', '24/7 Support']
      },
      contact: {
        name: 'Alex Chen',
        role: 'Gaming Solutions Director',
        email: 'gaming@cloudhost.com'
      }
    },
    {
      id: 6,
      name: 'FinanceFirst Bank',
      type: 'Financial Services Partner',
      logo: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
      description: 'Comprehensive financial services including player contracts, prize money management, and business banking.',
      partnership: {
        duration: '2 years',
        value: '$800K',
        benefits: ['Business Banking', 'Player Accounts', 'International Transfers', 'Financial Planning']
      },
      contact: {
        name: 'Robert Martinez',
        role: 'Commercial Banking Manager',
        email: 'esports@financefirst.com'
      }
    }
  ];

  const partnershipTiers = [
    {
      tier: 'Title Sponsor',
      value: '$5M+',
      benefits: ['Logo on all jerseys', 'Naming rights', 'Exclusive category rights', 'Premium activation'],
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      tier: 'Official Partner',
      value: '$1M - $5M',
      benefits: ['Team sponsorship', 'Event activation', 'Content integration', 'Social media presence'],
      color: 'from-red-600 to-red-800'
    },
    {
      tier: 'Supporting Partner',
      value: '$250K - $1M',
      benefits: ['Product placement', 'Event presence', 'Digital marketing', 'Community access'],
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Strategic <span className="text-red-500">Partners</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry-leading brands to enhance our competitive edge and deliver exceptional experiences
          </p>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Current Partners</h2>
            <p className="text-gray-400 text-lg">Trusted brands supporting our journey to excellence</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.slice(0, 2).map((partner) => (
              <div key={partner.id} className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  {/* Partner Header */}
                  <div className="flex items-center space-x-6 mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                      <p className="text-red-400 font-semibold">{partner.type}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{partner.description}</p>

                  {/* Partnership Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black rounded-lg p-4 text-center">
                      <div className="text-red-400 font-bold text-lg">{partner.partnership.duration}</div>
                      <div className="text-gray-400 text-sm">Partnership Duration</div>
                    </div>
                    <div className="bg-black rounded-lg p-4 text-center">
                      <div className="text-red-400 font-bold text-lg">{partner.partnership.value}</div>
                      <div className="text-gray-400 text-sm">Partnership Value</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Partnership Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.partnership.benefits.map((benefit, index) => (
                        <span key={index} className="bg-red-600/20 text-red-400 px-3 py-1 rounded text-sm text-center">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Partnership Contact</h4>
                    <p className="text-gray-300 font-semibold">{partner.contact.name}</p>
                    <p className="text-gray-400 text-sm mb-2">{partner.contact.role}</p>
                    <a
                      href={`mailto:${partner.contact.email}`}
                      className="text-red-400 hover:text-red-300 text-sm font-semibold"
                    >
                      {partner.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join our Community</h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with fellow gamers, get the latest updates, and be part of the Atomic Gaming community.
          </p>
          <a
            href="https://discord.gg/fratomic"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Join Discord Community
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;