// components/GazaArticleCard.tsx
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
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Link href={`/${data.category}/${data.slug}`}>
        <div className="mb-4">
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover"
          />
        </div>
      </Link>

      <div className="text-sm mb-2">
        <span className="text-red-600 font-semibold">{data.category}</span>
      </div>

      <p className="text-xl lg:text-2xl font-bold hover:underline text-gray-900 mb-2">
        {data.title}
      </p>

      <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>

    </div>
  );
};

export default GazaArticleCard;
