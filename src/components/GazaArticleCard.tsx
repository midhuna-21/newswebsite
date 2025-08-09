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
      <Link
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        title={data.slug}
      >
        {/* Image */}
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


        {/* Category */}
        <div className="text-xs sm:text-sm mb-2">
          <span className="text-red-600">{data.category}</span>
        </div>

        {/* Title */}
        <p
          className="
            text-sm sm:text-base md:text-sm lg:text-lg xl:text-2xl
            font-bold hover:underline text-gray-900 mb-2
          "
        >
          {data.title}
        </p>

        {/* Short Description */}
        <p
          className="
            text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base
            text-black text-left md:text-justify mb-2 md:mb-0
          "
        >
          {data.shortdescription}
        </p>
      </Link>
    </div>
  );
};


export default GazaArticleCard;
