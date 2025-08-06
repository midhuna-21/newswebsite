// components/DossierEspionCard.tsx

import Image from "next/image";
import React from "react";
// import DossierImage from "../public/ac713be7-7dbf-44d0-848b-cc211b85c04a.png";

interface NewsData {
  slug:string;
  title:string;
  category:string;
  shortdescription:string;
  description:string;
  image:string;
  date:string;
}
interface Props {
  data:NewsData;
}

const DossierEspionCard:React.FC<Props>=({data}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0 w-full md:w-1/3">
      <Image
          src={data.image}
          alt={data.title}
          height={400}
          width={400}
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-extrabold text-red-600 uppercase mb-2">
          {data.category}
        </h3>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
       {data.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4 border-b pb-1">
          <span className="font-semibold text-gray-700">Published On</span>
          <span className="mx-1 text-red-500">•</span>
          <span>{data.date}</span>
        </p>
        <p className="text-base text-gray-800 leading-relaxed">
         {data.shortdescription}
        </p>
      </div>
    </div>
  );
};

export default DossierEspionCard;
