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
              <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
                {data.category}
              </span>
            </div>

            {/* Mobile/Tablet: Image on right, text on left */}
            <div className="md:hidden mt-2">
              <div className="flex gap-2 items-start">
                <div className="flex-1">
                  <p
                    className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
                    style={{ fontWeight: 900 }}
                  >  {data.title}
                  </p>
                  <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                  >   {data.shortdescription}
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

            {/* Desktop: Title and short description */}

            <div className="hidden md:block">
              <p
                className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
                style={{ fontWeight: 900 }}
              >  {data.title}
              </p>
              <p
                className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                style={{ fontWeight: 400 }}
              >    {data.shortdescription}
              </p>
            </div>
          </div>

          {/* Desktop */}
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

      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

        <p className="w-full text-base sm:text-lg md:text-lg lg:text-xl text-black font-medium border-t border-gray-300 pt-2 sm:pt-3 line-clamp-3 font-custom" style={{ fontWeight: 900 }}>
          {data.description}
        </p>
      </Link>
    </div>
  );
};

export default PrisesDeBecCard;
