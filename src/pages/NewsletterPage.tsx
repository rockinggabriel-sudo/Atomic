import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterPage = () => {
  const newsletterData = {
    title: 'Atomic Gaming Returns to Esports',
    date: 'August 1, 2025',
    author: 'Atomic Gaming',
    heroImage: 'https://i.imgur.com/Jz82nly.png',
    content: `
      Atomic Gaming is proud to announce its official return to the competitive esports Scene. After months of strategic planning and development, Atomic is relaunching with renewed focus and ambition — not just in Fortnite, but as a full-fledged, multi-title esports organization dedicated to competing at the highest levels across various games.

      This relaunch represents Atomic’s commitment to building a championship-caliber roster, expanding into new titles, and establishing itself once again as a top-tier force in the global esports ecosystem.

     As part of this exciting return, Atomic Gaming is proud to welcome elite talent across multiple games, starting with Fortnite’s finest competitors and soon expanding into additional competitive scenes. Our initial roster signings exemplify the skill, dedication, and leadership that will define Atomic’s competitive identity moving forward.

      Atomic DiegoPlayz (@DiegoPlayz) — A seasoned Fortnite competitor with five FNCS Grand Finals appearances and a social reach of over 80,000 followers, DiegoPlayz brings veteran experience and leadership to Atomic’s roster. Known for strategic playmaking and clutch performances, Diego will serve as a foundational pillar in Atomic’s competitive efforts.

      Atomic Echo (@Exhofn) — Echo is one of the region’s most mechanically gifted players, boasting two FNCS Grand Final appearances, over 65,000 PR, and $5,000+ in career earnings. Their explosive gameplay and fearless approach add a dynamic edge to the roster, making Atomic a serious threat in every tournament.

      Together, these players represent the first wave of Atomic’s re-emergence — a balanced and fierce duo that sets the tone for the org’s broader ambitions.

      Atomic Gaming’s journey is just beginning. As we expand into new titles and continue to build out our competitive rosters, stay tuned for more announcements that will shape the future of our organization.

      The return of Atomic Gaming marks a new era. The best is yet to come. 
    `,
    featuredPeople: [
      {
        name: 'AG Echo',
        position: 'Pro Fortnite',
        image: 'https://i.imgur.com/Dp8KMpJ.jpeg'
      },
      {
        name: 'AG DiegoPlayz',
        position: 'Pro Fortnite',
        image: 'https://i.imgur.com/Tb7E068.jpeg'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Image */}
      <section className="relative">
        <img
          src={newsletterData.heroImage}
          alt={newsletterData.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link
            to="/news"
            className="flex items-center bg-black/70 text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {newsletterData.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {newsletterData.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                By {newsletterData.author}
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            {newsletterData.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Featured People */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Players</h2>
            <p className="text-gray-400">Key contributors to this championship victory</p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {newsletterData.featuredPeople.map((person, index) => (
                <div key={index} className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
                  <p className="text-red-400 font-semibold">{person.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">More News</h2>
          <Link
            to="/news"
            className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;