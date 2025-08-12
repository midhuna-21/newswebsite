import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const SignatairesArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto border-2 border-gray-200 bg-white">
      <div className="bg-white p-3 sm:p-4">
        <div className="flex items-center">
          <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
            {data.category}
          </span>
          <span className="ml-2 text-red-600">•</span>
        </div>
        <div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mb-2">
          <Link
            href={`/${data.category}/${data.slug}`}
            className="text-decoration-none"
            title={data.slug}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <p
                  className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-1 font-custom"
                  style={{ fontWeight: 900 }}
                >
                  {data.title}
                </p>
                <div className="flex items-center space-x-1">
                  <span className="font-custom text-red-600 font-medium text-xs">
                    Published on
                  </span>
                  <span className="font-custom text-gray-600 text-xs">
                    {data.date}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 w-24 sm:w-28 relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={112}
                  height={84}
                  className="w-full h-20 sm:h-24 object-cover"
                />
              </div>
            </div>
          </Link>
        </div>


        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
            <div className="float-right w-[200px] lg:w-[240px] h-[140px] lg:h-[168px] ml-4 mb-2">
              <Image
                src={data.image}
                alt={data.title}
                width={240}
                height={168}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
              style={{ fontWeight: 900 }}
            >
              {data.title}
            </p>
            <div className="flex items-center space-x-1">
              <span className="font-custom text-red-600 font-medium text-xs">
                Published on
              </span>
              <span className="font-custom text-gray-600 text-xs">
                {data.date}
              </span>
            </div>
          </Link>
        </div>
        <p
          className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
          style={{ fontWeight: 400 }}
        >
          {data.shortdescription}
        </p>
        <div className="hidden md:block clear-both"></div>
      </div>
    </div>
  );
};

export default SignatairesArticleCard;
