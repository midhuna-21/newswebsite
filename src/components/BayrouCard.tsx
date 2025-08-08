import Image from 'next/image';
import React from 'react';
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

const BayrouCard: React.FC<Props> = ({ data }) => {
  return (
<div className="md:w-[330px] w-full p-12 border-2 border-gray-300 bg-gray-50 h-[500px]">
   <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
           <div className="relative w-full h-[300px]">

          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
      </div>
      <p className="mt-4 text-center text-red-600  hover:underline font-bold leading-snug text-lg">
        {data?.title}
      </p>
      </Link>
    </div>
  );
};

export default BayrouCard;
