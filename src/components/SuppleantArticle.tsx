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
     
        {/* Ellipsis link with date on right */}
<div className="mt-2 flex items-center text-xs sm:text-sm md:text-sm lg:text-[16px]">
  {/* Ellipsis */}
  <p className="flex items-center m-0">
    <span className="text-black">[</span>
    <span className="text-red-600">…</span>
    <span className="text-black">]</span>
  </p>

  {/* Date */}
  <div className="flex items-center pl-3">
    {/* <BiCalendar size={12} className="text-gray-500 mr-1" /> */}
    <span className="font-custom text-red-600 font-medium text-xs">
      Published on
    </span>
    <span className="font-custom text-gray-600 text-xs ml-1">
      {data.date}
    </span>
  </div>
</div>

         </Link>
    </div>
  );
};

export default SuppleantArticle;
