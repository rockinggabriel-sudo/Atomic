import React from 'react';
import { Trophy, Users, Target, Award, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-red-500">Atomic Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Atomic is a North American esports organization founded in 2025, focused on building a lasting presence across competitive titles starting with Fortnite. Based in Canada, Atomic is grounded in purpose-driven competition and aims to empower the next generation of talent through high performance, strong character, and a culture rooted in innovation and community.

            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At Atomic, our mission is to empower the next generation of gamers by building a high-performance esports branch defined by ambition and Passion.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-red-400">Excellence in Competition</span>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to rise as a global force in esports—cultivating top-tier talent, hosting premier events, and redefining what excellence and leadership mean in the world of competitive gaming.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-red-400">Global Championship Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Innovation</h3>
              <p className="text-gray-400">
                We constantly push the boundaries of what's possible in esports, embracing new technologies and strategies.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Teamwork</h3>
              <p className="text-gray-400">
                Success comes from working together, supporting each other, and building strong relationships.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Passion</h3>
              <p className="text-gray-400">
                Our love for gaming drives us to achieve greatness and inspire others to pursue their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 text-lg">From humble beginnings to global recognition</p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block font-bold">2025</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-3">Foundation</h3>
                <p className="text-gray-300">
                  Atomic Gaming was founded with a visioin to redefine what excellence and leadership mean in the world of competitive gaming, to empower the next generation of gamers. 
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block font-bold">2025</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-3">Fortnite Division Update</h3>
                <p className="text-gray-300">
                  We proudly welcomed Broken to our Fortnite roster, a standout player in the NA Central region with over 70,000 PR and a July 2025 FNCS Grand Finals qualification under his belt. His signing marks a major milestone for Atomic Gaming, firmly placing us on the regional esports map and setting the tone for what’s to come.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block font-bold">2025</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-3">Multi-Title Expansion</h3>
                <p className="text-gray-300">
                  Atomic Gaming has expanded our roster to include games like VALORANT, Call Of Duty, and Fortnite, establishing ourselves as a multi-title organization.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block font-bold">2025</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-3">Official Relaunch</h3>
                <p className="text-gray-300">
                  Atomic Game as Officially Re-Launched after multiple weeks out of the esports scene, with their return they have signed players like DiegoPlayz & Echo, solidifying the tone for what's to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">The visionaries behind Atomic Gaming</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'AG Brody', role: 'Founder & CEO', image: 'https://i.imgur.com/ThfpAhp.jpeg' },
              { name: 'AG Emirhan', role: 'President & Co-CEO', image: 'https://i.imgur.com/oJnw0dh.jpeg' },
              { name: 'AG Aspect', role: 'Chief Operations Officer', image: 'https://i.imgur.com/ZoUyLt1.jpeg' },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;