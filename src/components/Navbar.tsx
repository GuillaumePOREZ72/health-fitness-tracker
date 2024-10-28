import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Home, Activity, Utensils, User, BarChart2 } from "lucide-react";
import DarkMode from "./DarkMode";
import Hamburger from "./Hamburger";

/**
 * The navbar component.
 *
 * This component renders a navigation bar with links to all pages. On small
 * screens, the links are hidden and a hamburger menu is displayed. Clicking the
 * hamburger menu toggles the visibility of the links.
 *
 * @returns {React.ReactElement} The navbar component.
 */
const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => {
      console.log("isOpen:", !prev);
      return !prev;
    }); // Toggle the isOpen state
  };

  return (
    <nav className="light:bg-gray-100 dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              <Activity size={24} />
              <span className="text-4xl">FitTrack</span>
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
          <div className="flex items-center space-x-4">
            <div
              className={`absolute right-4 top-16 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-48 ${
                isOpen ? "block" : "hidden"
              }`}
            >
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
            <div className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
              <DarkMode />
            </div>
            
          </div>
        </div>
      </div>
      {children}
    </nav>
  );
};

const NavLink = React.memo(
  ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
    <Link
      to={to}
      className="flex items-center space-x-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 my-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-75"
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
);

export default Navbar;
