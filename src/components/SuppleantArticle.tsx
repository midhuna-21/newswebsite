import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';

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

const SuppleantArticle: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto">
         <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
    {/* Date Section */}
    <div className="flex items-center">
      <BiCalendar 
        size={12} 
        className="text-gray-500"
      />
      <span className="font-custom text-red-600 font-medium text-xs">
        Published on
      </span>
      <span className="font-custom text-gray-600 text-xs">
        {data.date}
      </span>
    </div>
      <div className="flex items-start ">
        <span className="text-red-600 text-base sm:text-lg leading-none mr-2 mt-[6px]">•</span>
        <span className="hover:underline font-custom text-base sm:text-lg md:text-lg lg:text-xl" style={{fontWeight:900}}>{data.title}</span>
      </div>

      {/* Content */}
   
    <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                >
                    {data.shortdescription}
                </p>
      {/* Ellipsis link */}
      <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-[16px]">
        <span className="text-black">[</span>
        <span className="text-red-600">…</span>
        <span className="text-black">]</span>
      </p>
         </Link>
    </div>
  );
};

export default SuppleantArticle;
