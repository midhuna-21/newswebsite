// components/CollectorsSection.tsx
import React from 'react';
import Headline from './Headline';
import BayrouCard from './BayrouCard';

const CollectorsSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      <Headline />
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
  <BayrouCard />
  <BayrouCard />
  <BayrouCard />
</div>

    </section>
  );
};

export default CollectorsSection;
