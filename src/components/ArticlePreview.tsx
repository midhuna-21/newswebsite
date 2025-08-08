import React from 'react';
import Image from 'next/image';

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
        <span className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
          {data.category}
        </span>
        <span className="ml-2 text-red-600">•</span>
      </div>

      {/* Mobile Layout (md and below) */}
      <div className="md:hidden flex gap-3 sm:gap-4 mb-2">
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-lg sm:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
            {data.title}
          </p>
        </div>
        <div className="flex-shrink-0 w-28 sm:w-36 relative">
          <Image
            src={data.image}
            alt={data.title}
            width={144}
            height={96}
            className="w-full h-20 sm:h-24 object-cover"
          />
        </div>
      </div>

      {/* Desktop Layout (md and above) */}
      <div className="hidden md:block relative">
        {/* Image floats to the right */}
        <div className="float-right w-[280px] h-[196px] ml-4 mb-2">
          <Image
            src={data.image}
            alt={data.title}
            width={280}
            height={196}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title for desktop */}
        <p className="text-xl lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
          {data.title}
        </p>
      </div>

      <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>

      {/* Clear float on desktop */}
      <div className="hidden md:block clear-both"></div>
    </div>
  );
};

export default ArticlePreview;
