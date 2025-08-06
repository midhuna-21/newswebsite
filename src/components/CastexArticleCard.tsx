// components/CastexArticleCard.tsx
import React from 'react';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
}
interface Props{
  data:NewsData;
}

const CastexArticleCard:React.FC<Props> = ({data}) => {
  return (
    <div className="max-w-md  mx-auto">
      {/* Meta */}
      <div className="text-sm mb-2">
        <span className="text-red-600 font-semibold">{data.category}</span>
        {/* <span className="text-black"> • SNCF</span> */}
      </div>

      {/* Title */}
       <p className="text-xl lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
          {data.title}
        </p>

      {/* Description */}
       <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>

    </div>
  );
};

export default CastexArticleCard;
