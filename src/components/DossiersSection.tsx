"use client";
import React, { useRef, useState, useEffect } from 'react';
import Headline from './Headline';
import BayrouCard from './BayrouCard';

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

const DossiersSection: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    const updatePages = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPagesCount(data.length); // 1 per page
      } else if (width < 1024) {
        setPagesCount(Math.ceil(data.length / 2)); // 2 per page
      } else {
        setPagesCount(Math.ceil(data.length / 3)); // 3 per page
      }
    };

    updatePages();
    window.addEventListener('resize', updatePages);

    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updatePages);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [data.length]);

  return (
    <section className="w-full bg-white mt-10">
      <Headline />

      {/* Scroll container with spacing */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto scroll-smooth justify-center gap-6 sm:gap-4 mt-5 px-4 py-2 mb-4"
  style={{ scrollSnapType: 'x mandatory' }}
>

        {data.map((item, index) => (
        <div
  key={index}
  className="flex-shrink-0 w-full sm:w-auto"
  style={{ scrollSnapAlign: 'start' }}
>
            <BayrouCard data={item} />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      {pagesCount > 1 && (
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: pagesCount }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-red-500' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default DossiersSection;
