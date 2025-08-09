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

const ArticlePreview: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white border-gray-200">
      {/* Category */}
      <div className="flex items-center mb-2">
        <span className="text-red-600 sm:text-sm uppercase tracking-wide" style={{fontWeight:500, fontSize:'20px',  fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",}}>
          {data.category}
        </span>
        <span className="ml-2 text-red-600">•</span>
      </div>

      {/* Mobile + Tablet Layout (md and below) */}
                    <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
      <div className="md:hidden flex gap-3 sm:gap-4 mb-2">
        
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-base sm:text-lg md:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
            {data.title}
          </p>
        </div>
        <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 relative">
          <Image
            src={data.image}
            alt={data.title}
            width={128}
            height={96}
            className="w-full h-20 sm:h-24 md:h-28 object-cover"
          />
        </div>
      </div>
        </Link>

      {/* Desktop Layout (md and above) */}
                    <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
      <div className="hidden md:block relative">

        {/* Image floats to the right */}
        <div className="float-right w-[240px] lg:w-[280px] h-[168px] lg:h-[196px] ml-4 mb-2">
          <Image
            src={data.image}
            alt={data.title}
            width={280}
            height={196}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title for desktop */}
        <p className="text-lg lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
          {data.title}
        </p>
      </div>

      {/* Description */}
    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-black text-left md:text-justify mb-2 md:mb-0">
  {data.shortdescription}
      </p>

</Link>
      {/* Clear float on desktop */}
      <div className="hidden md:block clear-both"></div>
    </div>
  );
};

export default ArticlePreview;
