// components/PrisesAndCouacSection.tsx
import React from "react";
import PrisesDeBecCard from "./PrisesDeBecCard";
import CouacCard from "./CouacCard";
import CouacWithoutImgaeCard from "./CouacWithoutImgaeCard";

export default function PrisesAndCouacSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto items-start">
        {/* Left: Prises de bec (6 columns) */}
        <div className="md:col-span-6">
          <PrisesDeBecCard />
        </div>

        {/* Right: 2 Couac Cards side-by-side (3 columns each) */}
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CouacCard />
          <CouacCard />
        </div>
      </div>
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2">
          <CouacCard />
        </div>
      </div>

         <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacCard />
        </div>
        <div className="w-full md:w-1/2">
          <CouacCard />
        </div>
      </div>

      
         <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard />
        </div>
        <div className="w-full md:w-1/2 ">
          <CouacWithoutImgaeCard />
        </div>
        <div className="w-full md:w-1/2">
          <CouacWithoutImgaeCard />
        </div>
      </div>
    </section>
  );
}
