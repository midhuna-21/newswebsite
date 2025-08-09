import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const CategoryCardWithImage: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto m-3 border-t border-b border-gray-200 py-4">
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      {/* ✅ Mobile Layout (md and below): image floated right */}
      <div className="md:hidden">
        {/* Category */}
        <div className="flex items-center mb-1">
        <span className="text-red-600 sm:text-sm uppercase tracking-wide" style={{fontWeight:500, fontSize:'20px',  fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",}}>
          {data.category}
        </span>
          <span className="ml-2 text-red-600">•</span>
        </div>

        {/* Image floated right */}
        <div className="float-right w-28 sm:w-36 h-20 sm:h-24 ml-3 mb-2 relative">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title to the left of image */}
        <p className="text-lg sm:text-xl font-bold leading-tight text-gray-900 hover:underline cursor-pointer">
          {data.title}
        </p>

        {/* Description wraps below image */}
        <p className="text-xs sm:text-sm text-black text-justify mt-2">
          {data.shortdescription}
        </p>

        {/* Date */}
        <p className="text-xs text-gray-500 mt-1 clear-both">
          Published On {data.date}
        </p>
      </div>
      </Link>

        {/* ✅ Desktop Layout (md and above) */}
<Link
  href={`/${data.category}/${data.slug}`}
  className="text-decoration-none"
  title={`${data.slug}`}
>
  <div className="hidden md:flex gap-4 items-center">
    {/* Fixed size image, centered vertically */}
    <div className="flex-shrink-0 flex items-center justify-center w-[200px] h-[200px]">
      <Image
        src={data.image}
        alt={data.title}
        width={200}
        height={200}
        className="object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="flex flex-col space-y-2">
      {/* Category */}
      <div className="flex items-center space-x-2">
   <span className="text-red-600 sm:text-sm uppercase tracking-wide" style={{fontWeight:500, fontSize:'20px',  fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",}}>
          {data.category}
        </span>
        <span className="text-black text-sm">•</span>
      </div>

      {/* Title */}
      <p className="text-xl lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-1">
        {data.title}
      </p>

      {/* Description */}
      <p className="text-sm md:text-base text-black text-justify mb-1">
        {data.shortdescription}
      </p>

      {/* Date */}
      <p className="text-xs text-gray-500">Published On {data.date}</p>
    </div>
  </div>
</Link>

    </div>
  );
};

export default CategoryCardWithImage;
