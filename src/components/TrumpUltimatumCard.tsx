import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const TrumpUltimatumCard: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="mx-auto p-3 border border-gray-300 bg-white text-center"
      style={{ height: '260px' }}
    >
      <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
        <div
          className="overflow-hidden mb-2"
          style={{
            height: '80px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <h2 className="text-base sm:text-sm md:text-sm lg:text-lg  leading-snug text-black uppercase line-clamp-5 font-custom ">
            {data?.title}
          </h2>
        </div>
        <div className="w-[160px] h-[120px] mx-auto relative">
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div className="mt-2">
        {/* Date Section */}
        <div className="flex items-center justify-center gap-1">
          <span className="font-custom text-red-600 font-medium text-xs">
            Published on
          </span>
          <span className="font-custom text-gray-600 text-xs">
            {data.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrumpUltimatumCard;
