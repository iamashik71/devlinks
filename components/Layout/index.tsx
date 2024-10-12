import React, { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import MockUp from "@/components/MockUp";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-50 h-[100vh] p-4">
      <NavBar />
      <div className="flex justify-between gap-6 mt-6 max-w-screen-xl m-auto">
        <MockUp />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
