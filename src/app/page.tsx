import NewsHighlightRow from "@/components/NewHighlightsRow";
import Image from "next/image";
import businessData from '../../public/data/business.json'
import sportsData from '../../public/data/business.json'
import politicsData from '../../public/data/business.json'
import healthData from '../../public/data/health.json'
import scienceData from '../../public/data/science.json'
import entertainmentData from '../../public/data/entertainment.json'
import technologyData from '../../public/data/technology.json'
import educationData from '../../public/data/education.json'
import HeroSection from "@/components/HeroSection";
import SecondIndexSection from "@/components/SecondIndexSection";
import CollectorsSection from "@/components/CollectorsSection";
import AfriqueAndEspion from "@/components/AfriqueAndEspion";
import DossiersSection from "@/components/DossiersSection";
import TrumpUltimatumSection from "@/components/TrumpUltimatumSection";
import FillonSection from "@/components/FillonSection";
import DossierSection from "@/components/DucanardSection";
import SubscribeCanard from "@/components/SubscribeCanard";
import PrisesAndCouacSection from "@/components/PrisesAndCouacSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
  <NewsHighlightRow data={[businessData[0],sportsData[0],politicsData[0]]}/>
  <HeroSection />
  <SecondIndexSection />
  <CollectorsSection />
  <AfriqueAndEspion />
  <DossiersSection />
  <TrumpUltimatumSection />
  <FillonSection />
  <DossierSection />
  <SubscribeCanard />
  <PrisesAndCouacSection />
  <Footer />
    </div>
  );
}
