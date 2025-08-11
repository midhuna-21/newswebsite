"use client";

import Image from "next/image";
import SocialSidebar from "./SocialSidebar";
import { useRef } from "react";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData;
}

const DetailFirstSection: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null!);

  const sentences = data.description
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .filter((sentence) => sentence.trim().length > 20);

  const paragraphs: string[] = [];
  const minSentencesPerParagraph = Math.max(1, Math.floor(sentences.length / 5));
  let currentParagraph = "";
  let sentenceCount = 0;

  sentences.forEach((sentence, index) => {
    currentParagraph += (currentParagraph ? " " : "") + sentence.trim();
    sentenceCount++;
    if (sentenceCount >= minSentencesPerParagraph || index === sentences.length - 1) {
      if (currentParagraph.trim()) paragraphs.push(currentParagraph.trim());
      currentParagraph = "";
      sentenceCount = 0;
    }
  });

  return (
    <article
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative flex"
    >
      <div className="w-16 mr-6">
        <div className="sticky top-24">
          <SocialSidebar sectionRef={sectionRef} />
        </div>
      </div>
      <div className="flex-1">

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
              {data.category}
            </span>
            <span className="text-red-600 text-sm">•</span>
          </div>
        </div>
        <header className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-custom">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
            <time dateTime={data.date} className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {data.date}
            </time>
            <span className="mx-3">•</span>
          </div>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light p-4 italic border-l-4 border-red-500 pl-6 py-2 bg-gray-50 font-custom" style={{ fontWeight: 400 }}>
            {data.shortdescription}
          </p>
        </header>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden shadow-xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <figcaption className="mt-3 text-sm text-gray-600 text-center italic font-custom">
            {data.title}
          </figcaption>
        </figure>

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-900 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`
                  mb-6 text-justify leading-8
                  ${index === 0
                    ? 'font-custom text-gray-800 first-letter:text-6xl text-base sm:text-lg md:text-lg lg:text-xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                    : 'text-base'
                  }
                `}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailFirstSection;  