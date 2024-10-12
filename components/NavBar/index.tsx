import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLink = () => {
    return console.log("NavBar");
  };

  const handleGoBackToLogin = () => {
    return console.log("NavBar");
  };

  const handlePreviewLink = () => {
    return console.log("NavBar");
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
        <li className={styles.link} onClick={handleLink} data-link="links">
          <span></span>
          {!isMobile && "Links"}
        </li>

        <li className={styles.link} onClick={handleLink} data-link="profile">
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
