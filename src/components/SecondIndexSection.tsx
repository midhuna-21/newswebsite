// components/LaMareAuxCanardsSection.tsx
import React from 'react';
import Headline from './Headline';
import SuppleantArticle from './SuppleantArticle';
import MinimaresCard from './MinimaresCard';

const SecondIndexSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      {/* Headline centered */}
      <Headline />

      {/* Grid layout: 12-column */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto">
        {/* Left: 6 articles in 2 rows of 3 - spans 9/12 */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SuppleantArticle />
          <SuppleantArticle />
          <SuppleantArticle />
          <SuppleantArticle />
          <SuppleantArticle />
          <SuppleantArticle />
        </div>

        {/* Right: MinimaresCard - spans 3/12 */}
        <div className="md:col-span-3">
          <MinimaresCard />
        </div>
      </div>
    </section>
  );
};

export default SecondIndexSection;
