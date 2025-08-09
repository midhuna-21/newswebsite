import React from 'react';

interface Props {
  title: string;
}

const Headline: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex-grow border-t-2 border-red-600"></div>
      <h2
        className="text-red-600 text-lg sm:text-xl md:text-2xl px-3 font-Semibold tracking-wide whitespace-nowrap"
      >
        <span
          className="relative"
        >
          {title}
        </span>
      </h2>
      <div className="flex-grow border-t-2 border-red-600"></div>
    </div>
  );
};

export default Headline;
