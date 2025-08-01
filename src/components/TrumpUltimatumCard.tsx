import React from 'react';
import Image from 'next/image';

export default function TrumpUltimatumCard() {
  return (
    <div className="max-w-sm mx-auto p-4 border border-gray-300 bg-white text-center">
      {/* Headline */}
      <h2 className="text-sm font-medium leading-snug text-black mb-4 uppercase">
        TRUMP LANCE UN ULTIMATUM DE DOUZE<br />
        JOURS À LA RUSSIE POUR CESSER LA GUERRE<br />
        EN UKRAINE
      </h2>

      {/* Cartoon */}
      <div className="w-full">
        {/* <Image
          src={cartoon}
          alt="Trump cartoon Ukraine ultimatum"
          className="w-full h-auto"
          placeholder="blur"
        /> */}
      </div>
    </div>
  );
}
