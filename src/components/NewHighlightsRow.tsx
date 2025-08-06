import Image from 'next/image';
import Link from 'next/link';

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

const NewsHighlightRow: React.FC<Props> = ({ data }) => {
  return (
<section className="bg-gray-50 w-full mt-[80px] border-t border-b border-gray-300">

      <div className="px-3 sm:px-6 py-4">
        <div
          className="flex gap-4 overflow-x-auto sm:overflow-x-visible pb-3"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent',
          }}
        >
          {/* Actual 3 cards */}
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-0 sm:w-1/3 flex items-start space-x-3 group rounded-md"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={72}
                  height={72}
                  className="rounded-md object-cover w-[72px] h-[72px] sm:w-[94px] sm:h-[94px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold text-red-700 group-hover:underline leading-snug">
                  {item.category}
                </p>
                <p className="text-sm text-black mt-1 leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

          {/* Spacer to simulate 4th card */}
<div className="hidden sm:block min-w-[280px] sm:w-1/3"></div>


        </div>
      </div>
    </section>
  );
};

export default NewsHighlightRow;
