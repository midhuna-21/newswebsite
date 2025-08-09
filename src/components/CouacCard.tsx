// components/CouacCard.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}
interface Props {
  data: NewsData;
}

const CouacCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full mx-auto bg-white">
      {/* Header */}
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="flex items-center gap-3 mb-2">
        <div>
          <p className="text-xs text-red-600 uppercase font-semibold">
            {data.category}
          </p>
        </div>
      </div>

      <hr className="my-2 border-black/30" />

      {/* Image with fixed height on desktop and responsive on mobile */}
      <div className="w-full relative my-4 h-[250px] md:h-[200px] sm:h-[300px]">
        <Image
          src={data?.image}
          alt={data?.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Title & Description with smaller text on tablets */}
      <div>
        <p className="text-lg md:text-sm lg:text-lg font-bold hover:underline text-gray-900 mb-2">
          {data.title}
        </p>
        <p className="text-sm md:text-xs text-black text-justify mb-2 md:mb-0">
          {data.shortdescription}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default CouacCard;
