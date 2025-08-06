import Image from "next/image";
import React from "react";

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

const PrisesDeBecCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 border rounded-md bg-white">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Text Block */}
        <div className="flex-1">
          {/* Top row: small image + category text */}
          <div className="flex items-start gap-2 mb-1">

            <p className="text-xs text-red-600 uppercase font-medium">
              {data.category}
            </p>
          </div>

          {/* hr below category */}
          <hr className="border-gray-300 mb-3" />

          {/* Title */}
          <p className="text-lg sm:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
            {data.title}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-3 line-clamp-8">
            {data.description}
          </p>

        </div>

        {/* Portrait Image on Right */}
        <div className="w-full md:w-48 flex justify-center md:justify-end">
          <Image
            src={data?.image}
            alt={data?.title}
            width={192}
            height={192}
            className="w-auto max-h-[300px] object-contain"
          />

        </div>
      </div>
      <p className="w-full text-sm text-black font-semibold border-t border-gray-300 pt-3">
        {data.shortdescription}
      </p>
    </div>
  );
};

export default PrisesDeBecCard;
