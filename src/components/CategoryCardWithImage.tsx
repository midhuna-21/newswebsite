'use client'

import React from 'react'
import Image from 'next/image'
import cartoonImage from '/public/cartoon.png' // Replace with actual image path or URL

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
const CategoryCardWithImage:React.FC<Props> = ({data}) => {
  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row gap-4">
      {/* Left Image */}
      <div className="flex-shrink-0 w-full sm:w-1/3">
      <Image
          src={data?.image}
          alt={data?.title}
          height={400}
          width={400}
          className="w-full object-contain"
        />
        
      </div>

      {/* Right Content */}
      <div className="flex flex-col space-y-2">
        {/* Top Badge & Category */}
        <div className="flex items-center space-x-2">
          
          <span className="text-red-600 text-sm font-medium">{data.category}</span>
          <span className="text-black text-sm">•</span>
        </div>

        {/* Title */}
          <p className="text-xl lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
        {data.title}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>

        {/* Date */}
        <p className="text-xs text-gray-500">Published On {data.date}</p>
      </div>
    </div>
  )
}

export default CategoryCardWithImage;
