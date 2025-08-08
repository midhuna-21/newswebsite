'use client';

import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

interface BreadcrumbProps {
  category?: string;
  title?: string;
}

export default function Breadcrumb({ category, title }: BreadcrumbProps) {
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <div className="w-full border-t border-b border-gray-200 mt-[80px] md:mt-[110px]">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center space-x-2 text-sm">
        <FaHome className="text-red-600 w-4 h-4" />
        <Link href="/" className="text-gray-700 underline hover:text-gray-900">
          Accueil
        </Link>

        {category && (
          <>
            <span className="text-gray-400">/</span>
            <Link
              href={`/${category}`}
              className="text-gray-700 underline hover:text-gray-900"
            >
              {capitalize(category)}
            </Link>
          </>
        )}

        {title && (
          <>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{title}</span>
          </>
        )}
      </div>
    </div>
  );
}
