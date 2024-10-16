import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Nutrition from "./pages/Nutrition";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

/**
 * The main app component, which wraps the entire app in a router and displays
 * the navigation bar at the top.
 *
 * The app has five routes: Home, Fitness, Nutrition, Profile, and Dashboard.
 *
 * @returns {JSX.Element} The app component.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="mt-8 mx-auto w-fit">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/fitness"
              element={
                <SignedIn>
                  <Fitness />
                </SignedIn>
              }
            />
            <Route
              path="/nutrition"
              element={
                <SignedIn>
                  <Nutrition />
                </SignedIn>
              }
            />
            <Route
              path="/profile"
              element={
                <SignedIn>
                  <Profile />
                </SignedIn>
              }
            />
            <Route
              path="/dashboard"
              element={
                <SignedIn>
                  <Dashboard />
                </SignedIn>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
