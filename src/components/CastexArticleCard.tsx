// components/CastexArticleCard.tsx
import React from 'react';

const CastexArticleCard = () => {
  return (
    <div className="max-w-md px-4 py-6 mx-auto">
      {/* Meta */}
      <div className="text-sm mb-2">
        <span className="text-red-600 font-semibold">Société</span>
        <span className="text-black"> • SNCF</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold underline mb-2">
        Jean Castex sur le bon aiguillage
      </h2>

      {/* Description */}
      <p className="text-[16px] text-black leading-relaxed">
        L&apos;ancien Premier ministre est en passe de réaliser son rêve : diriger le réseau
        ferroviaire français. Avec l’espoir secret de changer de voie en 2027 pour prendre le train de l’Élysée…
      </p>
    </div>
  );
};

export default CastexArticleCard;
