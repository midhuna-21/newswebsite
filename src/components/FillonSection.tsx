// components/FillonSection.tsx
import React from "react";
import Headline from "./Headline";
import FillonCard from "./FillonCard";

export default function FillonSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      {/* Headline */}
      <Headline />

      {/* Grid of FillonCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <FillonCard />
        <FillonCard />
        <FillonCard />
        <FillonCard />
      </div>
    </section>
  );
}
