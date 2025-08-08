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

const DossierEspionCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row md:gap-6 items-start">
      {/* Desktop + Tablet Layout: Image Left */}
      <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3">
        <Image
          src={data.image}
          alt={data.title}
          height={300}
          width={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile Layout: Content Left, Image Right */}
      <div className="flex md:hidden flex-row w-full items-start gap-3 mb-3">
        <div className="flex flex-col flex-1">
          <h3 className="text-xs sm:text-sm font-extrabold text-red-600 uppercase mb-1">
            {data.category}
          </h3>
          <h2 className="text-sm sm:text-base font-extrabold text-gray-900 mb-1">
            {data.title}
          </h2>
        </div>
        <Image
          src={data.image}
          alt={data.title}
          height={100}
          width={100}
          className="w-24 h-24 object-contain flex-shrink-0"
        />
      </div>

      {/* Content Section (Tablet & Desktop) */}
      <div className="flex-1">
        {/* Tablet + Desktop Title & Category */}
        <div className="hidden md:block">
          <h3 className="text-base lg:text-xl font-extrabold text-red-600 uppercase mb-2">
            {data.category}
          </h3>
          <h2 className="text-xl lg:text-3xl font-extrabold text-gray-900 mb-1">
            {data.title}
          </h2>
        </div>

        {/* Published date */}
        <p className="text-xs sm:text-sm md:text-sm text-gray-500 mb-3">
          <span className="font-semibold text-gray-700">Published On</span>
          <span className="mx-1 text-red-500">•</span>
          <span>{data.date}</span>
        </p>

        {/* Short description */}
        <p className="text-sm sm:text-sm md:text-sm lg:text-base text-gray-800 leading-relaxed text-left md:text-justify">
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default DossierEspionCard;
