import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 px-2">
      {/* Left Line */}
      <div className="flex-grow border-t-2 border-red-600"></div>

      {/* Title */}
      <h2 className="text-red-600 text-lg sm:text-xl md:text-2xl font-semibold px-3 font-serif tracking-wide whitespace-nowrap">
        <span className="relative">
          À&nbsp;LA&nbsp;UNE
        </span>
      </h2>

      {/* Right Line */}
      <div className="flex-grow border-t-2 border-red-600"></div>
    </div>
  );
};

export default Headline;
