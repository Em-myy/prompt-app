"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import logoImage from "../public/assets/images/logo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const { user, loading, handleLogout, avatarUrl, initial } = useAuth();
  const router = useRouter();

  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  const handleLogin = () => {
    router.push("/login");
  };

  const mobileLogout = () => {
    handleLogout();
    setToggleDropdown(false);
  };

  return (
    <nav className="flex justify-between md:justify-around w-screen mb-16 pt-3">
      <div className="mr-2">
        <Link href="/" className="flex gap-4 flex-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Prompt App</p>
        </Link>
      </div>

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
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="User avatar"
                  width={37}
                  height={37}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span>{initial}</span>
              )}
            </Link>
          </div>
        ) : (
          <>
            <button onClick={handleLogin} type="button" className="black_btn">
              Sign In
            </button>
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User avatar"
                width={37}
                height={37}
                className="rounded-full"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span>{initial}</span>
            )}

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={mobileLogout}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button onClick={handleLogin} type="button" className="black_btn">
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
