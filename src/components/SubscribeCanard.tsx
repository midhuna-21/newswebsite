import Image from 'next/image';
import image from '../../public/images/subscribe.png';

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
   <div className="md:w-9/12 w-full mx-auto">
  <Image
    src={image}
    alt="advertisements"
    width={1500}
    height={700}
    className="w-full h-auto object-cover"
  />
</div>

  );
}

export default SubscribeCanard
