import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex-grow border-t-2 border-red-600"></div>
      <h2 className="text-red-600 text-lg sm:text-xl md:text-2xl font-semibold px-3 font-serif tracking-wide whitespace-nowrap">
        <span className="relative" style={{
          fontSize: '34px',
          fontFamily:
            "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",
        }}>
          News
        </span>
      </h2>
      <div className="flex-grow border-t-2 border-red-600"></div>
    </div>
  );
};

export default Headline;
