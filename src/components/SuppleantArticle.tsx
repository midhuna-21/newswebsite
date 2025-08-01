// components/SuppleantArticle.tsx
import React from 'react';

const SuppleantArticle = () => {
  return (
    <div className="max-w-md px-4 py-4 mx-auto">
      {/* Title with bullet */}
      <h3 className="flex items-start text-[17px] font-bold mb-2">
        <span className="text-red-600 text-lg leading-none mr-2 mt-[6px]">•</span>
        <span className="underline">Le choix du suppléant</span>
      </h3>

      {/* Content */}
      <p className="text-[16px] text-black leading-relaxed">
        Bataille dans la bataille qui va se jouer entre Michel Barnier et Rachida Dati : celle du suppléant.
        La ministre de la Culture n’a pas arrangé son cas au sein de LR en laissant entendre qu’elle pourrait garder
        Antoine Lesieur, un proche de Gabriel Attal, qui était le suppléant de Jean Laussuqc, le député (Renaissance) invalidé.
      </p>

      {/* Ellipsis link */}
      <p className="text-red-600 mt-2 text-[16px]">[…]</p>
    </div>
  );
};

export default SuppleantArticle;
