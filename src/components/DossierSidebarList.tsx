// components/DossierSidebarList.tsx

import { FaChevronRight } from "react-icons/fa";

const DossierSidebarList = () => {
  return (
    <div className="w-full max-w-sm p-4">
      <h3 className="text-base font-semibold text-black mb-3">
        À lire dans ce dossier
      </h3>
      <ul className="text-sm text-black border-t border-gray-200 divide-y divide-gray-200">
        <li className="py-2">100 histoires d'espions</li>
        <li className="py-2">Des espions très désorientés</li>
        <li className="py-2">Le côté obscur du secret se renforce</li>
        <li className="py-2">
          <a href="#" className="underline hover:text-red-600 transition">
            Les points chauds de l'espionnage
          </a>
        </li>
        <li className="py-2">Un métier d’artistes</li>
        <li className="py-2">
          <a href="#" className="underline hover:text-red-600 transition">
            Les services français
          </a>
        </li>
        <li className="py-2">La mythologie de l'ombre</li>
        <li className="py-2">1995-2007, Chirac au Château</li>
      </ul>
      <div className="mt-4">
        <a
          href="#"
          className="text-red-600 text-sm font-medium flex items-center gap-1 hover:underline"
        >
          Voir le sommaire <FaChevronRight className="text-xs mt-0.5" />
        </a>
      </div>
    </div>
  );
};

export default DossierSidebarList;
