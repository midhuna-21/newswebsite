"use client";

import React, { useRef, useState, useEffect } from 'react';
import Headline from './Headline';
import TrumpUltimatumCard from './TrumpUltimatumCard';

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

const TrumpUltimatumSection: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    const updatePagesCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPagesCount(data.length); // 1 per page
      } else if (width < 1024) {
        setPagesCount(Math.ceil(data.length / 2)); // 2 per page
      } else {
        setPagesCount(0); // no scroll or dots on large screens
      }
    };

    updatePagesCount();
    window.addEventListener("resize", updatePagesCount);

    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updatePagesCount);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [data.length]);

  return (
    <section className="w-full bg-white mt-24">
      <Headline />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-6 mt-5 px-4 py-2 mb-4 lg:hidden"
      >

        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4"
          >
            <TrumpUltimatumCard data={item} />
          </div>
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-6 mt-5 px-4">
        {data.slice(0, 4).map((item, index) => (
          <TrumpUltimatumCard key={index} data={item} />
        ))}
      </div>

      {pagesCount > 0 && (
        <div className="flex justify-center mt-4 space-x-2 lg:hidden">
          {Array.from({ length: pagesCount }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-red-500" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrumpUltimatumSection;
