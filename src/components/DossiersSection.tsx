// components/CollectorsSection.tsx
import React from 'react';
import Headline from './Headline';
import BayrouCard from './BayrouCard';

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
const DossiersSection:React.FC<Props> = ({data}) => {
  return (
   <section className="w-full bg-white px-4 md:px-8 py-3">
  {/* Top headline */}
  <Headline />

  {/* Centered Card grid */}
  <div className="flex justify-center mt-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <BayrouCard data={data[0]} />
      <BayrouCard data={data[1]} />
      <BayrouCard data={data[2]} />
    </div>
  </div>
</section>

  );
};

export default DossiersSection;
