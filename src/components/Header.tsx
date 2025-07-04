import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calculator } from 'lucide-react';
import logoImage from '../image/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For desktop dropdowns
  const [activeMobileSection, setActiveMobileSection] = useState(null); // For mobile menu sections
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyLinks = [
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Culture', href: '/culture' },
    { label: 'Finathle Headquarters', href: '/Finathle-headquarters' },
    // { label: 'Cincinnati Location', href: '/cincinnati-location' },
    { label: 'Careers', href: '/careers' },
  ];

  const educationLinks = [
    { label: 'Intro to Debt & Credit', href: '/intro-to-debt-credit' },
    { label: 'Credit Reporting', href: '/credit-reporting' },
    { label: 'Debt Collection', href: '/debt-collection' },
    { label: 'Scams and Frauds', href: '/scams-and-frauds' },
  ];

  // Toggle desktop dropdown
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Toggle mobile menu section
  const toggleMobileSection = (section) => {
    setActiveMobileSection(activeMobileSection === section ? null : section);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSection(null);
  };

  return (
    <>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }

          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }

          .animate-fade-in-delayed {
            animation: fade-in 0.3s ease-out forwards;
          }

          .float {
            animation: float 6s ease-in-out infinite;
          }

          .float-delayed {
            animation: float 8s ease-in-out infinite 2s;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          .mobile-menu {
            transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
            overflow: hidden;
          }

          .mobile-section {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            overflow: hidden;
          }
        `}
      </style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/30'
            : 'bg-gradient-to-r from-white/90 via-blue-50/90 to-sky-50/90 backdrop-blur-md'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-sky-300/10 rounded-full blur-3xl float" />
          <div className="absolute -top-4 right-1/3 w-24 h-24 bg-gradient-to-br from-sky-300/10 to-cyan-300/10 rounded-full blur-2xl float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-4" onClick={closeMobileMenu}>
              <img src={logoImage} alt="Finathle Logo" className="h-16 w-auto object-contain" />
            </Link>

            <nav className="hidden lg:flex space-x-2">
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:scale-105"
                  onClick={() => toggleDropdown('company')}
                >
                  <span className="font-semibold">Company</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'company' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-100/50 py-3 z-50 animate-scale-in">
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                    <div className="p-3">
                      {companyLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 rounded-lg font-medium group animate-fade-in-delayed"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span>{link.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:scale-105"
                  onClick={() => toggleDropdown('education')}
                >
                  <span className="font-semibold">Consumer Education</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'education' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'education' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-100/50 py-3 z-50 animate-scale-in">
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                    <div className="p-3">
                      {educationLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 rounded-lg font-medium group animate-fade-in-delayed"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span>{link.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/emi-calculator"
                className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 font-semibold group hover:scale-105 ${
                  location.pathname === '/emi-calculator' ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50' : ''
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                <Calculator className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>EMI Calculator</span>
              </Link>

              <Link
                to="/faqs"
                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 font-semibold hover:scale-105 ${
                  location.pathname === '/faqs' ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50' : ''
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                FAQs
              </Link>

              <Link
                to="/contact-us"
                className={`text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:via-sky-700 hover:to-cyan-700 transition-all duration-300 py-3 px-6 rounded-2xl font-semibold hover:scale-105 relative overflow-hidden ${
                  location.pathname === '/contact-us' ? 'from-blue-700 via-sky-700 to-cyan-700 scale-105' : ''
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </nav>

            <button
              className="lg:hidden p-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 rounded-2xl transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`lg:hidden mobile-menu ${
              isMobileMenuOpen ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 py-6 mt-4 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div>
                  <button
                    className="w-full text-left font-bold text-gray-900 px-6 py-2 text-lg bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent flex items-center justify-between"
                    onClick={() => toggleMobileSection('company')}
                  >
                    Company
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeMobileSection === 'company' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`mobile-section ${
                      activeMobileSection === 'company' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-8 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed hover:translate-x-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <button
                    className="w-full text-left font-bold text-gray-900 px-6 py-2 text-lg bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-between"
                    onClick={() => toggleMobileSection('education')}
                  >
                    Consumer Education
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeMobileSection === 'education' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`mobile-section ${
                      activeMobileSection === 'education' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {educationLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-8 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed hover:translate-x-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-6 space-y-3">
                  <Link
                    to="/emi-calculator"
                    className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 rounded-2xl font-semibold hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    <Calculator className="w-5 h-5" />
                    <span>EMI Calculator</span>
                  </Link>
                  <Link
                    to="/faqs"
                    className="block py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 rounded-2xl font-semibold hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block py-4 px-4 text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:via-sky-700 hover:to-cyan-700 transition-all duration-300 rounded-2xl font-semibold text-center hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;