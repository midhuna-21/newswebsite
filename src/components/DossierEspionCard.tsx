// components/DossierEspionCard.tsx

import Image from "next/image";
import React from "react";
// import DossierImage from "../public/ac713be7-7dbf-44d0-848b-cc211b85c04a.png";

const DossierEspionCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0 w-full md:w-1/3">
        {/* <Image
          src={DossierImage}
          alt="100 histoires d'espions"
          className="w-full h-auto rounded"
          placeholder="blur"
        /> */}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-extrabold text-red-600 uppercase mb-2">
          Les dossiers du Canard
        </h3>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
          100 histoires d'espions
        </h2>
        <p className="text-sm text-gray-500 mb-4 border-b pb-1">
          <span className="font-semibold text-gray-700">Numéro 176</span>
          <span className="mx-1 text-red-500">•</span>
          <span>Juillet 2025</span>
        </p>
        <p className="text-base text-gray-800 leading-relaxed">
          Cet été, « Le Canard » propose un numéro consacré aux histoires
          d’espions ! Agents doubles pendant la guerre froide, taupes, intrigues,
          trahisons, évasions, chasses à l’homme… Cette collection de scénarios,
          bien réels, du monde de l’ombre, dépasse la fiction des séries à succès
          et le rythme des films cultes du genre. Vous y trouverez des histoires
          d’espions de tous pays, de tout acabit et de toutes les époques.
        </p>
      </div>
    </div>
  );
};

export default DossierEspionCard;
