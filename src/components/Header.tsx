"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';
import { ChevronDown, X } from 'lucide-react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [rubriquesOpen, setRubriquesOpen] = useState(false);
  const [thematiquesOpen, setThematiquesOpen] = useState(false);


  const NavItems = [
    { label: 'Business', slug: 'business' },
    { label: 'Technology', slug: 'technology' },
    { label: 'Sports', slug: 'sports' },
    { label: 'Health', slug: 'health' },
    { label: 'Science', slug: 'science' },
    { label: 'Politics', slug: 'politics' },
    { label: 'Entertainment', slug: 'entertainment' },
    { label: 'Education', slug: 'education' },
  ];

  return (
      <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 999,
            backgroundColor: '#fff',
            color: '#000',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
          }}>
      <div className="relative w-full py-3 lg:py-6 flex items-center justify-between px-4 sm:px-6">

        <div className="flex items-center space-x-3">
          {/* MENU Button */}
          <button
            onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center space-y-1 text-red-600 text-xs cursor-pointer md:pl-2 lg:hidden"
  >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-red-600"></span>
              <span className="block w-6 h-0.5 bg-red-600"></span>
              <span className="block w-6 h-0.5 bg-red-600"></span>
            </div>
          </button>

          {/* Logo (visible on all sizes but centered only on desktop) */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-center flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-black font-serif leading-none whitespace-nowrap">
              Le Canard <br className="sm:hidden" />
              <span className="sm:ml-2 font-bold">enchaîné</span>
            </h1>
            <p className="text-[11px] sm:text-sm text-red-600 mt-1 md:block hidden">
              Journal satirique paraissant le mercredi et sur Internet
            </p>
          </div>
        </div>

        {/* Right - Subscribe & Login */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="bg-yellow-400 text-black rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold hover:bg-yellow-500 whitespace-nowrap">
            S’abonner
          </button>

          <Link href="#" className="flex items-center space-x-1 text-black hover:underline text-xs sm:text-sm">
            <User className="w-4 h-4 text-red-600" />
            <span className="hidden sm:inline">Se connecter</span>
          </Link>

          <button>
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 hover:text-black" />
          </button>
        </div>
      </div>

      {menuOpen && (
    <aside
  className={`fixed top-0 left-0 w-full sm:w-[320px] h-full bg-[#f4f2ef] z-50 overflow-y-auto shadow-md border-r border-gray-300 transform transition-transform duration-300 ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>

          <div className="flex h-full">
            {/* Left Column: FERMER */}
            <div className="w-[70px] border-r border-gray-300 p-2 flex flex-col items-center pt-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex flex-col items-center space-y-1 text-sm border px-2 py-1 text-black"
              >
                <X className="w-4 h-4 cursor-pointer" />
                {/* <span className="text-[10px] font-semibold">FERMER</span> */}
              </button>
            </div>

            {/* Right Column: All Other Content */}
            <div className="flex-1 flex flex-col overflow-y-auto">
              {/* Search */}

              {/* Categories & Navigation */}
              <nav className="text-sm text-black px-4 mt-4 flex-1">
                <ul className="divide-y divide-gray-300 border-t border-gray-300">
                  {NavItems.map((item) => (
                    <li key={item.slug} className="py-3">
                      <Link
                        href={`/${item.slug}`}
                        className="hover:underline block"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>


            </div>
          </div>
        </aside>
      )}



    </header>
  );
}
