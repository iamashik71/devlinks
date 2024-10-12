import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const NavBar = () => {
  const { user, logout } = useAuth();
  const route = useRouter();
  const currentRoute = route.pathname;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePreviewLink = () => {
    return console.log("NavBar");
  };

  const handleGoBackToLogin = () => {
    if (user) {
      logout();
      route.push("/login");
    } else {
      route.push("/");
    }
  };

  return (
    <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-6 rounded-md bg-white shadow-sm">
      <Image
        src={
          isMobile
            ? "/icons/logo-devlinks-small.svg"
            : "/icons/logo-devlinks-large.svg"
        }
        width={isMobile ? 32 : 108}
        height={isMobile ? 32 : 100}
        alt="dev links"
        onClick={handleGoBackToLogin}
      />
      <ul className={styles.links}>
        <li
          className={`${styles.link} ${
            currentRoute === "/links" ? styles.activeLink : ""
          }`}
          onClick={() => route.push("/links")}
        >
          <span></span>
          Links
        </li>

        <li
          className={`${styles.link} ${
            currentRoute === "/profile" ? styles.activeLink : ""
          }`}
          onClick={() => route.push("/profile")}
        >
          <span></span>
          Profile Details
        </li>
      </ul>
      <button className={styles.previewButton} onClick={handlePreviewLink}>
        Preview
      </button>
    </nav>
  );
};

export default NavBar;
