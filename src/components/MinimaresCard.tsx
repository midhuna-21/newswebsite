import React from 'react';

export default function MinimaresCard() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 border border-black relative">
      {/* Horizontal lines and title */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 h-px bg-black" />
        <h2 className="mx-4 text-3xl font-black font-serif tracking-wide">minimares</h2>
        <div className="flex-1 h-px bg-black" />
      </div>

      {/* Text content */}
      <p className="text-base leading-relaxed font-medium text-black">
        En goguette en Maine-et-Loire, François Bayrou dénonce un mal français (« Ouest France » , 25/7) :
        « Chacun travaille dans son coin et n’aime pas œuvrer avec les autres. » Pas comme un certain président du MoDem, bien connu pour son goût de la gestion collective.
      </p>

      {/* Red square dot */}
      <div className="mt-2">
        <span className="inline-block w-2 h-2 bg-red-600" />
      </div>
    </div>
  );
}
