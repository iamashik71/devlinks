import React, { ReactNode, useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import MockUp from "@/components/MockUp";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-gray-50 h-screen p-4">
      <NavBar />
      <div className="flex justify-between gap-6 pt-6 max-w-screen-xl m-auto">
        {isMobile ? null : <MockUp />}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
