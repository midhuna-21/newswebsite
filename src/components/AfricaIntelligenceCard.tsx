import React from 'react';
import Image from 'next/image';

export default function AfricaIntelligenceCard() {
  return (
    <div className="max-w-5xl mx-auto border border-gray-200 bg-white p-4 flex flex-col md:flex-row gap-4">
      {/* Left text section */}
      <div className="flex-1">
        <p className="text-sm text-gray-700 mb-1">Afrique</p>
        <h2 className="text-xl font-bold text-black underline mb-2">
          Le renseignement français ensablé au Sahel
        </h2>
        <p className="text-gray-800 text-base leading-relaxed">
          Mali, Niger, Burkina Faso, Tchad… en quelques années, la France, piégée par
          des rébellions que ses agents n’avaient pas vu venir, a été chassée de son pré
          carré africain.
        </p>
      </div>

      {/* Right image section */}
      <div className="flex-shrink-0 w-full md:w-[320px]">
        {/* <Image
          src={cartoonImage}
          alt="Caricature Sahel"
          className="w-full h-auto rounded-sm"
          placeholder="blur"
        /> */}
      </div>
    </div>
  );
}
