// components/HotNewsCard.tsx
import Image from 'next/image';
import React from 'react';

const ArticleRightCard   = () => {
  return (
    <div className="max-w-sm w-full bg-white border border-black rounded-[30px] px-6 py-6 mx-auto flex flex-col justify-between relative shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-black text-2xl font-extrabold">CHAUD</h2>
        <p className="uppercase text-sm text-gray-600 tracking-wider mb-2">Devant !</p>
        <div className="border-b border-black w-full mb-4"></div>
      </div>

      {/* Article List */}
      <div className="space-y-4 text-[16px]">
        <p className="border-b border-gray-300 pb-2 leading-snug">
          La Corée du Sud les doigts dans la prise EDF ?
        </p>
        <p className="border-b border-gray-300 pb-2 leading-snug">
          Donald Trump a Jeffrey dans le dos et chaud aux fesses
        </p>
        <p className="leading-snug">
          Face à la Commission européenne, Telegram joue les dégonflés
        </p>
      </div>

      {/* Duck Image */}
      <div className="mt-6 flex justify-center">
        {/* <Image
          src={duck}
          alt="Canard avec bonnet rouge"
          className="w-24 h-auto"
        /> */}
      </div>
    </div>
  );
};

export default ArticleRightCard;
