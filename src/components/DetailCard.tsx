import Image from 'next/image'
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
const DetailCard:React.FC<Props>=({data}) => {
  return (
    <div className="max-w-xs mx-auto p-4 text-center">
      {/* Image */}
      <div className="mb-2">
      <Image
          src={data.image}
          alt={data.title}
          height={400}
          width={400}
          className="w-full object-contain"
        />
      </div>

      {/* Category */}
      <div className="text-sm text-red-600 font-semibold">Etats-Unis</div>

      {/* Title */}
      <h2 className="text-base text-black underline mt-1 font-medium">
        Trump en chantier à la Fed
      </h2>
    </div>
  )
}

export default DetailCard;