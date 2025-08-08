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
    <div className="w-full mx-auto p-4 border-2 border-gray-100 bg-white">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          {/* Category */}
          <div className="flex items-start gap-2 mb-1 border-b pb-3">
            <p className="text-xs text-red-600 uppercase font-medium">
              {data.category}
            </p>
          </div>

          {/* Mobile/Tablet: Title and Description with small image on right */}
          <div className="md:hidden mt-3">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <p className="text-lg sm:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
                  {data.title}
                </p>
                <p className="text-xs sm:text-sm text-black text-justify mb-2 line-clamp-3">
                  {data.shortdescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={data?.image}
                  alt={data?.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Title and Description without image */}
          <div className="hidden md:block">
            <p className="text-lg sm:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer mt-3">
              {data.title}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-3 line-clamp-8">
              {data.shortdescription}
            </p>
          </div>
        </div>

        {/* Desktop: Large image on the right */}
        <div className="hidden md:flex w-full md:w-48 justify-center md:justify-end">
          <Image
            src={data?.image}
            alt={data?.title}
            width={192}
            height={192}
            className="w-auto max-h-[300px] object-contain"
          />
        </div>
      </div>

      <p className="w-full text-sm text-black font-semibold border-t border-gray-300 pt-3 line-clamp-5">
        {data.description}
      </p>
    </div>
  );
};

export default PrisesDeBecCard;