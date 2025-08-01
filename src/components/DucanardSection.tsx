// components/DossierSection.tsx
import React from "react";
import DossierEspionCard from "./DossierEspionCard";
import DossierReadingList from "./DossierReadingList";

const DucanardSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      {/* Thick red line */}
      <div className="h-2 bg-red-600 mb-8 w-full" />

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-6 items-start max-w-7xl mx-auto">
        {/* Left: Main article */}
        <div className="flex-1">
          <DossierEspionCard />
        </div>

        {/* Right: Reading list */}
        <div className="w-full md:w-[320px]">
          <DossierReadingList />
        </div>
      </div>
    </section>
  );
};

export default DucanardSection;
