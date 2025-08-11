// components/CouacCard.tsx
import Image from 'next/image';
import React from 'react';
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

const CouacCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full mx-auto bg-white">
      {/* Header */}
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="flex items-center gap-3 mb-2">
        <div>
         <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
            {data.category}
          </span>
        </div>
      </div>

      <hr className="my-2 border-black/30" />

      {/* Image with fixed height on desktop and responsive on mobile */}
      <div className="w-full relative my-4 h-[250px] md:h-[200px] sm:h-[300px]">
        <Image
          src={data?.image}
          alt={data?.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Title & Description with smaller text on tablets */}
      <div> 
           <p
          className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
          style={{ fontWeight: 900 }}
        >  {data.title}
        </p>
           <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                >
                    {data.shortdescription}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default CouacCard;
