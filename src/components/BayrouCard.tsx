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
        <p className="mt-4 text-center text-red-600  hover:underline leading-snug text-lg lg:text-xl font-custom"
            style={{ fontWeight: 900 }}>
          {data?.title}
        </p>
        <div className="mt-2">
            {/* Date Section */}
                <div className="flex items-center justify-center gap-1">
                
                  <span className="font-custom text-gray-600 font-medium text-xs">
                    Published on
                  </span>
                  <span className="font-custom text-gray-600 text-xs">
                    {data.date}
                  </span>
                </div>
          </div>
        </Link>
      </div>
    );
  };

  export default BayrouCard;
