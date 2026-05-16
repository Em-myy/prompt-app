"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

type formType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const supabase = createClient();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <h1>Login Page</h1>
      <section>
        <div>
          <form>
            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                required
                onChange={handleFormChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
