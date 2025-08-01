// components/FillonCard.tsx

import Image from "next/image";
import React from "react";
// import FillonImage from "../public/c57ab2ce-01ba-4ca0-834e-5c6136ffc0f1.png";
import { FaPlay } from "react-icons/fa";

const FillonCard = () => {
  return (
    <div className="w-full max-w-xs rounded-xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 p-2">
      <div className="rounded-md overflow-hidden">
        {/* <Image
          src={FillonImage}
          alt="Affaire Fillon : L'histoire sans fin"
          className="w-full h-auto"
          placeholder="blur"
        /> */}
      </div>
      <div className="flex items-center gap-2 mt-3 text-white text-sm font-semibold">
        <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
          <FaPlay className="text-xs" />
        </div>
        <span>AFFAIRE FILLON : L'HISTOIRE SANS FIN</span>
      </div>
    </div>
  );
};

export default FillonCard;
