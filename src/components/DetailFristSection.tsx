'use client';

import Image from 'next/image';

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
  // Enhanced paragraph splitting with better sentence detection
  const sentences = data.description
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .filter(sentence => sentence.trim().length > 20);
  
  const paragraphs: string[] = [];
  const minSentencesPerParagraph = Math.max(1, Math.floor(sentences.length / 5));
  
  let currentParagraph = '';
  let sentenceCount = 0;
  
  sentences.forEach((sentence, index) => {
    currentParagraph += (currentParagraph ? ' ' : '') + sentence.trim();
    sentenceCount++;
    
    if (sentenceCount >= minSentencesPerParagraph || index === sentences.length - 1) {
      if (currentParagraph.trim()) {
        paragraphs.push(currentParagraph.trim());
      }
      currentParagraph = '';
      sentenceCount = 0;
    }
  });

  // Format date for better display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 uppercase tracking-wider">
          {data.category}
        </span>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {data.title}
        </h1>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
          <time dateTime={data.date} className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(data.date)}
          </time>
          <span className="mx-3">•</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {Math.ceil(data.description.split(' ').length / 200)} min read
          </span>
        </div>

        {/* Lead paragraph / Short description */}
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light italic border-l-4 border-red-500 pl-6 py-2 bg-gray-50">
          {data.shortdescription}
        </p>
      </header>

      {/* Featured Image */}
      <figure className="mb-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        <figcaption className="mt-3 text-sm text-gray-600 text-center italic">
          {data.title}
        </figcaption>
      </figure>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-900 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className={`
                mb-6 text-justify leading-8
                ${index === 0 
                  ? 'text-lg font-medium text-gray-800 first-letter:text-6xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none' 
                  : 'text-base'
                }
              `}
            >
              {paragraph}
            </p>
          ))}
        </div>

       
      </div>
    </article>
  );
};

export default DetailFirstSection;  