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
      <div className="flex flex-col md:flex-row gap-4 px-4">
        <div className="w-full md:w-1/2">
          <SignatairesArticleCard data={data[0]} />
        </div>

        <div className="w-full md:w-1/2">
          <EditoEspion data={data[1]} />
        </div>
      </div>
    </div>
  );
};


  export default AfriqueAndEspion;
