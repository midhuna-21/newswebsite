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
const CategoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto m-3">
      {/* Badge */}
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 text-sm font-medium">{data.category}</span>
        <span className="text-black text-sm">•</span>
      </div>

      {/* Title */}
    <p className="text-xl lg:text-2xl font-bold hover:underline leading-snug text-gray-900 mb-2">
          {data.title}
        </p>

      <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>
</Link>
      {/* Date */}
      <p className="text-xs text-gray-500">Published On {data.date}</p>
      
    </div>
  )
}


export default CategoryCard;