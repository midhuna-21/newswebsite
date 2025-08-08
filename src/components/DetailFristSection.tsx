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
   const sentences = data.description
    .split('.')
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0)
    .map(sentence => sentence + '.');

  const grouped: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    const paragraph = sentences.slice(i, i + 3).join(' ').trim();
    if (paragraph.length > 0) {
      grouped.push(paragraph);
    }
  }

  return (
    <div className="max-w-6xl mx-auto mt-5 relative">
      {/* Top row */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 text-sm font-medium">{data.category}</span>
        <span className="text-red-600 text-sm">•</span>
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

      {/* Content with floated image */}
      <div className="text-base text-black leading-relaxed space-y-4 mb-6">
        {/* Floated Image */}
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={400}
          className="float-right ml-6 mb-4 w-[500px] h-[400px] object-cover"
        />

        {/* Description as up to 10 paragraphs */}
         {grouped.map((paragraph, index) => (
        <div
          key={index} className='text-justify'
         
        >
          {paragraph}
        </div>
      ))}
      </div>
    </div>
  );
};

export default DetailFristSection;
