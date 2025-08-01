// components/SignatairesArticleCard.tsx
import React from 'react';

const SignatairesArticleCard = () => {
  return (
    <div className="max-w-4xl px-6 py-5 mx-auto border border-gray-200 bg-white">
      {/* Meta */}
      <div className="text-sm mb-2">
        <span className="text-red-600 font-semibold">Environnement</span>
        <span className="text-black"> • Pétition contre la loi Duplomb</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold underline mb-2">
        Deux millions de signataires, oui, bon, et alors ?
      </h2>

      {/* Description */}
      <p className="text-[16px] text-black leading-relaxed">
        Devant l&apos;opposition toujours plus forte des Français à cette loi pro-pesticides,
        la droite, les macronistes et le RN multiplient les interventions médiatiques pour dénoncer
        « l&apos;extrême gauche et les écologistes ». Et de passer les plats aux lobbies de la chimie
        et de l&apos;industrie agricole.
      </p>
    </div>
  );
};

export default SignatairesArticleCard;
