import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface NewsData {
    slug:string;
    title:string;
    category:string;
    shortdescription:string;
    description:string;
    image:string;
    date:string;
}

interface Props {
    data:NewsData;
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

        {/* Category */}
        <div className="text-sm text-red-600 hover:underline font-semibold">
          {data.title}
        </div>

        {/* Title */}
        <h2 className="text-sm text-black mt-1 font-medium line-clamp-2">
          {data.shortdescription}
        </h2>
      </Link>
    </div>
  );
};

export default DetailCard;