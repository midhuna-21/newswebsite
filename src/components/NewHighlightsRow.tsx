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
          {data.slice(0, 3).map((item, index) => (
            <Link
              key={item.slug} // ✅ Moved here
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

                <div className="flex flex-col flex-1" >
                  <p className="uppercase" style={{
                    color: '#e01a00',
                    fontSize: '18px',
                    fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",
                  }}>
                    {item.category}
                  </p>
                  <p className="text-sm text-black" style={{
                    fontSize: '16px',
                    fontFamily:
                      "'Proxima Nova Condensed', Calibri, 'Arial Narrow', 'Roboto Condensed', 'Trebuchet MS', Tahoma, sans-serif",
                  }}>{item.title}</p>
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
