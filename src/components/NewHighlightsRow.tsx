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

const NewsHighlightRow: React.FC<Props> = ({data}) =>{
  return (
 <section className="bg-gray-50">
  <div className="w-full px-4 py-4 flex gap-4 overflow-x-auto">
    {data.slice(0, 3).map((item, index) => (
      <div
        key={index}
        className="min-w-[300px] flex items-start space-x-3 group  rounded-md "
      >
        <div className="flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            width={94}
            height={94}
            className="rounded-md object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-red-700 group-hover:underline leading-snug">
            {item.category}
          </p>
          <p className="text-sm text-black mt-1 leading-tight">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  );
}


export default NewsHighlightRow;