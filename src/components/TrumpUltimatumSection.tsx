// components/TrumpUltimatumSection.tsx
import React from 'react';
import Headline from './Headline';
import TrumpUltimatumCard from './TrumpUltimatumCard';

interface NewsData {
  slug:string;
  title:string;
  category:string;
  shortdescription:string;
  description:string;
  image:string;
  date:string;
}
interface Props {
  data:NewsData[];
}
const TrumpUltimatumSection:React.FC<Props>=({data}) => {
  return (
    <section className="w-full bg-white px-4 md:px-8 mt-24">
      {/* Headline */}
      <Headline />

      {/* 4 cards in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
        <TrumpUltimatumCard data={data[0]}/>
        <TrumpUltimatumCard data={data[1]}/>
        <TrumpUltimatumCard data={data[2]}/>
        <TrumpUltimatumCard data={data[3]}/>
      </div>
    </section>
  );
}


export default TrumpUltimatumSection;