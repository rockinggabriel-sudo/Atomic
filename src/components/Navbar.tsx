import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Home, Info, Trophy, Store, Newspaper, Phone, Briefcase, Settings, Bell, Heart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTeamsMenu, setShowTeamsMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const teamsMenuItems = [
    { name: 'Leaders', path: '/teams/leaders' },
    { name: 'Competitive', path: '/teams/competitive' },
    { name: 'Creators', path: '/teams/creators' },
    { name: 'Production', path: '/teams/production' },
    { name: 'Partners', path: '/teams/partners' },
  ];

  const mobileMenuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Organization', path: '/about', icon: Info },
    { name: 'Esports Teams', path: '/teams', icon: Trophy },
    { name: 'Merchandise', path: '/shop', icon: Store },
    { name: 'Latest Updates', path: '/news', icon: Newspaper },
    { name: 'Get in Touch', path: '/contact', icon: Phone },
    { name: 'Join Us', path: '/careers', icon: Briefcase },
  ];

  const mobileActionButtons = [
    { name: 'Notifications', icon: Bell, action: () => console.log('Notifications') },
    { name: 'Favorites', icon: Heart, action: () => console.log('Favorites') },
    { name: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];
  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would connect to your auth system
    setIsLoggedIn(true);
    setUser({ name: 'John Doe', email: 'john@example.com' });
    setShowAuthModal(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration - in real app, this would connect to your auth system
    setIsLoggedIn(true);
    setUser({ name: 'New User', email: 'user@example.com' });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-sm border-b border-red-600/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Always on the left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-black p-2 rounded-lg">
                  <img 
                    src="https://i.imgur.com/1kKpv9Z.png" 
                    alt="Atomic Gaming Logo" 
                    className="h-8 w-8"
                  />
                </div>
                <span className="text-xl font-bold text-white">ATOMIC</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className={`animated-underline px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/'
                      ? 'text-red-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`animated-underline px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/about'
                      ? 'text-red-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  About
                </Link>
                
                {/* Teams Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowTeamsMenu(!showTeamsMenu)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 min-w-[80px] ${
                      location.pathname.startsWith('/teams')
                        ? 'text-red-400'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    <span>Teams</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showTeamsMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Teams Dropdown Menu */}
                  {showTeamsMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                      {teamsMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setShowTeamsMenu(false)}
                          className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <span className="animated-underline">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {['Shop', 'News', 'Careers', 'Contact'].map((name) => (
                  <Link
                    key={name}
                    to={`/${name.toLowerCase()}`}
                    className={`animated-underline px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === `/${name.toLowerCase()}`
                        ? 'text-red-400'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* User Account */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  <User className="h-5 w-5" />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 py-2">
                    {isLoggedIn ? (
                      <>
                        <div className="px-4 py-2 border-b border-gray-700">
                          <p className="text-white font-semibold">{user?.name}</p>
                          <p className="text-gray-400 text-sm">{user?.email}</p>
                        </div>
                        <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          Profile
                        </button>
                        <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          Orders
                        </button>
                        <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          Settings
                        </button>
                        <hr className="border-gray-700 my-2" />
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setAuthMode('login');
                            setShowAuthModal(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => {
                            setAuthMode('register');
                            setShowAuthModal(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                          Create Account
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-red-400"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-red-600/20">
                <Link
                  to="/"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/'
                      ? 'text-red-400 bg-gray-800'
                      : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/about'
                      ? 'text-red-400 bg-gray-800'
                      : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Teams Menu */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-red-400">Teams</div>
                  {teamsMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-red-400 bg-gray-800'
                          : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {['Shop', 'News', 'Contact', 'Careers'].map((name) => (
                  <Link
                    key={name}
                    to={`/${name.toLowerCase()}`}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location.pathname === `/${name.toLowerCase()}`
                        ? 'text-red-400 bg-gray-800'
                        : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {authMode === 'login' ? 'Login' : 'Create Account'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={authMode === 'login' ? handleLogin : handleRegister} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button
                type="submit"
                className="animated-button w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                {authMode === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                {authMode === 'login' 
                  ? "Don't have an account? Create one" 
                  : "Already have an account? Login"
                }
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
