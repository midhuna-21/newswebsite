// components/PrisesAndCouacSection.tsx
import React from "react";
import PrisesDeBecCard from "./PrisesDeBecCard";
import CouacCard from "./CouacCard";
import CouacWithoutImgaeCard from "./CouacWithoutImgaeCard";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}
interface Props {
  data: NewsData[];
}

const PrisesAndCouacSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-full bg-white mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto items-start">
        {/* Left: Prises de bec (6 columns) */}
        <div className="md:col-span-6">
          <PrisesDeBecCard data={data[0]} />
        </div>

        {/* Right: 2 Couac Cards side-by-side (3 columns each) */}
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CouacCard data={data[1]} />
          <CouacCard data={data[2]} />
        </div>
      </div>

      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CouacCard data={data[3]} />
        <CouacCard data={data[4]} />
        <CouacCard data={data[5]} />
        <CouacCard data={data[6]} />
      </div>

      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CouacCard data={data[7]} />
        <CouacCard data={data[8]} />
        <CouacCard data={data[9]} />
        <CouacCard data={data[10]} />
      </div>

      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CouacWithoutImgaeCard data={data[12]} />
        <CouacWithoutImgaeCard data={data[13]} />
        <CouacWithoutImgaeCard data={data[14]} />
        <CouacWithoutImgaeCard data={data[15]} />
      </div>
    </section>
  );
}


export default PrisesAndCouacSection;