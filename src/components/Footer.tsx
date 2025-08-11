import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-12">
      <div 
        className=" text-white text-center py-4 shadow-inner"
        style={{ backgroundColor: '#4f4f48' }}
      >
        <h2 className="text-xl font-bold tracking-wide">Contacter « Le Canard »</h2>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="space-y-4">
              <h3 className="text-lg font-custom uppercase tracking-wide border-b pb-2 mb-4" style={{fontWeight:900,color:'#4f4f48'}}>
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/business" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="/sports" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link href="/health" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="/politics" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Politics
                    </Link>
                  </li>
                  <li>
                    <Link href="/science" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Science
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/technology" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/education" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href="/entertainment" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
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

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide pb-2 mb-4 font-custom border-b" style={{fontWeight:900,color:'#4f4f48'}}>
                About
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200" style={{fontWeight:400,color:'#4f4f48'}}>
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600  hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                    Editorial Policy & Standards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 font-custom text-lg hover:underline transition-colors duration-200"style={{fontWeight:400,color:'#4f4f48'}}>
                    Correction Policy
                  </Link>
                </li>
              </ul>
            </div>

        
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 font-custom">© 1915-2025</span>
              <span className="font-custom text-gray-800" style={{fontWeight:900}}>Le Canard enchaîné</span>
              <span className="text-red-600 mx-2">•</span>
            </div>

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