import AfriqueCard from "./AfriqueCard";
import EditoEspion from "./EditoEspion";
import SignatairesArticleCard from "./SignatairesArticleCard";

interface NewsData {
  category: string;
  slug: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData[];
}

const AfriqueAndEspion: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full bg-white py-8 mt-26">
      <div className="flex flex-wrap md:flex-nowrap gap-4 px-4">
        <div className="flex-1">
          <SignatairesArticleCard data={data[0]} />
        </div>
        <div className="flex-1">
          <EditoEspion data={data[0]} />
        </div>
      </div>
    </div>
  );
};

export default AfriqueAndEspion;
