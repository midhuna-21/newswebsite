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
 <div className="mx-auto flex flex-col md:flex-row mt-8 border-gray-200 items-stretch mb-8">
  <div className="md:border-r md:pr-6 border-gray-200 flex-1">
    <GazaArticleCard data={data[0]} />
  </div>
  <div className="md:border-r md:px-6 border-gray-200 flex-1">
    <GazaArticleCard data={data[1]} />
  </div>
  <div className="md:pl-6 flex-1">
    <GazaArticleCard data={data[2]} />
  </div>
</div>

    </>
  )
}

export default CatSecondSection