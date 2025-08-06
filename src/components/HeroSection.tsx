// components/HeroSection.tsx
import React from 'react';
import ArticleLeftCard from './ArticleLeftCard';
import ArticlePreview from './ArticlePreview';
import ArticleRightCard from './ArticleRightCard';
import Headline from './Headline';
import GazaArticleCard from './GazaArticleCard';
import CastexArticleCard from './CastexArticleCard';
import SignatairesArticleCard from './SignatairesArticleCard';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
}

interface Props {
  data: NewsData[];
}

const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 py-8">
        {/* Headline first */}
        <div className="text-center px-4 py-4">
          <h3 className="text-red-600 font-bold text-sm sm:text-base inline-block border-b-2 border-red-600">
            Le plan du gouvernement pour réveiller la natalité
          </h3>
          <h1 className="text-black font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2">
            Macron lance un avis à la copulation !
          </h1>
        </div>

        {/* Article + Side Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* Center - Main ArticlePreview */}
          <div className="order-1 md:order-2 md:col-span-6">
            <Headline />
            <ArticlePreview data={data[0]} />
          </div>

          {/* Left Card (mobile: below, desktop: left) */}
          <div className="order-2 md:order-1 md:col-span-3 md:py-4">

            <ArticleLeftCard />
          </div>

          {/* Right Card (mobile: below, desktop: right) */}
          <div className="order-3 md:order-3 mt-5 md:mt-0 md:col-span-3 md:py-4">
            <ArticleRightCard />
          </div>

        </div>
      </div>


      {/* Row of two ArticlePreview components */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2">
          <ArticlePreview data={data[1]} />
        </div>
        <div className="w-full md:w-1/2">
          <ArticlePreview data={data[2]} />
        </div>
      </div>


      {/* <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard data={data[6]} />
        </div>
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard data={data[7]} />
        </div>
        <div className="w-full md:w-1/2 border-r">
          <CastexArticleCard data={data[8]} />
        </div>
        <div className="w-full md:w-1/2">
          <CastexArticleCard data={data[9]} />
        </div>
      </div> */}


      {/* 3rd section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 pb-8">
        <div className="md:col-span-3 w-full">
          <CastexArticleCard data={data[10]} />
        </div>
        <div className="md:col-span-6 w-full">
          <SignatairesArticleCard data={data[11]} />
        </div>
        <div className="md:col-span-3 w-full">
          <CastexArticleCard data={data[12]} />
        </div>
      </div>

      {/* 4th section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 items-center justify-center">

          {/* Start from col 2 to center within 12-column grid */}
          <div className="md:col-span-6 md:col-start-2 w-full">
            <ArticlePreview data={data[10]} />
          </div>

          <div className="md:col-span-3 w-full">
            <CastexArticleCard data={data[12]} />
          </div>

        </div>
      </div>



      {/* 5th section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 pb-8">
        <div className="md:col-span-6 w-full">
          <ArticlePreview data={data[10]} />
        </div>
        <div className="md:col-span-3 w-full">
          <CastexArticleCard data={data[11]} />
        </div>
        <div className="md:col-span-3 w-full">
          <CastexArticleCard data={data[12]} />
        </div>
      </div>


      {/* <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[3]} />
        </div>
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[4]} />
        </div>
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[5]} />
        </div>
      </div> */}


    </>

  );
};

export default HeroSection;
