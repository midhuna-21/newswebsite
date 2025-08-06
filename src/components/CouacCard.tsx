// components/CouacCard.tsx
import Image from 'next/image';

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

const CouacCard:React.FC<Props>=({data}) =>{
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
       
        <div>
          {/* <h2 className="text-lg font-bold text-black leading-tight hover:underline">Couac</h2> */}
          <p className="text-xs text-red-600 uppercase font-semibold">{data.category}</p>
        </div>
      </div>

      <hr className="my-2 border-black/30" />

      {/* Cartoon */}
      <div className="w-full my-4">
  <Image
    src={data?.image}
    alt={data?.title}
    width={400}
    height={300} // Fixed height
    className="w-[400px] h-[200px] object-cover mx-auto"
  />
</div>


      {/* Article Title & Summary */}
      <div>
       <p className="text-lg lg:text-xl font-bold hover:underline text-gray-900 mb-2">
          {data.title}
        </p>
       <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>
      </div>

    </div>
  );
}

export default CouacCard;