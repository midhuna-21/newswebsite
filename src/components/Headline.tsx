import React from 'react';

interface Props {
  title: string;
}

const Headline: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex-grow border-t-2 border-red-600"></div>
      <h2
        className="text-red-600 text-2xl sm:text-3xl md:text-4xl px-3 tracking-wide whitespace-nowrap"
        style={{fontWeight:900}}
      >
        <span
          className="relative font-new"
        >
          {title}
        </span>
      </h2>
      <div className="flex-grow border-t-2 border-red-600"></div>
    </div>
  );
};

export default Headline;
