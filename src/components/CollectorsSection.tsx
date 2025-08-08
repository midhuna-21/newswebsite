"use client";
import React, { useRef, useState, useEffect } from 'react';
import Headline from './Headline';
import BayrouCard from './BayrouCard';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
}

interface Props {
  data: NewsData[];
}

const CollectorsSection: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [isMobileScroll, setIsMobileScroll] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setPagesCount(data.length); // 1 per page
        setIsMobileScroll(true);
      } else if (width < 1024) {
        setPagesCount(Math.ceil(data.length / 2)); // 2 per page
        setIsMobileScroll(true);
      } else {
        setPagesCount(0); // No dots, no scroll
        setIsMobileScroll(false);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

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
      window.removeEventListener('resize', updateLayout);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [data.length]);

  return (
    <section className="w-full bg-white mt-10">
      <Headline />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-6 sm:gap-4 mt-5 px-4 py-2 mb-4"
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
      {isMobileScroll && pagesCount > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: pagesCount }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-red-500' : 'bg-gray-400'
                }`}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default CollectorsSection;
