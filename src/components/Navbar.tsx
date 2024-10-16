import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Home, Activity, Utensils, User, BarChart2 } from "lucide-react";
import DarkMode from "./DarkMode";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
            <div className="hidden sm:flex space-x-4">
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
          <div className="sm:hidden">
            <Hamburger isOpen={isOpen} toggled={handleToggle} />
          </div>
          <div className="sm:hidden">
            <div className={`flex flex-col ${isOpen ? "block" : "hidden"}`}>
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

          <div className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
            <DarkMode />
          </div>
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
    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 my-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-75"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
