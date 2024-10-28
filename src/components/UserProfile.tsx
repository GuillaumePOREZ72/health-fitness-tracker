import { useUser } from "@clerk/clerk-react";

const UserProfile = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="mt-10">
      <h1>Bonjour {user.firstName} !</h1>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}

export default UserProfile;
