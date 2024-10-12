import NavBar from "@/components/NavBar";
import CustomLinks from "@/components/CustomLinks";
import MockUp from "@/components/MockUp";

import { useAuth } from "../context/AuthContext"; // Adjust path to your AuthContext
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={`bg-gray-50 h-[100vh] p-4`}>
      <NavBar />
      <div className="flex justify-between gap-6 mt-6 max-w-screen-xl m-auto">
        <MockUp />
        <CustomLinks />
      </div>
    </div>
  );
};

export default Home;
