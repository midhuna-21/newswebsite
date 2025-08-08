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
      {/* Category heading */}
      <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-black mb-3">
        {data[0].category}
      </h3>

      {/* Reading list */}
      <ul className="text-xs sm:text-sm md:text-sm lg:text-base text-black border-t border-gray-200 divide-y divide-gray-200">
        {data.map((item, index) => (
          <li
            key={index}
            className="py-2 hover:text-red-600 transition-colors duration-200"
          >
            {(item.title.includes("Les points") || item.title.includes("services français")) ? (
              <a
                href={`/article/${item.slug}`}
                className="underline flex items-center justify-between"
              >
                {item.title}
                <FaChevronRight className="text-xs flex-shrink-0 ml-2" />
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
