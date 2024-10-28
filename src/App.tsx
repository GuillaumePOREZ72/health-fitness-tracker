import { BrowserRouter as Router } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  // useUser,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";



function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar>
          <div className="pb-1 mb-5 mx-auto w-fit">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Navbar>
        <div className="container mx-auto px-4 py-8">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
