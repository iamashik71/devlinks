// pages/index.tsx
import CustomLinks from "@/components/CustomLinks";
import Layout from "@/components/Layout";
import { useAuth } from "../context/AuthContext";
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
    <Layout>
      <CustomLinks />
    </Layout>
  );
};

export default Home;
