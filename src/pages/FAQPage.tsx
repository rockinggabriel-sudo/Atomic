import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      category: 'FAQ',
      question: 'What is Atomic Gaming?',
      answer: 'Atomic Gaming is a competitive esports and content organization built to dominate. We focus on high-level gameplay, elite content creation, and developing a community around ambition, growth, and excellence across top titles like Fortnite.'
    },
    {
      id: 2,
      category: 'FAQ',
      question: 'How do I join Atomic Gaming as a player or content creator?',
      answer: 'Atomic Gaming is a highly exclusive organization. If you are serious about joining, start grinding and consistently use #AtomicRC in all your posts. We recruit based on skill, consistency, brand presence, and how well you represent the Atomic mindset.'
    },
    {
      id: 3,
      category: 'FAQ',
      question: 'Does Atomic Gaming host community events or tournaments?',
      answer: 'Yes. We frequently host tournaments, custom games, and other community events to engage our supporters and spotlight rising talent. Stay tuned to our socials for announcements and sign-ups.'
    },
    {
      id: 4,
      category: 'FAQ',
      question: 'How can I partner or collaborate with Atomic Gaming?',
      answer: 'We’re open to partnerships with brands, creators, and teams that align with our mission. To inquire, head to the Contact section of our website or email us directly. Serious inquiries only.'
    },
    {
      id: 5,
      category: 'FAQ',
      question: 'Where can I find official news and updates from Atomic Gaming?',
      answer: 'All official announcements, roster changes, and new content are shared on our website and through our social media platforms — including Twitter, TikTok, Instagram, and YouTube. Follow us to stay up to date.'
    }
  ];

  const categories = ['All', ...new Set(faqData.map(item => item.category))];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQ = faqData.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Atomic Gaming, our teams, partnerships, and how to get involved
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <div key={item.id} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  </div>
                  {openItems[item.id] ? (
                    <ChevronUp className="h-5 w-5 text-red-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems[item.id] && (
                  <div className="px-6 pb-6">
                    <div className="pl-20">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQ items found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Can't find what you're looking for? Our team is here to help with any additional questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Contact Us
            </a>
            <a
              href="https://discord.gg/fratomic"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button border border-red-600 text-red-400 px-8 py-4 rounded-lg font-semibold"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;