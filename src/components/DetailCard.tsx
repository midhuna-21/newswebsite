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
      className="mx-auto text-center"
      style={{ maxWidth: '350px' }} // limit card width
    >
      <Link
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        title={data.slug}
      >
        {/* Image */}
        <div className="mb-2">
          <Image
            src={data.image}
            alt={data.title}
            height={200} // smaller height
            width={200}  // smaller width
            className="w-full object-contain"
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