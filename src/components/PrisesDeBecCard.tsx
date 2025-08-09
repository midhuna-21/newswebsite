import Image from "next/image";
import Link from "next/link";
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
    <div className="w-full mx-auto p-3 sm:p-4 border-2 border-gray-100 bg-white">
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
        {/* Text Section */}
        <div className="flex-1">
          {/* Category */}
          <div className="flex items-start gap-2 mb-1 border-b pb-2">
            <p className="text-[10px] sm:text-xs text-red-600 uppercase font-medium">
              {data.category}
            </p>
          </div>

          {/* Mobile/Tablet: Image on right, text on left */}
          <div className="md:hidden mt-2">
            <div className="flex gap-2 items-start">
              <div className="flex-1">
                <p className="text-sm sm:text-base font-semibold leading-tight text-gray-900 hover:underline cursor-pointer">
                  {data.title}
                </p>
                <p className="text-[10px] sm:text-xs text-black text-justify mt-1 line-clamp-3">
                  {data.shortdescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Title and short description only (no image here) */}
       
            <div className="hidden md:block">
              <p className="text-base lg:text-lg font-semibold leading-snug text-gray-900 hover:underline cursor-pointer mt-2 mb-1">
                {data.title}
              </p>
              <p className="text-xs md:text-sm text-black text-justify line-clamp-6">
                {data.shortdescription}
              </p>
            </div>
        </div>

        {/* Desktop: Large image on right */}
        <div className="hidden md:flex w-full md:w-36 lg:w-44 justify-end">
            <Image
              src={data.image}
              alt={data.title}
              width={160}
              height={160}
              className="w-auto max-h-[200px] object-contain"
            />
          </div>
      </div>
      </Link>

      {/* Full Description */}
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <p className="w-full text-xs sm:text-sm text-black font-medium border-t border-gray-300 pt-2 sm:pt-3 line-clamp-5">
        {data.description}
      </p>
      </Link>
    </div>
  );
};

export default PrisesDeBecCard;
