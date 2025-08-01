// components/HeroSection.tsx
import React from 'react';
import ArticleLeftCard from './ArticleLeftCard';
import ArticlePreview from './ArticlePreview';
import ArticleRightCard from './ArticleRightCard';
import Headline from './Headline';
import GazaArticleCard from './GazaArticleCard';
import CastexArticleCard from './CastexArticleCard';
import SignatairesArticleCard from './SignatairesArticleCard';

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto items-start">
          <div className="order-1 md:order-none mt-5 md:col-span-3">
            <ArticleLeftCard />
          </div>

          <div className="order-3 md:order-none md:col-span-6">
            <Headline />
            <ArticlePreview />
          </div>

          <div className="order-2 md:order-none mt-5 md:col-span-3">
            <ArticleRightCard />
          </div>
        </div>
      </div>

      {/* Row of two ArticlePreview components */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2">
          <ArticlePreview />
        </div>
        <div className="w-full md:w-1/2">
          <ArticlePreview />
        </div>
      </div>

          <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2">
          <GazaArticleCard />
        </div>
        <div className="w-full md:w-1/2">
          <GazaArticleCard />
        </div>
         <div className="w-full md:w-1/2">
          <GazaArticleCard />
        </div>
      </div>

       <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard />
        </div>
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard />
        </div>
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard />
        </div>
        <div className="w-full md:w-1/2">
          <CastexArticleCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 pb-8">
  <div className="md:col-span-3 w-full">
    <CastexArticleCard />
  </div>
  <div className="md:col-span-6 w-full">
    <SignatairesArticleCard />
  </div>
  <div className="md:col-span-3 w-full">
    <CastexArticleCard />
  </div>
</div>

    </>
    
  );
};

export default HeroSection;
