import React from 'react';
import { FileText, AlertTriangle, Scale, Users, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Terms of <span className="text-red-500">Service</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="bg-gray-900 rounded-lg p-6">
              <p className="text-gray-400">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using the Atomic Gaming website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Use License</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Permission is granted to temporarily download one copy of the materials on Atomic Gaming's website for personal, non-commercial transitory viewing only.
                </p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            {/* User Conduct */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">User Conduct</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>You agree not to use the service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">Disclaimer</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  The materials on Atomic Gaming's website are provided on an 'as is' basis. Atomic Gaming makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, Atomic Gaming does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Limitations</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In no event shall Atomic Gaming or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Atomic Gaming's website, even if Atomic Gaming or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Modifications</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Atomic Gaming may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;