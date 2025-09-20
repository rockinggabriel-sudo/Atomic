import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Youtube, Twitch, Disc as Discord, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-black p-2 rounded-lg">
                <img 
                  src="https://i.imgur.com/1kKpv9Z.png" 
                  alt="Atomic Gaming Logo" 
                  className="h-10 w-10"
                />
              </div>
              <span className="text-xl font-bold">ATOMIC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional esports organization competing at the highest level across multiple gaming titles.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/FRAtomicc " className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/fratomic" className="text-gray-400 hover:text-red-400 transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@FRAtomicc " className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.twitch.tv/fratomicc " className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="animated-underline text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/teams" className="animated-underline text-gray-400 hover:text-white transition-colors">Our Teams</Link></li>
              <li><Link to="/news" className="animated-underline text-gray-400 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/careers" className="animated-underline text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="animated-underline text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="animated-underline text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Gaming Titles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Titles</h3>
            <ul className="space-y-2">
              <li><Link to="/teams/competitive" className="animated-underline text-gray-400 hover:text-white transition-colors">Fortnite</Link></li>
              <li><Link to="/teams/competitive" className="animated-underline text-gray-400 hover:text-white transition-colors">Valorant</Link></li>
              <li><Link to="/teams/competitive" className="animated-underline text-gray-400 hover:text-white transition-colors">Call of Duty</Link></li>
              <li><Link to="/teams/creators" className="animated-underline text-gray-400 hover:text-white transition-colors">Content Creation</Link></li>
              <li><Link to="/teams/production" className="animated-underline text-gray-400 hover:text-white transition-colors">Creative Production</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">contact@fratomic.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Discord className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">discord.gg/fratomic</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">Toronto, ON</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Atomic Gaming. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('atomic-cookie-consent');
                  window.location.reload();
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;