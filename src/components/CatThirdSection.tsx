import CastexArticleCard from "./CastexArticleCard"
import CategoryCard from "./CategoryCard";
import CategoryCardWithImage from "./CategoryCardWithImage";
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
const CatThirdSection: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="flex flex-col md:flex-col gap-6 px-4 md:px-8 pb-8 mt-5">
        <div className="w-full md:w-1/2">
          <CategoryCard data={data[0]}/>
          <CategoryCardWithImage data={data[1]} />
            <CategoryCard data={data[2]}/>
          <CategoryCardWithImage data={data[3]} />  
          <CategoryCard data={data[4]}/>
          <CategoryCardWithImage data={data[5]} /> 
           <CategoryCard data={data[6]}/>
          <CategoryCardWithImage data={data[7]} /> 
           <CategoryCard data={data[8]}/>
          <CategoryCardWithImage data={data[9]} /> 
           <CategoryCard data={data[10]}/>
          <CategoryCardWithImage data={data[11]} /> 
           <CategoryCard data={data[12]}/>
          <CategoryCardWithImage data={data[13]} /> 
           <CategoryCard data={data[14]}/>
          <CategoryCardWithImage data={data[15]} />
          <CategoryCard data={data[16]}/>
          <CategoryCardWithImage data={data[17]} />
          <CategoryCard data={data[18]}/>
          <CategoryCardWithImage data={data[19]} />
          <CategoryCard data={data[20]}/>
          <CategoryCardWithImage data={data[21]} />
        </div>
        
      </div>

        </>
    )
}

export default CatThirdSection