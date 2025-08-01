// components/EditoEspion.tsx

import Image from "next/image";
import React from "react";
// import EspionImage from "../public/9f2c9e9e-ce2f-45e7-ab9a-e1ee28fd69be.png";

const EditoEspion = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">Edito</p>
        <h2 className="text-xl font-bold text-gray-800 underline mb-2">
          100 histoires d'espions
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed">
          Les espions et « Le Canard », c’est une longue histoire. Déjà, aux débuts du journal,
          le sujet était dans ses colonnes. En 1918, par exemple. C’était une époque où tout le monde
          voyait des espions partout. Pas seulement devant le Conseil de guerre, voire la Haute Cour,
          où - comparassaient ceux qui étaient accusés d’avoir été à la solde de l’Allemagne.
          Tout un chacun, d’un bord comme de l’autre, était...
        </p>
      </div>
      <div className="flex-shrink-0 w-full md:w-48 flex justify-center items-start">
        {/* <Image
          src={EspionImage}
          alt="Illustration espion"
          className="w-auto h-auto max-h-60"
          placeholder="blur"
        /> */}
      </div>
    </div>
  );
};

export default EditoEspion;
