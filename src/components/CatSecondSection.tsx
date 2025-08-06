import CastexArticleCard from "./CastexArticleCard"
import GazaArticleCard from "./GazaArticleCard";
import SignatairesArticleCard from "./SignatairesArticleCard"


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
  data: NewsData[];
}
const CatSecondSection: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8 mt-3 border-b border-gray-200">
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[0]} />
        </div>
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[1]} />
        </div>
        <div className="w-full md:w-1/2">
          <GazaArticleCard data={data[2]} />
        </div>
      </div>

    </>
  )
}

export default CatSecondSection