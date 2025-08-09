import NewsHighlightRow from "@/components/NewHighlightsRow";
import Image from "next/image";
import businessData from '../../public/data/business.json'
import sportsData from '../../public/data/sports.json'
import politicsData from '../../public/data/politics.json'
import healthData from '../../public/data/health.json'
import scienceData from '../../public/data/science.json'
import entertainmentData from '../../public/data/entertainment.json'
import technologyData from '../../public/data/technology.json'
import educationData from '../../public/data/education.json'
import lifestyleData from '../../public/data/lifestyle.json'
import HeroSection from "@/components/HeroSection";
import SecondIndexSection from "@/components/SecondIndexSection";
import CollectorsSection from "@/components/CollectorsSection";
import AfriqueAndEspion from "@/components/AfriqueAndEspion";
import DossiersSection from "@/components/DossiersSection";
import TrumpUltimatumSection from "@/components/TrumpUltimatumSection";
import FillonSection from "@/components/FillonSection";
import DucanardSection from "@/components/DucanardSection";
import SubscribeCanard from "@/components/SubscribeCanard";
import PrisesAndCouacSection from "@/components/PrisesAndCouacSection";
import Footer from "@/components/Footer";
import FullCard from "@/components/FullCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <NewsHighlightRow data={[businessData[0], sportsData[0], politicsData[0]]} />
      <div className="px-3 sm:px-3 lg:px-5">

        <HeroSection data={[scienceData[0], sportsData[12], lifestyleData[0], healthData[0], entertainmentData[0], educationData[0], businessData[1], politicsData[1], healthData[1], lifestyleData[1], entertainmentData[1], educationData[1], scienceData[1]]} />

        <SecondIndexSection data={[businessData[2], sportsData[2], politicsData[2], scienceData[2], educationData[1], lifestyleData[2], healthData[2]]} />

        <CollectorsSection data={[politicsData[3], politicsData[4], politicsData[5]]} />

        <AfriqueAndEspion data={[politicsData[6], politicsData[7]]} />

        <DossiersSection data={[educationData[2], educationData[3], educationData[4]]} />

        <TrumpUltimatumSection data={[healthData[3], healthData[4], healthData[5], healthData[6]]} />

        <FillonSection data={[technologyData[3], technologyData[4], technologyData[5], technologyData[6]]} />

        <FullCard />

        <DucanardSection data={[technologyData[1], technologyData[2], technologyData[3], technologyData[4], technologyData[5], technologyData[6]]} />

        <SubscribeCanard data={healthData[3]} />

        <PrisesAndCouacSection data={[entertainmentData[6], scienceData[3], businessData[4], technologyData[7], politicsData[8], educationData[5], lifestyleData[7], healthData[7], sportsData[3], entertainmentData[4], scienceData[4], businessData[5], technologyData[7], politicsData[9], educationData[6], sportsData[4]]} />

      </div>
    </div>
  );
}
