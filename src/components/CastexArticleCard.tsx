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

const CastexArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

         <div className="flex mb-1 space-x-4">
          {/* Category Section */}
          <div className="flex items-center">
            <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
              {data.category}
            </span>
            <span className="ml-2 text-red-600">•</span>
          </div>
          
          {/* Date Section */}
          <div className="flex items-center space-x-1">
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
        </div>
        <p
          className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
          style={{ fontWeight: 900 }}
        >
          {data.title}
        </p>
    <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                >
                    {data.shortdescription}
                </p>
      </Link>
    </div>
  );
};

export default CastexArticleCard;
