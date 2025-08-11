import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

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

const ArticleFirst: React.FC<Props> = ({ data }) => {
    return (
        <div className="bg-white border-gray-200 mt-3">
             <div className="flex mb-1 space-x-4">
              {/* Category Section */}
              <div className="flex items-center">
                <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
                  {data.category}
                </span>
                <span className="ml-2 text-red-600">•</span>
              </div>
              
              {/* Date Section */}
              <div className="flex items-center space-x-1">
                <BiCalendar 
                  size={12} 
                  className="text-gray-500"
                />
                <span className="font-custom text-red-600 font-medium text-xs">
                  Published on
                </span>
                <span className="font-custom text-gray-600 text-xs">
                  {data.date}
                </span>
              </div>
            </div>
        
            {/* Mobile + Tablet Layout  */}
            <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
                <div className="md:hidden flex gap-3 sm:gap-4 mb-2">

                    <div className="flex-1 min-w-0 pr-2">
                        <p
                            className="text-2xl lg:text-4xl font-black hover:underline  text-gray-900 mb-2 font-custom"
                            style={{ fontWeight: 900 }}
                        >
                            {data.title}
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 relative">
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={128}
                            height={96}
                            className="w-full h-20 sm:h-24 md:h-28 object-cover"
                        />
                    </div>
                </div>
            </Link>

            {/* Desktop Layout  */}
            <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
                <div className="hidden md:block relative">
                    <div className="float-right w-[240px] lg:w-[280px] h-[168px] lg:h-[196px] ml-4 mb-2">
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={280}
                            height={196}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p
                        className="text-2xl lg:text-4xl font-black hover:underline  text-gray-900 mb-2 font-custom"
                        style={{ fontWeight: 900 }}
                    >
                        {data.title}
                    </p>

                </div>
                <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                >
                    {data.shortdescription}
                </p>
            </Link>
            <div className="hidden md:block clear-both"></div>
        </div>
    );
};

export default ArticleFirst;
