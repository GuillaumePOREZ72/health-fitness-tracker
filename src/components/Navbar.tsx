import React from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Home,
  Activity,
  Utensils,
  User,
  BarChart2,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              <Activity size={24} />
              <span>FitTrack</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <NavLink to="/" icon={<Home size={18} />} text="Accueil" />
              <NavLink
                to="/dashboard"
                icon={<BarChart2 size={18} />}
                text="Tableau de bord"
              />
              <NavLink
                to="/fitness"
                icon={<Activity size={18} />}
                text="Fitness"
              />
              <NavLink
                to="/nutrition"
                icon={<Utensils size={18} />}
                text="Nutrition"
              />
              <NavLink to="/profile" icon={<User size={18} />} text="Profil" />
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  text: string;
}> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
