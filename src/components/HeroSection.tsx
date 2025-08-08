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

      {/* first section */}
      <div className="w-full bg-white mt-8">
        <div className="text-center px-4 py-4">
          <h3 className="text-red-600 font-bold text-sm sm:text-base inline-block border-b-2 border-red-600">
            Le plan du gouvernement pour réveiller la natalité
          </h3>
          <h1 className="text-black font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2">
            Macron lance un avis à la copulation !
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="order-1 md:order-2 md:col-span-6">
            <Headline />
            <ArticlePreview data={data[0]} />
          </div>
          <div className="order-2 md:order-1 md:col-span-3 md:py-4">
            <ArticleLeftCard />
          </div>
          <div className="order-3 md:order-3 mt-5 md:mt-0 md:col-span-3 md:py-4">
            <ArticleRightCard />
          </div>
        </div>
      </div>

      <div className='p-4'>


        {/* second section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="border-b border-gray-300 pb-4 md:border-b-0 md:pb-0">
            <ArticlePreview data={data[1]} />
          </div>
          <ArticlePreview data={data[1]} />
        </div>


        {/* 3rd section */}
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
          <div className="md:col-span-6 w-full md:pr-4 md:border-r md:border-gray-300">
            <ArticlePreview data={data[10]} />
          </div>

          <div className="md:col-span-3 w-full md:p-4 md:border-r md:border-gray-300 pb-4 border-b border-gray-300 md:border-b-0 md:pb-0">
            <CastexArticleCard data={data[11]} />
          </div>

          <div className="md:col-span-3 w-full md:p-4 mt-4 md:mt-0">
            <CastexArticleCard data={data[12]} />
          </div>

        </div>

        {/* 4th section */}
        <div className="mx-auto flex flex-col md:flex-row gap-6 mt-12 border-gray-200 ">
          <GazaArticleCard data={data[0]} />
          <GazaArticleCard data={data[1]} />
          <GazaArticleCard data={data[0]} />
        </div>

        {/* last section */}
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
          <div className="md:col-span-6 w-full md:pr-4 md:border-r md:border-gray-300">
            <ArticlePreview data={data[10]} />
          </div>

          <div className="md:col-span-3 w-full md:p-4 md:border-r md:border-gray-300 pb-4 border-b border-gray-300 md:border-b-0 md:pb-0">
            <CastexArticleCard data={data[11]} />
          </div>

          <div className="md:col-span-3 w-full md:p-4 mt-4 md:mt-0">
            <CastexArticleCard data={data[12]} />
          </div>

        </div>
      </div>

    </>

  );
};

export default HeroSection;
