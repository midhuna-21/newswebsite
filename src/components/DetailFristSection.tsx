'use client';

import Image from 'next/image';

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData;
}

const DetailFristSection: React.FC<Props> = ({ data }) => {
  // Split description by fullstop and space
  const paragraphs = data.description.split('. ').filter(p => p.trim() !== '');

  return (
    <div className="max-w-5xl mx-auto p-4 mt-[80px] relative">
      {/* Top row */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 text-sm font-medium">{data.category}</span>
        <span className="text-black text-sm">•</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 leading-snug">
        {data.title}
      </h1>

      {/* Meta */}
      <div className="text-sm text-gray-600 mb-4">
        <span>Published On {data.date}</span>
        <span className="mx-2 text-red-500">•</span>
      </div>

      {/* Highlighted intro */}
      <p className="text-base sm:text-lg font-semibold text-black mb-4">
        {data.shortdescription}
      </p>

      {/* Content with image to the right */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Text (first part of description) */}
        <div className="flex-1 space-y-4 text-base text-black leading-relaxed">
          {paragraphs.slice(0, 2).map((para, idx) => (
            <p key={idx}>{para}.</p>
          ))}
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Remaining Paragraphs Below the Image */}
      <div className="space-y-4 text-base text-black leading-relaxed mb-6">
        {paragraphs.slice(2).map((para, idx) => (
          <p key={idx}>{para}.</p>
        ))}
      </div>

      {/* Floating Box (visible on lg screens) */}
      <div className="absolute top-4 right-4 bg-gray-100 text-sm text-gray-700 p-4 rounded-md shadow-sm hidden lg:block">
        Article à paraître dans le N° 5465 ce soir dès 21h.
      </div>
    </div>
  );
};

export default DetailFristSection;
