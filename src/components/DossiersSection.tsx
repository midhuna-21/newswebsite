// components/CollectorsSection.tsx
import React from 'react';
import Headline from './Headline';
import BayrouCard from './BayrouCard';

const DossiersSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      {/* Top headline */}
      <Headline />

      {/* Card grid: 3 in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
        <BayrouCard />
        <BayrouCard />
        <BayrouCard />
      </div>
    </section>
  );
};

export default DossiersSection;
