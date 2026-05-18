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
  return (
    <main>
      <h1>Profile Page</h1>
      <div></div>
      <section>
        <p>
          You have successfullty logged in <span>{user.email}</span>
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
