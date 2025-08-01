// components/OreillesCard.tsx
import Image from 'next/image';
import React from 'react';
// import ducks from '../public/ducks.png'; // Replace with your image path

const ArticleLeftCard = () => {
  return (
    <div className="max-w-sm w-full bg-white border border-black rounded-[30px] px-6 py-4 mx-auto flex flex-col justify-between relative shadow-sm">
      {/* Header */}
      <div>
        <h2 className="text-red-600 text-2xl font-extrabold">OREILLES</h2>
        <p className="uppercase text-sm text-gray-600 tracking-wider mb-2">De Canard !</p>
        <div className="border-b border-black w-12 mb-4"></div>
      </div>

      {/* Content */}
      <div className="text-lg mb-6">
        <p className="italic">La solution de Netanyahou</p>
        <p className="font-bold">Laisser Gaza…</p>
      </div>

      {/* Dots and Arrow */}
      <div className="flex items-center justify-center gap-6 mt-auto">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-600 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
        </div>
        <div className="text-pink-300 text-3xl rotate-180">&rsaquo;</div>
      </div>

      {/* Bottom Duck Image */}
      <div className="mt-6 flex justify-center">
        {/* <Image
          src={ducks}
          alt="Deux canards discutent"
          className="w-32 h-auto"
        /> */}
      </div>
    </div>
  );
};

export default ArticleLeftCard;
