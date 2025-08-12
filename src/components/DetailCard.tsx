import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

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

const DetailCard: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: '350px' }}
    >
      <Link
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        title={data.slug}
      >
        <div className="mb-2 relative w-full h-56 overflow-hidden bg-gray-100">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 350px) 100vw, 350px"
            className="object-cover"
          />
        </div>
        <div className="text-sm lg:text-lg  text-red-600 hover:underline font-custom" style={{fontWeight:900}}>
          {data.title}
        </div>  
        <h2 className="text-base sm:text-sm md:text-sm lg:text-lg text-black mt-1 font-medium line-clamp-2 font-custom">
          {data.shortdescription}
        </h2>
      </Link>
       <div className="flex items-center space-x-1">
                <span className="font-custom text-red-600 font-medium text-xs">
                  Published on
                </span>
                <span className="font-custom text-gray-600 text-xs">
                  {data.date}
                </span>
              </div>
    </div>
  );
};

export default DetailCard;