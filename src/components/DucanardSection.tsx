// components/DossierSection.tsx
import React from "react";
import DossierEspionCard from "./DossierEspionCard";
import DossierReadingList from "./DossierReadingList";

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
const DucanardSection:React.FC<Props> = ({data}) => {
  return (
    <section className=" bg-white px-4 md:px-8 py-5 border-t-2  border-red-600">
    
      <div className="max-w-5xl flex flex-col md:flex-row gap-6 items-start mx-auto mt-5">
        {/* Left */}
        <div className="flex-1">
          <DossierEspionCard data={data[4]}/>
        </div>

        {/* Right */}
        <div className="w-full md:w-[320px]">
          <DossierReadingList data={[data[1],data[2],data[3],data[0],data[5]]}/>
        </div>
      </div>
    </section>
  );
};

export default DucanardSection;
