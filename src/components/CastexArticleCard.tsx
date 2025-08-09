import Link from 'next/link';
import React from 'react';

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
      {/* Meta */}
                    <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="text-xs sm:text-sm mb-2">
        <span className="text-red-600">{data.category}</span>
        <span className="text-red-600"> • </span>
      </div>

      {/* Title */}
      <p className="text-sm sm:text-base md:text-base lg:text-xl font-bold hover:underline leading-snug text-gray-900 mb-2">
        {data.title}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-sm lg:text-base text-black text-left md:text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>
      </Link>
    </div>
  );
};

export default CastexArticleCard;
