import CastexArticleCard from "./CastexArticleCard"
import DetailCard from "./DetailCard";
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
const DetailCardSection: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 pb-8">
        <div className="w-full md:w-1/2">
          <DetailCard data={data[0]}/>
        </div>
        <div className="w-full md:w-1/2">
          <DetailCard data={data[1]}/>
        </div>
         <div className="w-full md:w-1/2">
          <DetailCard  data={data[2]}/>
        </div>
      </div>

        </>
    )
}

export default DetailCardSection