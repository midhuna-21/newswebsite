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

const SubscribeCanard:React.FC<Props>=({data}) => {
  return (
    <div className="w-full flex justify-center bg-white py-8 px-4">
      <div className="max-w-5xl w-full border-t-2 border-b-2 border-red-600 py-8 px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Illustration */}
  <div className="w-[250px] h-auto">
    <Image
      src={data?.image}
      alt={data?.title}
      width={250} // reduced from 400
      height={250} // reduced from 400
      className="w-full object-contain"
    />
  </div>


          {/* Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-2xl font-bold text-red-600">
             {data.title} 
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-black text-justify mb-2 md:mb-0">
        {data.shortdescription}
      </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCanard
