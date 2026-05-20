"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import logoImage from "../public/assets/images/logo.svg";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { user, loading, handleLogout } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="flex-between flex-w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={logoImage}
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt App</p>
      </Link>

      <div className="sm:flex hidden">
        {user && !loading ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={logoImage}
                alt="Profile Image"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            <button onClick={handleLogin} type="button" className="black_btn">
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
