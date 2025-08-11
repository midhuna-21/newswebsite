
import React from "react";
import SocialSidebar from '@/components/SocialSidebar';
import DetailFristSection from '@/components/DetailFristSection';
import DetailCardSection from '@/components/DetailCardSection';
import DetailSecondSection from '@/components/DetailSecondSection';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

export default function DetailSection({
  article,
  relatedData,
  category,
}: {
  article: NewsItem;
  relatedData: NewsItem[];
  category: string;
}) {



  return (
    <div className="px-3 sm:px-3 lg:px-5">
        <DetailFristSection data={article} />
      <DetailSecondSection data={[relatedData[2], relatedData[3], relatedData[4]]} />
      <DetailCardSection data={[relatedData[5], relatedData[6], relatedData[7], relatedData[8], relatedData[14], relatedData[13]]} />
    </div>
  );
}