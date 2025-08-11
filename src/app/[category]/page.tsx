import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';
import entertainmentData from '../../../public/data/entertainment.json';
import educationData from '../../../public/data/education.json';
import CategoryFirstSection from '@/components/CategoryFristSection';
import CatSecondSection from '@/components/CatSecondSection';
import CatThirdSection from '@/components/CatThirdSection';
import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar';


interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = allData[category];

  if (!data) {
    return (
      <div className="container py-5">
        <h2>Category not found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="hidden lg:block"> 
              
            <Navbar />
            </div>
    <Breadcrumb category={category} />

      <div className="px-3 sm:px-3 lg:px-5">
        <div className='border-b border-gray-200'>
          <CategoryFirstSection data={data[0]} />
        </div>
        <div className='border-b border-gray-200'>
          <CatSecondSection data={[data[1], data[2], data[3]]} />
        </div>
        <CatThirdSection data={[data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25]]} />
      </div>
    </div>
  );
}