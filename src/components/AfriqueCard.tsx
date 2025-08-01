// components/AfriqueCard.tsx

import Image from "next/image";
import React from "react";
// import AfriqueImage from "../public/e1b89815-7dbc-46ab-a37f-0ac78aac9450.png";

const AfriqueCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-md shadow-sm flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">Afrique</p>
        <h2 className="text-xl font-bold text-gray-800 underline leading-snug mb-2">
          Le renseignement français ensablé au Sahel
        </h2>
        <p className="text-sm text-gray-700">
          Mali, Niger, Burkina Faso, Tchad... en quelques années, la France,
          piégée par des rébellions que ses agents n’avaient pas vu venir, a
          été chassée de son pré carré africain.
        </p>
      </div>
      <div className="flex-1">
        {/* <Image
          src={AfriqueImage}
          alt="Caricature de la situation française au Sahel"
          className="w-full h-auto rounded"
          placeholder="blur"
        /> */}
      </div>
    </div>
  );
};

export default AfriqueCard;
