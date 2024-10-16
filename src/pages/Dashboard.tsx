import React from "react";
import { Activity, Utensils, TrendingUp, BarChart2 } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fitnessData = [
  { date: "2023-03-15", duration: 30, calories: 300 },
  { date: "2023-03-17", duration: 45, calories: 200 },
  { date: "2023-03-19", duration: 40, calories: 350 },
  { date: "2023-03-21", duration: 35, calories: 320 },
  { date: "2023-03-23", duration: 50, calories: 220 },
];

const nutritionData = [
  { date: "2023-03-15", calories: 1000, protein: 50, carbs: 120, fat: 35 },
  { date: "2023-03-16", calories: 900, protein: 43, carbs: 110, fat: 30 },
  { date: "2023-03-17", calories: 970, protein: 52, carbs: 125, fat: 32 },
  { date: "2023-03-18", calories: 1050, protein: 55, carbs: 130, fat: 38 },
  { date: "2023-03-19", calories: 980, protein: 48, carbs: 115, fat: 33 },
];

/**
 * La page du tableau de bord affiche les activités physiques récentes, l'apport
 * nutritionnel récent, ainsi qu'un résumé des performances de la semaine.
 *
 * @returns {JSX.Element} L'élément JSX de la page.
 */
const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2" /> Activité physique récente
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={fitnessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="duration"
                stroke="#8884d8"
                name="Durée (min)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="calories"
                stroke="#82ca9d"
                name="Calories brûlées"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Utensils className="mr-2" /> Apport nutritionnel récent
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={nutritionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="protein"
                stackId="a"
                fill="#8884d8"
                name="Protéines"
              />
              <Bar dataKey="carbs" stackId="a" fill="#82ca9d" name="Glucides" />
              <Bar dataKey="fat" stackId="a" fill="#ffc658" name="Lipides" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2" /> Résumé de la semaine
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={
              <Activity className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            }
            title="Entraînements"
            value="5"
            description="sessions cette semaine"
          />
          <StatCard
            icon={
              <BarChart2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            }
            title="Calories brûlées"
            value="1,390"
            description="kcal cette semaine"
          />
          <StatCard
            icon={
              <Utensils className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            }
            title="Apport calorique moyen"
            value="1,980"
            description="kcal par jour"
          />
          <StatCard
            icon={
              <TrendingUp className="w-8 h-8 text-red-600 dark:text-red-400" />
            }
            title="Progression"
            value="+12%"
            description="vs semaine précédente"
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Un composant qui affiche des statistiques.
 *
 * @param {{ icon: React.ReactNode; title: string; value: string; description: string }} props
 *   Les propriétés du composant.
 * @returns {React.ReactElement} Le composant.
 */
const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}> = ({ icon, title, value, description }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default Dashboard;
