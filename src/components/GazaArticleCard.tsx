import Image from 'next/image';
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

const GazaArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-full">
                         <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

        <div className="mb-4">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={375}
            className="w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[375px] object-cover"
          />
        </div>

      {/* Category */}
      <div className="text-xs sm:text-sm mb-2">
        <span className="text-red-600 font-semibold">{data.category}</span>
      </div>

      {/* Title */}
      <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold hover:underline text-gray-900 mb-2">
        {data.title}
      </p>

      {/* Short Description */}
      <p className="text-xs sm:text-sm md:text-sm lg:text-base text-black text-left md:text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>
      </Link>
    </div>
  );
};

export default GazaArticleCard;
