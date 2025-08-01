// components/PrisesDeBecCard.tsx

import Image from "next/image";
import React from "react";
// import PortraitImage from "../public/d6e6b0f8-1c54-4248-b8b3-c12782c2def0.png";

const PrisesDeBecCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 border rounded-md bg-white">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Text Block */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6">
              {/* Replace with actual icon if available */}
              {/* <Image
                src="/icon-placeholder.png"
                alt="icon"
                width={24}
                height={24}
              /> */}
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Prises de bec</p>
              <p className="text-xs text-red-600 uppercase font-medium">Le portrait</p>
            </div>
          </div>
          <hr className="border-gray-300 mb-3" />

          <h2 className="text-lg font-bold text-black mb-1">
            Amélie de Montchalin, sévère à moitié vide
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Surdiplômée, la ministre chargée des Comptes publics n’incarne pas les forces de la joie.
            En ces temps de restrictions budgétaires, cette macroniste convaincue a l’austérité sélective
            et un sens de la carrière très sûr.
          </p>

          {/* List of additional entries */}
          <ul className="text-sm text-black divide-y divide-gray-200">
            <li className="py-2 font-semibold">Zohran Mamdani, pas hindou, un dur</li>
            <li className="py-2 font-semibold">
              « Je vous salue, mairie, pleine de crasses » ou le nouveau credo d’Emmanuel Grégoire
            </li>
            <li className="py-2 font-semibold">Steve Witkoff, la voix de son maître</li>
            <li className="py-2 font-semibold">Rachida Dati, la maire tape-dur</li>
            <li className="py-2 font-semibold">Delphine Ernotte, transes télévision</li>
          </ul>
        </div>

        {/* Portrait Image */}
        <div className="w-full md:w-48 flex justify-center md:justify-end">
          {/* <Image
            src={PortraitImage}
            alt="Portrait d'Amélie de Montchalin"
            className="w-40 h-auto"
            placeholder="blur"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PrisesDeBecCard;
