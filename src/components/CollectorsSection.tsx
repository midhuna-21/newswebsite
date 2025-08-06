// components/CollectorsSection.tsx
import React from 'react';
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
  return (
    <section className="w-full bg-white px-4 md:px-8 py-3">
      <Headline />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[180px] mt-5">
        {/* <p>{data[0].title}</p> */}

        <BayrouCard data={data[0]} />
        <BayrouCard data={data[1]} />
        <BayrouCard data={data[2]} />
      </div>

    </section>
  );
};

export default CollectorsSection;
