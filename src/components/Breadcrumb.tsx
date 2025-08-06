'use client';

import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <div className="w-full border-t border-b border-gray-200 mt-[80px]">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center space-x-2 text-sm">
        <FaHome className="text-red-600 w-4 h-4" />
        <Link href="/" className="text-gray-700 underline hover:text-gray-900">
          Accueil
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">Web+</span>
      </div>
    </div>
  );
}
