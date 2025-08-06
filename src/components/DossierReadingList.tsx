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

const DossierReadingList: React.FC<Props> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h3 className="text-base font-semibold text-black mb-3">
        {data[0].category} {/* Assumes all items are from the same category */}
      </h3>
      <ul className="text-sm text-black border-t border-gray-200 divide-y divide-gray-200">
        {data.map((item, index) => (
          <li
            key={index}
            className="py-2 hover:text-red-600 transition-colors duration-200"
          >
            {(item.title.includes("Les points") || item.title.includes("services français")) ? (
              <a href={`/article/${item.slug}`} className="underline flex items-center justify-between">
                {item.title}
                <FaChevronRight className="text-xs" />
              </a>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DossierReadingList;
