// components/CombinedCards.tsx
import AfriqueCard from "./AfriqueCard";
import EditoEspion from "./EditoEspion";

const AfriqueAndEspion = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6">
      <AfriqueCard />
      <EditoEspion />
    </div>
  );
};

export default AfriqueAndEspion;
