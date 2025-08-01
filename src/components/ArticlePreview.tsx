import Image from 'next/image';
import React from 'react';

const ArticlePreview = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 px-4 py-6 max-w-5xl mx-auto">
      {/* Left Text Section */}
      <div className="md:w-1/2">
        <p className="text-red-600 font-semibold text-sm">
          Santé <span className="text-black">• Pharmaceutique</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold underline leading-tight mt-2">
          L’Etat chouchoute un labo au détriment de
          <br className="hidden sm:block" />
          l’Etablissement français du sang
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed">
          Alors que l&apos;EFS connaît une situation financière
          « très préoccupante », l’Assurance maladie soigne le
          Laboratoire français du fractionnement et des biotechnologies, qui a reçu 1,7 milliard d&apos;euros de fonds publics. Garrot fiasco ?
        </p>
      </div>

      {/* Right Cartoon Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {/* <Image
          src={cartoon}
          alt="Cartoon about EFS"
          className="w-full max-w-md h-auto"
        /> */}
      </div>
    </div>
  );
};

export default ArticlePreview;
