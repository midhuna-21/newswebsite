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

const MinimaresCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto px-4 pt-8 pb-6 border border-black relative">
      {/* Title badge on top center */}
      <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-2xl font-black font-serif tracking-wide">
        {data.category}
      </h2>

      {/* Text content */}
      <p className="text-base leading-relaxed font-medium text-black">
        {data.shortdescription}
      </p>

      {/* Red square dot */}
      <div className="mt-2">
        <span className="inline-block w-2 h-2 bg-red-600" />
      </div>
    </div>
  );
};

export default MinimaresCard;
