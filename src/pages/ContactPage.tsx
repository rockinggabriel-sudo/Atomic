import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, MessageSquare, Briefcase, Users, Disc as Discord } from 'lucide-react';

const ContactPage = () => {
  // Configurable contact emails
  const contactEmails = {
    general: 'atomicinq@gmail.com',
    partnerships: 'atomicinq@gmail.com',
    recruitment: 'atomicinq@gmail.com'
  };

  const contactEmail = 'contact@fratomic.org';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // Let the form submit naturally to Netlify
    // No preventDefault() needed
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@fratomic.org',
      description: 'For general inquiries and support'
    },
    {
      icon: Discord,
      title: 'Join Us',
      details: 'discord.gg/fratomic',
      description: 'Official Discord Community'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Toronto, ON',
      description: 'Online Headquarters'
    }
  ];

  const departments = [
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      email: contactEmails.general,
      description: 'Questions about our organization'
    },
    {
      icon: Briefcase,
      title: 'Business & Partnerships',
      email: contactEmails.partnerships,
      description: 'Sponsorship and collaboration opportunities'
    },
    {
      icon: Users,
      title: 'Player Recruitment',
      email: contactEmails.recruitment,
      description: 'Signing and scouting inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to work with us? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-red-400 font-semibold mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify honeypot field */}
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnerships">Business & Partnerships</option>
                    <option value="recruitment">Player Recruitment</option>
                    <option value="media">Media & Press</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="animated-button w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Department Contacts</h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-black rounded-lg p-6 border border-gray-800">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                        <dept.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{dept.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-300"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Link */}
              <div className="mt-8 bg-red-600/10 border border-red-600/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-400 mb-2">Looking for quick answers?</h3>
                <p className="text-gray-300 mb-4">
                  Check out our frequently asked questions section for immediate help with common inquiries.
                </p>
                <button className="animated-underline text-red-400 hover:text-red-300 font-semibold">
                  <Link to="/faq" className="animated-underline text-red-400 hover:text-red-300 font-semibold">
                    View FAQ →
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-gray-400 text-lg mb-8">
            Follow us on social media for the latest updates, behind-the-scenes content, and community interactions
          </p>
          {/* Social Media Links - Update these URLs as needed */}
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Twitter', url: 'https://x.com/FRAtomicc' },
              { name: 'YouTube', url: 'https://www.youtube.com/@FRAtomicc' },
              { name: 'Twitch', url: 'https://www.twitch.tv/fratomicc' },
              { name: 'Discord', url: 'https://discord.gg/fratomic' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;