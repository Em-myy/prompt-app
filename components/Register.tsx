"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

type formType = {
  email: string;
  password: string;
};

const Register = () => {
  const supabase = createClient();

  const [formData, setFormData] = useState<formType>({
    email: "",
    password: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/profile`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main>
        <h1>SIGN UP PAGE</h1>
        <section>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-y-2">
              <input
                type="email"
                placeholder="xyz@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="bg-amber-300"
              />
              <input
                type="password"
                placeholder="....."
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                required
                className="bg-blue-400"
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
