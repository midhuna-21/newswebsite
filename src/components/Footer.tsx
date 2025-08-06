import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Top banner */}
      <div className="bg-gray-700 text-white text-center py-3 text-lg font-semibold" style={{ backgroundColor: '#4f4f48' }}>
        Contacter « Le Canard »
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-800 border-t border-gray-200">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 text-sm px-4 sm:px-6 lg:px-8 py-8 w-fit">
            {/* Column 1 */}
            <div>
              <h2 className="text-base font-bold mb-2 uppercase underline">Categories</h2>
              <ul className="space-y-1">
                <li><Link href="/business" className="hover:underline">Business</Link></li>
                <li><Link href="/sports" className="hover:underline">Sports</Link></li>
                <li><Link href="/health" className="hover:underline">Health</Link></li>
                <li><Link href="/politics" className="hover:underline">Politics</Link></li>
                <li><Link href="/science" className="hover:underline">Science</Link></li>
                <li><Link href="/technology" className="hover:underline">Technology</Link></li>
                <li><Link href="/education" className="hover:underline">Education</Link></li>
                <li><Link href="/entertainment" className="hover:underline">Entertainment</Link></li>
                <li><Link href="/lifestyle" className="hover:underline">Lifestyle</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="text-base font-bold mb-2 uppercase underline">About</h2>
              <ul className="space-y-1">
                <li><Link href="/company" className="hover:underline">Our Company</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                <li><Link href="/editorial-policy" className="hover:underline">Editorial Policy & Standards</Link></li>
                <li><Link href="/correction-policy" className="hover:underline">Correction Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Socials */}
    <div className="border-t border-gray-200 pt-6 pb-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
    <div className="flex items-center space-x-4">
      <span className="text-sm font-semibold">SUIVRE LE PALMIPÈDE</span>
      <div className="flex space-x-3">
        <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaFacebookF className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaXTwitter className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaInstagram className="p-[2px] w-4 h-4 text-gray-600" />
        </Link>
        <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <FaLinkedinIn className="w-4 h-4 text-gray-600" />
        </Link>
      </div>
    </div>
  </div>
</div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-xs text-center text-gray-600 py-4 px-4 flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto space-y-2 lg:space-y-0">
        <div>
          <span className="mr-1">© 1915-2025</span>
          <span className="font-medium">Le Canard enchaîné</span>
          <span className="text-red-600 mx-1">•</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
