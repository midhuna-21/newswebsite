// components/AlaUneHeader.tsx
import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-4">
      {/* Left Line */}
      <div className="hidden sm:block flex-grow border-t-2 border-red-600 max-w-[300px]"></div>

      {/* Title */}
      <h2 className="text-red-600 text-xl sm:text-2xl md:text-3xl font-semibold px-4 font-serif tracking-wide">
        <span className="relative">
          À&nbsp;LA&nbsp;UNE
        </span>
      </h2>

      {/* Right Line */}
      <div className="hidden sm:block flex-grow border-t-2 border-red-600 max-w-[300px]"></div>
    </div>
  );
};

export default Headline;
