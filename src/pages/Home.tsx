import React from "react";
import { Link } from "react-router-dom";
import { Activity, Utensils, ChartNoAxesCombined } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Page d'accueil de l'application.
 *
 * Cette page affiche un titre, un sous-titre et un bouton pour commencer.
 *
 * @returns {React.ReactElement} L'élément JSX de la page.
 */
const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl text-gray-700 font-bold text-center mt-5 mb-14">
        Progressez intelligemment, suivez chaque étape avec{" "}
        <span className="bg-clip-text text-5xl text-transparent bg-gradient-to-b from-indigo-900 to-indigo-400">
          FitTrack
        </span>
        .
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
      <FeatureCard
        to="/stats"
        icon={<ChartNoAxesCombined className="w-12 h-12 text-pink-600" />}
        title="Commencez votre voyage vers une meilleure santé"
        description="FitTrack vous aide à atteindre vos objectifs de santé et de forme
          physique en vous fournissant des outils puissants pour suivre vos
          progrès."
      />

      <Link
        to="/profile"
        className="inline-block bg-indigo-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-indigo-800 transition-colors duration-300"
      >
        Configurez votre profil
      </Link>
    </div>
  );
};

/**
 * Un composant qui affiche une carte de fonctionnalité avec un lien.
 *
 * @param {{ to: string; icon: React.ReactNode; title: string; description: string }} props
 *   Les propriétés du composant.
 * @returns {React.ReactElement} Le composant.
 */
const FeatureCard: React.FC<{
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {icon}
      </motion.div>
      <h2 className="text-2xl text-gray-700 dark:text-white font-semibold ml-4">
        {title}
      </h2>
    </div>
    <p className=" dark:text-gray-300">{description}</p>
  </Link>
);

export default Home;
