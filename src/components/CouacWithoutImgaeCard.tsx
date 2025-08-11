// components/CouacCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
  slug:string;
  title:string;
  category:string;
  shortdescription:string;
  description:string;
  image:string;
  date:string;
}
interface Props {
  data:NewsData;
}

const CouacWithoutImgaeCard:React.FC<Props>=({data}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white">
        <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>

      <div className="flex items-center gap-3 mb-2">
      
        <div>
        <span className="text-red-600 text-base sm:text-lg md:text-lg lg:text-xl capitalize tracking-wide font-custom">
            {data.category}
          </span>
        </div>
      </div>

      <hr className="my-2 border-black/30" />

    

      {/* Article Title & Summary */}
      <div>
     <p
          className="text-lg lg:text-2xl font-black hover:underline text-gray-900 mb-2 font-custom"
          style={{ fontWeight: 900 }}
        >   {data.title}
        </p>
       <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                > {data.shortdescription}
      </p>
      </div>
      </Link>
    </div>
  );
}


export default CouacWithoutImgaeCard;