import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    redirect("/login");
  }

  const displayName =
    user.user_metadata.display_name ||
    user.user_metadata.full_name ||
    user.user_metadata.username ||
    user.email;
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
