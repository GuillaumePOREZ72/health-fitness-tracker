import { SignedIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <SignedIn>{children}</SignedIn>;
};

export default ProtectedRoute;
