import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const NavBar = () => {
  const { user, logout } = useAuth();
  const route = useRouter();
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
        // className={styles.logo}
        onClick={handleGoBackToLogin}
      />
      <ul className={styles.links}>
        <li
          className={styles.link}
          onClick={() => route.push("/links")}
          data-link="links"
        >
          <span></span>
          {!isMobile && "Links"}
        </li>

        <li
          className={styles.link}
          onClick={() => route.push("/profile")}
          data-link="profile"
        >
          <span></span>
          {!isMobile && "Profile Details"}
        </li>
      </ul>
      <button className={styles.previewButton} onClick={handlePreviewLink}>
        {isMobile ? (
          <img
            src={"/icons/icon-preview-header.svg"}
            // className={styles.eyeIcon}
          />
        ) : (
          "Preview"
        )}
      </button>
    </nav>
  );
};

export default NavBar;
