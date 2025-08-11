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
  data: NewsData[]; // ✅ Accept an array of NewsData
}

const DetailTitleList: React.FC<Props> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div>
      <span className="text-black text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
        {data[0].category}
      </span>
      <div className="w-full max-w-md mx-auto border-2 border-red-600 p-5">

        <ul className="text-sm text-black divide-y divide-gray-200">
          {data.map((item, index) => (
            <li
              key={index}
              className="py-2 hover:underline transition-colors duration-200"
            >
              <Link href={`/${item.category}/${item.slug}`} title={`${item.slug}`}

                className="text-decoration-none hover:underline flex items-center justify-between text-base sm:text-sm md:text-sm lg:text-lg font-custom"
                style={{ fontWeight: 400 }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailTitleList;
