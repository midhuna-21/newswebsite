import Image from "next/image";
import React from "react";
import Link from "next/link";

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

const DossierEspionCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row md:gap-6 items-start">
      {/* Desktop + Tablet Layout */}
      <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3">
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
          <Image
            src={data.image}
            alt={data.title}
            height={300}
            width={300}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Mobile Layout*/}
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
        <div className="flex md:hidden flex-row w-full items-start gap-3 mb-3">

          <div className="flex flex-col flex-1">
            <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
              {data.category}
            </span>

              <p
          className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
          style={{ fontWeight: 900 }}
        >  {data.title}
            </p>
          </div>
          <Image
            src={data.image}
            alt={data.title}
            height={100}
            width={100}
            className="w-24 h-24 object-contain flex-shrink-0"
          />
        </div>
      </Link>

      {/* Content Section (Tablet & Desktop) */}
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

        <div className="flex-1">
          {/* Tablet + Desktop */}
          <div className="hidden md:block">
            <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
              {data.category}
            </span>
            <p
              className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
              style={{ fontWeight: 900 }}
            >   {data.title}
            </p>
          </div>
          <p className="text-xs sm:text-sm md:text-sm text-gray-500 mb-3">
            <span className="font-semibold text-gray-700">Published On</span>
            <span className="mx-1 text-red-500">•</span>
            <span>{data.date}</span>
          </p>
          <p
            className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
            style={{ fontWeight: 400 }}
          >  {data.shortdescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DossierEspionCard;
