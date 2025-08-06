// components/AfriqueCard.tsx

import Image from "next/image";
import React from "react";
// import AfriqueImage from "../public/e1b89815-7dbc-46ab-a37f-0ac78aac9450.png";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
}
interface Props {
  data: NewsData;
}
const AfriqueCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-md shadow-sm flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{data.category}</p>
        <h2 className="text-xl font-bold text-gray-800 underline leading-snug mb-2">
          {data.title}
        </h2>
        <p className="text-sm text-gray-700">
          {data.shortdescription}
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={data?.image}
          alt={data?.title}
          height={400}
          width={400}
          className="w-full object-contain"
        />

      </div>
    </div>
  );
};

export default AfriqueCard;
