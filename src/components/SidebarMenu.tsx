import React from "react";
import { IoMdClose } from "react-icons/io";

const SidebarMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#f5f5f5] z-50 overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <button onClick={onClose} className="text-black font-bold text-sm">
          <IoMdClose size={24} />
          <div className="text-xs">FERMER</div>
        </button>
        <input
          type="text"
          placeholder="Recherche sur le site"
          className="ml-4 w-full px-4 py-2 border rounded-full focus:outline-none"
        />
      </div>

      <nav className="p-4 space-y-2 text-black text-base font-medium">
        <div>À la une</div>
        <div className="underline">Dessins</div>
        <div>Web+</div>
        <div className="flex justify-between items-center">
          <span>Rubriques</span>
          <span>▼</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Thématiques</span>
          <span>▼</span>
        </div>
        <div>Les Dossiers du Canard</div>
      </nav>

      <div className="bg-white m-4 p-4 rounded shadow">
        <p className="text-red-600 font-semibold text-sm">MOTS CROISÉS</p>
        <p className="text-gray-600 text-sm">Retrouvez en ligne toutes les grilles du « Canard » !</p>
        <img
          src="/path-to-image.png"
          alt="Mots croisés"
          className="w-20 mt-2"
        />
      </div>

      <div className="text-center px-4">
        <img
          src="/path-to-thumbnail.png"
          alt="Cover"
          className="mx-auto w-32"
        />
        <p className="text-red-600 font-bold mt-2 text-sm">
          Accord bancal entre l’Europe et les États-Unis
        </p>
      </div>
    </div>
  );
};

export default SidebarMenu;
