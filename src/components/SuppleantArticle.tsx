// components/SuppleantArticle.tsx
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
interface Props {
  data: NewsData;
}

const SuppleantArticle: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-md px-4 py-4 mx-auto">
      {/* Title with bullet */}
      <h3 className="flex items-start text-[17px] font-bold mb-2">
        <span className="text-red-600 text-lg leading-none mr-2 mt-[6px]">•</span>
        <span className="hover:underline">{data.title}</span>
      </h3>

      {/* Content */}
      <p className="text-[16px] text-black leading-relaxed">
        {data.shortdescription}   </p>

      {/* Ellipsis link */}
      <p className="mt-2 text-[16px]">
        <span className="text-black">[</span>
        <span className="text-red-600">…</span>
        <span className="text-black">]</span>
      </p>

    </div>
  );
};

export default SuppleantArticle;
