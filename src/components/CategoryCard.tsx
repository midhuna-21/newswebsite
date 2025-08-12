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
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">{data.category}</span>
          <span className="text-red-600 text-sm">•</span>
        </div>
        <p
          className="text-xl lg:text-3xl font-black hover:underline text-gray-900 mb-2 font-custom"
          style={{ fontWeight: 900 }}
        >   {data.title}
        </p>
         <div className="flex items-center space-x-1">
                <span className="font-custom text-red-600 font-medium text-xs">
                  Published on
                </span>
                <span className="font-custom text-gray-600 text-xs">
                  {data.date}
                </span>
              </div>

        <p
          className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
          style={{ fontWeight: 400 }}
        >
          {data.shortdescription}
        </p>
      </Link>
     
    </div>
  )
}


export default CategoryCard;