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
      <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
        <div className="md:hidden">
          <div className="flex items-center mb-1">
            <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
              {data.category}
            </span>
            <span className="ml-2 text-red-600">•</span>
          </div>

          <div className="float-right w-[120px] h-[90px] ml-3 mb-2 relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <p
            className="text-xl lg:text-3xl font-black hover:underline text-gray-900 mb-2 font-custom"
            style={{ fontWeight: 900 }}
          >   {data.title}
          </p>

          <p
            className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
            style={{ fontWeight: 400 }}
          >  {data.shortdescription}
          </p>

          <p className="text-xs text-gray-500 mt-1 clear-both">
            Published On {data.date}
          </p>
        </div>
      </Link>

      {/* ✅ Desktop Layout */}
      <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex-shrink-0 w-[200px] h-[200px] relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">{data.category}</span>
              <span className="text-red-600 text-sm">•</span>
            </div>


            <p
              className="text-xl lg:text-3xl font-black hover:underline text-gray-900 mb-2 font-custom"
              style={{ fontWeight: 900 }}
            >   {data.title}
            </p>

            <p
              className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
              style={{ fontWeight: 400 }}
            >  {data.shortdescription}
            </p>

            <p className="text-xs text-gray-500">Published On {data.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCardWithImage;
