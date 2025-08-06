// components/FillonSection.tsx
import React from "react";
import Headline from "./Headline";
import FillonCard from "./FillonCard";

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

const FillonSection:React.FC<Props>=({data}) => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-8">
      {/* Headline */}
      <Headline />

      {/* Grid of FillonCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
        <FillonCard data={data[0]}/>
        <FillonCard data={data[1]}/>
        <FillonCard data={data[2]}/>
        <FillonCard data={data[3]}/>
      </div>
    </section>
  );
}

export default FillonSection