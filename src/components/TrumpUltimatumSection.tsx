// components/TrumpUltimatumSection.tsx
import React from 'react';
import Headline from './Headline';
import TrumpUltimatumCard from './TrumpUltimatumCard';

export default function TrumpUltimatumSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10">
      {/* Headline */}
      <Headline />

      {/* 4 cards in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <TrumpUltimatumCard />
        <TrumpUltimatumCard />
        <TrumpUltimatumCard />
        <TrumpUltimatumCard />
      </div>
    </section>
  );
}
