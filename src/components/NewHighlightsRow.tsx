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
    <section className="bg-gray-50 w-full mt-[80px] lg:mt-[120px] border-t border-b border-gray-300">
      <div className="px-3 sm:px-6 py-2">
        <div
          className="flex gap-3 overflow-x-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent',
          }}
        >
          {data.slice(0, 4).map((item, index) => (
            <Link
              key={item.slug}
              href={`/${item.category}/${item.slug}`}
              className="text-decoration-none"
              title={item.slug}
            >    <div
              key={index}
              className="min-w-[240px] flex items-start space-x-2 group"
            >

                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="rounded-md object-cover w-[56px] h-[56px] sm:w-[64px] sm:h-[64px]"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <p
                    className="text-lg text-red-600 leading-tight font-custom uppercase"
                    style={{ fontWeight: 400 }}
                  >
                    {item.category}
                  </p>
                  <p className="text-lg text-black font-custom leading-tight">{item.title}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlightRow;