// components/LaMareAuxCanardsSection.tsx
import React from 'react';
import Headline from './Headline';
import SuppleantArticle from './SuppleantArticle';
import MinimaresCard from './MinimaresCard';

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

const SecondIndexSection:React.FC<Props> = ({data}) => {
  return (
    <section className="w-full bg-white mt-10">
      <Headline />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto p-4">
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          <SuppleantArticle data={data[0]} />
          <SuppleantArticle data={data[1]}/>
          <SuppleantArticle data={data[2]}/>
          <SuppleantArticle data={data[3]}/>
          <SuppleantArticle data={data[4]}/>
          <SuppleantArticle data={data[5]}/>
        </div>

        <div className="md:col-span-3">
          <MinimaresCard data={data[5]}/>
        </div>
      </div>
    </section>
  );
};

export default SecondIndexSection;
