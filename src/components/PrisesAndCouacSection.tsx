// components/PrisesAndCouacSection.tsx
import React from "react";
import PrisesDeBecCard from "./PrisesDeBecCard";
import CouacCard from "./CouacCard";
import CouacWithoutImgaeCard from "./CouacWithoutImgaeCard";

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

const PrisesAndCouacSection:React.FC<Props>=({data}) => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto items-start">
        {/* Left: Prises de bec (6 columns) */}
        <div className="md:col-span-6">
          <PrisesDeBecCard data={data[0]}/>
        </div>

        {/* Right: 2 Couac Cards side-by-side (3 columns each) */}
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CouacCard data={data[1]}/>
          <CouacCard data={data[2]}/>
        </div>
      </div>
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[3]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[4]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[5]}/>
        </div>
        <div className="w-full md:w-1/2">
          <CouacCard data={data[6]}/>
        </div>
      </div>

         <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[8]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[9]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard data={data[10]}/>
        </div>
        <div className="w-full md:w-1/2">
          <CouacCard data={data[11]}/>
        </div>
      </div>

      
         <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard data={data[12]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard data={data[13]}/>
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard data={data[14]}/>
        </div>
        <div className="w-full md:w-1/2">
          <CouacWithoutImgaeCard data={data[15]}/>
        </div>
      </div>
    </section>
  );
}


export default PrisesAndCouacSection;