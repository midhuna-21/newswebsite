// components/DossierEspionCard.tsx
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
      {/* Desktop Layout: Image Left, Content Right */}
      <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3">
        <Image
          src={data.image}
          alt={data.title}
          height={400}
          width={400}
          className="w-full object-contain"
        />
      </div>

      {/* Mobile Layout: Content Left, Image Right */}
      <div className="flex md:hidden flex-row w-full items-start gap-3">
        <div className="flex flex-col flex-1">
          <h3 className="text-sm font-extrabold text-red-600 uppercase mb-1">
            {data.category}
          </h3>
          <h2 className="text-base font-extrabold text-gray-900 mb-1">
            {data.title}
          </h2>
        </div>
        <Image
          src={data.image}
          alt={data.title}
          height={400}
          width={400}
          className="w-34 h-34 object-contain flex-shrink-0"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Desktop: Show title and category here */}
        <div className="hidden md:block">
          <h3 className="text-xl font-extrabold text-red-600 uppercase mb-2">
            {data.category}
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
            {data.title}
          </h2>
        </div>

        {/* Published date - shown on both mobile and desktop */}
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold text-gray-700">Published On</span>
          <span className="mx-1 text-red-500">•</span>
          <span>{data.date}</span>
        </p>

        {/* Description */}
        <p className="text-base text-gray-800 leading-relaxed">
          {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default DossierEspionCard;