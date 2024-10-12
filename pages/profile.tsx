// pages/profile.tsx
import ProfileDetails from "@/components/ProfileDetails";
import Layout from "@/components/Layout";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
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
      <ProfileDetails />
    </Layout>
  );
};

export default Profile;
