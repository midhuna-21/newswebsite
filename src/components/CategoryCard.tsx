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

        <p
          className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
          style={{ fontWeight: 400 }}
        >
          {data.shortdescription}
        </p>
      </Link>
      <p className="text-xs text-gray-500">Published On {data.date}</p>

    </div>
  )
}


export default CategoryCard;