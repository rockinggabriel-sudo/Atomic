import React from 'react';
import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Privacy <span className="text-red-500">Policy</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="bg-gray-900 rounded-lg p-6">
              <p className="text-gray-400">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account or profile</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                  <li>Purchase merchandise from our store</li>
                </ul>
                <p>This may include your name, email address, phone number, and payment information.</p>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Process transactions and send confirmations</li>
                  <li>Send you updates about our teams and events</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a
                href="mailto:contact@fratomic.org"
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                contact@fratomic.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;