import CastexArticleCard from "./CastexArticleCard"
import CategoryCard from "./CategoryCard";
import CategoryCardWithImage from "./CategoryCardWithImage";
import CatSubscribe from "./CatSubscribe";
import DetailTitleList from "./DetailTitleList";
import DossierReadingList from "./DossierReadingList";
import EditoEspion from "./EditoEspion";
import FillonCard from "./FillonCard";
import GazaArticleCard from "./GazaArticleCard";
import SignatairesArticleCard from "./SignatairesArticleCard"
import TrumpUltimatumCard from "./TrumpUltimatumCard";

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

const CatThirdSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-3">
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left: Category cards */}
        <div className="flex-1 pr-7 border-r border-gray-200">
          {data.slice(0, 22).map((item, index) =>
            index % 2 === 0 ? (
              <CategoryCard key={item.slug || index} data={item} />
            ) : (
              <CategoryCardWithImage key={item.slug || index} data={item} />
            )
          )}
        </div>

        {/* Right: Trump card */}
        <div className="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 space-y-16">
  <DetailTitleList data={[data[1], data[2], data[3], data[0], data[5]]} />
  <TrumpUltimatumCard data={data[21]} />
  <FillonCard data={data[21]} />
  <CatSubscribe />
</div>

      </div>
    </div>
  );
};

export default CatThirdSection;
