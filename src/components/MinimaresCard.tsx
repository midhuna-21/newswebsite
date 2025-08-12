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

const MinimaresCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto px-4 pt-8 pb-6 border border-black relative">
      <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
        <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-xl lg:text-4xl font-black hover:underline text-gray-900 mb-2 font-custom tracking-wide" style={{ fontWeight: 900 }}>
          {data.category}
        </h2>
        <p
          className="mt-5 text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
          style={{ fontWeight: 400 }}
        > {data.shortdescription}
        </p>

        <div className="mt-2">
           {/* Date Section */}
              <div className="flex items-center">
              
                <span className="font-custom text-red-600 font-medium text-xs">
                  Published on
                </span>
                <span className="font-custom text-gray-600 text-xs">
                  {data.date}
                </span>
              </div>
        </div>
      </Link>
    </div>
  );
};

export default MinimaresCard;
