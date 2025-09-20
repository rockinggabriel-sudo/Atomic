import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the cookie popup
    const hasSeenCookiePopup = localStorage.getItem('atomic-cookie-consent');
    if (!hasSeenCookiePopup) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('atomic-cookie-consent', 'true');
    setShowPopup(false);
  };

  const handleClose = () => {
    localStorage.setItem('atomic-cookie-consent', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 sm:p-8 border border-red-600/20 my-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center mb-6">
          <Cookie className="h-8 w-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
        </div>
        
        <div className="space-y-4 text-gray-300 mb-8">
          <p>
            <strong className="text-white">Effective Date:</strong> January 1, 2025
          </p>
          
          <p>
            Atomic Gaming uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content.
          </p>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">What are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and improve your experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Managing Cookies:</h3>
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
            </p>
          </div>
          
          <p>
            By continuing to use our website, you consent to our use of cookies as described in this policy.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleAccept}
            className="animated-button bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold flex-1 text-sm sm:text-base"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleClose}
            className="animated-button border border-gray-600 text-gray-300 px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center justify-center text-sm sm:text-base"
          >
            <X className="h-4 w-4 mr-2" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;