import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-12">
      {/* Top banner with gradient */}
      <div 
        className="bg-gradient-to-r from-gray-700 to-gray-600 text-white text-center py-4 shadow-inner"
        style={{ backgroundColor: '#4f4f48' }}
      >
        <h2 className="text-xl font-bold tracking-wide">Contacter « Le Canard »</h2>
      </div>

      {/* Main Content */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Column 1 - Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide  pb-2 mb-4">
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/business" className="text-gray-600 hover:underline transition-colors duration-200">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="/sports" className="text-gray-600  hover:underline transition-colors duration-200">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link href="/health" className="text-gray-600  hover:underline transition-colors duration-200">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="/politics" className="text-gray-600  hover:underline transition-colors duration-200">
                      Politics
                    </Link>
                  </li>
                  <li>
                    <Link href="/science" className="text-gray-600  hover:underline transition-colors duration-200">
                      Science
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/technology" className="text-gray-600  hover:underline transition-colors duration-200">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/education" className="text-gray-600  hover:underline transition-colors duration-200">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href="/entertainment" className="text-gray-600  hover:underline transition-colors duration-200">
                      Entertainment
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/lifestyle" className="text-gray-600  hover:underline transition-colors duration-200">
                      Lifestyle
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* Column 2 - About */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide pb-2 mb-4">
                About
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200">
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200">
                    Editorial Policy & Standards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200">
                    Correction Policy
                  </Link>
                </li>
              </ul>
            </div>

        
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
          {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            
            {/* Left side - copyright */}
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">© 1915-2025</span>
              <span className="font-semibold text-gray-800">Le Canard enchaîné</span>
              <span className="text-red-600 mx-2">•</span>
            </div>

            {/* Right side - social icons */}
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <Link 
                href="#" 
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;  