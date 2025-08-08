import React from 'react';
import Image from 'next/image';

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
    <div className="mx-auto p-3 border border-gray-300 bg-white text-center">
      {/* Headline with fixed height for up to 5 lines */}
      <div className="overflow-hidden flex items-start justify-center">
        <h2 className="text-sm font-medium leading-snug text-black uppercase">
          {data?.title}
        </h2>
      </div>

      {/* Fixed-size Image */}
      <div className="w-[160px] h-[190px] mx-auto relative">
        <Image
          src={data?.image}
          alt={data?.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default TrumpUltimatumCard;
