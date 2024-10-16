import React, { useState } from "react";
import { User, Save } from "lucide-react";

interface UserProfile {
  name: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
}

/**
 * Un composant qui affiche les informations de l'utilisateur
 * et permet de les modifier.
 *
 * @returns {React.ReactElement} Le composant.
 */
const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    age: 30,
    height: 175,
    weight: 70,
    goal: "Perdre du poids",
  });

  const [isEditing, setIsEditing] = useState(false);

  /**
   * Met à jour l'état `profile` en fonction de la modification d'un
   * input de formulaire.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e
   *   L'événement de changement de valeur.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Envoie le formulaire pour modifier le profil et met à jour
   * l'état `isEditing` pour cacher le formulaire.
   *
   * @param {React.FormEvent} e L'événement de soumission du formulaire.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);

    console.log("Profile saved:", profile);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <User className="mr-2" /> Profil Utilisateur
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Âge
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={profile.age}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Taille (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={profile.height}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Poids (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={profile.weight}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="goal"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Objectif
              </label>
              <select
                id="goal"
                name="goal"
                value={profile.goal}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <option>Perdre du poids</option>
                <option>Prendre du muscle</option>
                <option>Maintenir mon poids</option>
                <option>Améliorer ma condition physique</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="mr-2" /> Sauvegarder
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <ProfileItem label="Nom" value={profile.name} />
            <ProfileItem label="Âge" value={`${profile.age} ans`} />
            <ProfileItem label="Taille" value={`${profile.height} cm`} />
            <ProfileItem label="Poids" value={`${profile.weight} kg`} />
            <ProfileItem label="Objectif" value={profile.goal} />
            <button
              onClick={() => setIsEditing(true)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Modifier le profil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileItem: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => (
  <div className="flex justify-between items-center border-b dark:border-gray-700 py-2">
    <span className="text-gray-600 dark:text-gray-400">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Profile;
