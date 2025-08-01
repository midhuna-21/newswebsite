import Image from 'next/image';
import React from 'react';

export default function BayrouCard() {
  return (
    <div className="max-w-sm p-4 border border-gray-300 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* <Image
          src={illustration}
          alt="Bayrou illustration"
          className="w-full object-contain"
          placeholder="blur"
        /> */}
      </div>
      <p className="mt-4 text-center text-red-600 font-bold leading-snug text-lg">
        Bétharram ou la mémoire<br />
        sélective du révérend<br />
        père Bayrou
      </p>
    </div>
  );
}

