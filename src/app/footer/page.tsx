import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="space-y-4 sm:pr-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Continued at zealously necessary is Surrounded sir motionless she end
              literature. Gay direction neglected.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
              {/* Repeat for other social icons with same structure */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4 sm:pr-4 border-t sm:border-t-0 pt-8 sm:pt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Company Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 sm:pr-4 border-t sm:border-t-0 pt-8 sm:pt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm">
                  175 10th Street, Office 375<br />
                  Berlin, De-21562
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm">
                  +123 34598768<br />
                  +554 34598734
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm">food@restan.com</div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 border-t sm:border-t-0 pt-8 sm:pt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Join our subscribers list to get the latest news and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-4 py-2 flex-grow rounded-l focus:outline-none text-sm w-full"
              />
              <button className="bg-amber-700 px-4 py-2 rounded-r hover:bg-amber-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="privacy" 
                className="rounded bg-gray-800 border-gray-600 focus:ring-amber-700 focus:ring-offset-gray-900"
              />
              <label htmlFor="privacy" className="text-gray-400 text-sm">Privacy Text</label>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © Copyright 2024 Restan. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;