import React, { useState } from "react";
import { PlusCircle, Utensils, PieChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Meal {
  id: number;
  date: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

/**
 * Page de suivi nutritionnel.
 *
 * Cette page affiche un formulaire pour ajouter un repas, un tableau des repas
 * déjà ajoutés, un graphique en barres représentant la répartition des
 * macronutriments, et un résumé des valeurs nutritionnelles totales.
 *
 * @returns {JSX.Element} L'élément JSX de la page.
 */
const Nutrition: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: 1,
      date: "2023-03-15",
      name: "Petit-déjeuner",
      calories: 400,
      protein: 20,
      carbs: 50,
      fat: 15,
    },
    {
      id: 2,
      date: "2023-03-15",
      name: "Déjeuner",
      calories: 600,
      protein: 30,
      carbs: 70,
      fat: 20,
    },
    {
      id: 3,
      date: "2023-03-16",
      name: "Petit-déjeuner",
      calories: 350,
      protein: 15,
      carbs: 45,
      fat: 12,
    },
    {
      id: 4,
      date: "2023-03-16",
      name: "Déjeuner",
      calories: 550,
      protein: 28,
      carbs: 65,
      fat: 18,
    },
    {
      id: 5,
      date: "2023-03-17",
      name: "Petit-déjeuner",
      calories: 420,
      protein: 22,
      carbs: 55,
      fat: 14,
    },
  ]);

  const [newMeal, setNewMeal] = useState<Omit<Meal, "id">>({
    date: "",
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  /**
   * Met à jour l'état `newMeal` en fonction de la modification d'un
   * input de formulaire.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e L'événement de
   *    changement de valeur.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMeal((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Envoie le formulaire pour ajouter un repas et met à jour l'état
   * `meals` et `newMeal`.
   *
   * @param {React.FormEvent} e L'événement de soumission du formulaire.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const meal: Meal = {
      id: Date.now(),
      ...newMeal,
      calories: Number(newMeal.calories),
      protein: Number(newMeal.protein),
      carbs: Number(newMeal.carbs),
      fat: Number(newMeal.fat),
    };
    setMeals((prev) => [...prev, meal]);
    setNewMeal({
      date: "",
      name: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    });
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0);

  const nutritionData = [
    { name: "Protéines", value: totalProtein },
    { name: "Glucides", value: totalCarbs },
    { name: "Lipides", value: totalFat },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Suivi Nutritionnel</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PlusCircle className="mr-2" /> Ajouter un repas
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={newMeal.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="text"
              name="name"
              value={newMeal.name}
              onChange={handleInputChange}
              placeholder="Nom du repas"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="calories"
              value={newMeal.calories}
              onChange={handleInputChange}
              placeholder="Calories"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="protein"
              value={newMeal.protein}
              onChange={handleInputChange}
              placeholder="Protéines (g)"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="carbs"
              value={newMeal.carbs}
              onChange={handleInputChange}
              placeholder="Glucides (g)"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="fat"
              value={newMeal.fat}
              onChange={handleInputChange}
              placeholder="Lipides (g)"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Ajouter le repas
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Utensils className="mr-2" /> Journal alimentaire
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3">Date</th>
                <th className="p-3">Repas</th>
                <th className="p-3">Calories</th>
                <th className="p-3">Protéines</th>
                <th className="p-3">Glucides</th>
                <th className="p-3">Lipides</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal) => (
                <tr key={meal.id} className="border-b dark:border-gray-700">
                  <td className="p-3">{meal.date}</td>
                  <td className="p-3">{meal.name}</td>
                  <td className="p-3">{meal.calories}</td>
                  <td className="p-3">{meal.protein}g</td>
                  <td className="p-3">{meal.carbs}g</td>
                  <td className="p-3">{meal.fat}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PieChart className="mr-2" /> Répartition des macronutriments
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={nutritionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-green-100 dark:bg-green-900 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PieChart className="mr-2" /> Résumé nutritionnel
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NutritionStat
            label="Calories totales"
            value={totalCalories}
            unit="kcal"
            color="text-red-600 dark:text-red-400"
          />
          <NutritionStat
            label="Protéines totales"
            value={totalProtein}
            unit="g"
            color="text-blue-600 dark:text-blue-400"
          />
          <NutritionStat
            label="Glucides totaux"
            value={totalCarbs}
            unit="g"
            color="text-yellow-600 dark:text-yellow-400"
          />
          <NutritionStat
            label="Lipides totaux"
            value={totalFat}
            unit="g"
            color="text-green-600 dark:text-green-400"
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Un composant qui affiche une statistique nutritionnelle
 * avec une étiquette, une valeur, une unité et une couleur.
 *
 * @param {{ label: string; value: number; unit: string; color: string }}
 *   Les propriétés du composant.
 * @returns {React.ReactElement} Le composant.
 */
const NutritionStat: React.FC<{
  label: string;
  value: number;
  unit: string;
  color: string;
}> = ({ label, value, unit, color }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2">{label}</h3>
    <p className={`text-3xl font-bold ${color}`}>
      {value} {unit}
    </p>
  </div>
);

export default Nutrition;
