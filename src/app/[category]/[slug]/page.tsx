import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import educationData from '../../../../public/data/education.json';
import { Metadata } from 'next';
import DetailFristSection from '@/components/DetailFristSection';
import DetailCardSection from '@/components/DetailCardSection';
import Breadcrumb from '@/components/Breadcrumb';
import DetailSecondSection from '@/components/DetailSecondSection';
import Navbar from '@/components/Navbar';



export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    { category: 'entertainment', articles: entertainmentData },
    { category: 'education', articles: educationData },

  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );

  return params;
}


interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface DetailPageProps {
  params: Promise<{ category: string, slug: string }>;
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

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    politics: politicsData,
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
    entertainment: entertainmentData,
    education: educationData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = 'https://www.nystatenews.org/';
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }


  return {
    title: article.title,
    description: article.shortdescription,
    keywords: `Wanda Vázquez Garced, news, ${article.title}`,
    authors: [{ name: 'Staff Writer' }],
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: 'nystatenews',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@nystatenews',
      creator: '@nystatenews',
    },
  };
}


export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) return notFound();

  const article = data.find(item => item.slug === slug);
  if (!article) {
    return <div className="p-4">No article found for slug {slug}</div>;
  }

  //   if (slug === 'charges-dropped-wanda-vazquez-political-targeting') {
  //     return (
  //       <main>


  //         <StaticDetailPage />
  //       </main>
  //     );
  //   }

  return (
    <div>
      <div className="hidden lg:block"> 
              
            <Navbar />
            </div>
      <Breadcrumb category={category} title={article.title} />

        <div className="px-3 sm:px-3 lg:px-5">
        <DetailFristSection data={article} />
        <DetailSecondSection data={[data[1], data[2], data[3]]} />
        <DetailCardSection data={[data[4], data[5], data[5],data[7],data[8],data[9]]} />
      </div>
    </div>


  );
}