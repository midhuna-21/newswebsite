// components/SignatairesArticleCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
}

interface Props {
  data: NewsData;
}

const SignatairesArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto border-2 border-gray-200 bg-white">
      <div className="bg-white p-3 sm:p-4">
        {/* Category */}
        <div className="flex items-center mb-2">
         <span className="text-red-600 sm:text-sm uppercase tracking-wide" style={{fontWeight:500, fontSize:'20px',  fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",}}>
          {data.category}
        </span>
          <span className="ml-2 text-red-600">•</span>
        </div>

        {/* Mobile + Tablet Layout (md and below) */}
        <div className="md:hidden flex gap-3 sm:gap-4 mb-2">
             <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
          <div className="flex-1 min-w-0 pr-2">
            <h1 className="text-base sm:text-lg md:text-[17px] font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
              {data.title}
            </h1>
          </div>
          <div className="flex-shrink-0 w-24 sm:w-28 md:w-28 relative">
            <Image
              src={data.image}
              alt={data.title}
              width={112}
              height={84}
              className="w-full h-20 sm:h-24 md:h-24 object-cover"
              />
          </div>
              </Link>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="hidden md:block relative">
             <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
          {/* Image floats to the right */}
          <div className="float-right w-[200px] lg:w-[240px] h-[140px] lg:h-[168px] ml-4 mb-2">
            <Image
              src={data.image}
              alt={data.title}
              width={240}
              height={168}
              className="w-full h-full object-cover"
              />
          </div>

          {/* Title for desktop */}
          <p className="text-lg lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
            {data.title}
          </p>
              </Link>
        </div>

        {/* Description for all views */}
        <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-black text-justify mb-2 md:mb-0">
          {data.shortdescription}
        </p>

        {/* Clear float on desktop */}
        <div className="hidden md:block clear-both"></div>
      </div>
    </div>
  );
};

export default SignatairesArticleCard;
