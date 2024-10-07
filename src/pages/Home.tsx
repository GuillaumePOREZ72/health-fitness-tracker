import React from "react";
import { Link } from "react-router-dom";
import { Activity, Utensils, TrendingUp } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenue sur FitTrack
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          to="/fitness"
          icon={<Activity className="w-12 h-12 text-indigo-600" />}
          title="Suivi Fitness"
          description="Enregistrez vos entraînements et suivez vos progrès au fil du temps."
        />
        <FeatureCard
          to="/nutrition"
          icon={<Utensils className="w-12 h-12 text-green-600" />}
          title="Suivi Nutritionnel"
          description="Suivez votre alimentation et atteignez vos objectifs nutritionnels."
        />
      </div>
      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2" /> Commencez votre voyage vers une
          meilleure santé
        </h2>
        <p className="mb-4">
          FitTrack vous aide à atteindre vos objectifs de santé et de forme
          physique en vous fournissant des outils puissants pour suivre vos
          progrès.
        </p>
        <Link
          to="/profile"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Configurez votre profil
        </Link>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-semibold ml-4">{title}</h2>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </Link>
);

export default Home;
