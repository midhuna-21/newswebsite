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
      <h3 className="text-base font-semibold text-black mb-3">
        {data[0].category} {/* Assumes all items are from the same category */}
      </h3>
      <div className="w-full max-w-md mx-auto border-2 border-red-600 p-5">

        <ul className="text-sm text-black divide-y divide-gray-200">
          {data.map((item, index) => (
            <li
              key={index}
              className="py-2 hover:underline transition-colors duration-200"
            >
        <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
              {(item.title.includes("Les points") || item.title.includes("services français")) ? (
                <a
                  href={`/article/${item.slug}`}
                  className="underline flex items-center justify-between"
                >
                  {item.title}
                  <FaChevronRight className="text-xs" />
                </a>
              ) : (
                item.title
              )}
          </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailTitleList;
