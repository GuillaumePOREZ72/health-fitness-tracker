import React, { useState } from "react";
import { PlusCircle, Dumbbell, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Workout {
  id: number;
  date: string;
  type: string;
  duration: number;
  calories: number;
}

const Fitness: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    { id: 1, date: "2023-03-15", type: "Course", duration: 30, calories: 300 },
    {
      id: 2,
      date: "2023-03-17",
      type: "Musculation",
      duration: 45,
      calories: 200,
    },
    {
      id: 3,
      date: "2023-03-19",
      type: "Natation",
      duration: 40,
      calories: 350,
    },
    { id: 4, date: "2023-03-21", type: "Course", duration: 35, calories: 320 },
    {
      id: 5,
      date: "2023-03-23",
      type: "Musculation",
      duration: 50,
      calories: 220,
    },
  ]);

  const [newWorkout, setNewWorkout] = useState<Omit<Workout, "id">>({
    date: "",
    type: "",
    duration: 0,
    calories: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewWorkout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const workout: Workout = {
      id: Date.now(),
      ...newWorkout,
      duration: Number(newWorkout.duration),
      calories: Number(newWorkout.calories),
    };
    setWorkouts((prev) => [...prev, workout]);
    setNewWorkout({ date: "", type: "", duration: 0, calories: 0 });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Suivi Fitness</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PlusCircle className="mr-2" /> Ajouter un entraînement
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={newWorkout.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="text"
              name="type"
              value={newWorkout.type}
              onChange={handleInputChange}
              placeholder="Type d'entraînement"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="duration"
              value={newWorkout.duration}
              onChange={handleInputChange}
              placeholder="Durée (minutes)"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="number"
              name="calories"
              value={newWorkout.calories}
              onChange={handleInputChange}
              placeholder="Calories brûlées"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-300"
          >
            Ajouter l'entraînement
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Dumbbell className="mr-2" /> Historique des entraînements
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3">Date</th>
                <th className="p-3">Type</th>
                <th className="p-3">Durée (min)</th>
                <th className="p-3">Calories</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout.id} className="border-b dark:border-gray-700">
                  <td className="p-3">{workout.date}</td>
                  <td className="p-3">{workout.type}</td>
                  <td className="p-3">{workout.duration}</td>
                  <td className="p-3">{workout.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2" /> Progression des entraînements
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={workouts}>
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

      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2" /> Statistiques
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Total des entraînements
            </h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {workouts.length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Calories totales brûlées
            </h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {workouts.reduce((total, workout) => total + workout.calories, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
