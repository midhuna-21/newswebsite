// components/DossierReadingList.tsx

import React from "react";
import { FaChevronRight } from "react-icons/fa";

const DossierReadingList = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h3 className="text-base font-semibold text-black mb-3">
        À lire dans ce dossier
      </h3>
      <ul className="text-sm text-black border-t border-gray-200 divide-y divide-gray-200">
        {[
          "100 histoires d'espions",
          "Des espions très désorientés",
          "Le côté obscur du secret se renforce",
          "Les points chauds de l'espionnage",
          "Un métier d’artistes",
          "Les services français",
          "La mythologie de l'ombre",
          "1995-2007, Chirac au Château",
        ].map((item, index) => (
          <li
            key={index}
            className="py-2 hover:text-red-600 transition-colors duration-200"
          >
            {item.includes("Les points") || item.includes("services français") ? (
              <a href="#" className="underline">
                {item}
              </a>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a
          href="#"
          className="text-red-600 text-sm font-medium flex items-center gap-1 hover:underline"
        >
          Voir le sommaire <FaChevronRight className="text-xs" />
        </a>
      </div>
    </div>
  );
};

export default DossierReadingList;
