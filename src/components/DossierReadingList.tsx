import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

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
  data: NewsData[];
}

const DossierReadingList: React.FC<Props> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
        {data[0].category}
      </span>

      <ul className="text-xs sm:text-sm md:text-sm lg:text-base text-black border-t border-gray-200 divide-y divide-gray-200">
        {data.map((item, index) => (
          <li
            key={index}
            className="py-2 transition-colors duration-200"
          >
            <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom' title={`${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DossierReadingList;
