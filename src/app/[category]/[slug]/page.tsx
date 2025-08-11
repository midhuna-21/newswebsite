import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import educationData from '../../../../public/data/education.json';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import DetailSection from '../../../components/DetailSection';
import Breadcrumb from '@/components/Breadcrumb';

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
  const allDataSets = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    { category: 'entertainment', articles: entertainmentData },
    { category: 'education', articles: educationData },
  ];

  return allDataSets.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const articles = allData[category] || [];
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
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
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

export default async function DetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];
  if (!data) return notFound();

  const article = data.find((item) => item.slug === slug);
  if (!article) {
    return <div className="p-4">No article found for slug {slug}</div>;
  }

  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <Breadcrumb category={category} title={article.title} />

      <DetailSection article={article} relatedData={data} category={category} />
    </div>
  );
}
