"use client";
import { useAuth } from "@/context/AuthContext";

const ProfilePage = () => {
  const { displayName } = useAuth();

  return (
    <main>
      <h1>Profile Page</h1>
      <div></div>
      <section>
        <p>
          You have successfullty logged in <strong>{displayName}</strong>
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
