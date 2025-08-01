// components/GazaArticleCard.tsx
import Image from 'next/image';
import React from 'react';

const GazaArticleCard = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Cartoon Image */}
      <div className="mb-4">
        {/* <Image
          src={cartoon}
          alt="Cartoon Gaza"
          className="w-full h-auto"
        /> */}
      </div>

      {/* Meta */}
      <div className="text-sm mb-2">
        <span className="text-red-600 font-semibold">International</span>
        <span className="text-black"> • Israël-Palestine</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold underline mb-2">
        Clap de faim à Gaza ?
      </h2>

      {/* Paragraph */}
      <p className="text-[16px] leading-relaxed text-black">
        Sous la pression grandissante — mais encore trop timide — de la communauté internationale,
        le Premier ministre israélien, Benyamin Netanyahou, a consenti à desserrer un peu l'étau
        d'inhumanité qui enserre la bande de Gaza. Insuffisant pour empêcher les Palestiniens de
        mourir encore de faim en tentant de survivre.
      </p>
    </div>
  );
};

export default GazaArticleCard;
