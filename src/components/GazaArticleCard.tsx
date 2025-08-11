import Image from 'next/image';
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

const GazaArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-full">
      <Link
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        title={data.slug}
      >
        <div className="relative w-full h-[400px] sm:h-[350px] md:h-[200px] lg:h-[320px] xl:h-[375px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          25vw"
          />
        </div>
<div className="flex mb-1 ">
  {/* Category Section */}
  <div className="flex items-center">
    <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
      {data.category}
    </span>
    <span className="ml-2 text-red-600">•</span>
  </div>
  
</div>
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
        <p
          className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-1 font-custom"
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


export default GazaArticleCard;
