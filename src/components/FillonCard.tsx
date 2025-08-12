import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData;
}

const FillonCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-[320px] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-800 p-3">
      <Link href={`/${data.category}/${data.slug}`} className="text-decoration-none" title={data.slug}>
        <div className="w-[250px] h-[200px] mx-auto bg-black flex items-center justify-center">
          <div className="w-[80%] h-[80%] relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-white text-sm font-semibold">
          <div className="w-12 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <FaPlay className="text-xs" />
          </div>
          <span className="text-base sm:text-xs md:text-xs lg:text-sm  leading-snug text-white uppercase line-clamp-5 font-custom ">{data.title}</span>
        </div>
      </Link>
      
    </div>
  );
};

export default FillonCard;
