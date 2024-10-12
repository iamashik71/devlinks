import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/links");
    }
  }, [user, router]);

  const handleLogin = () => {
    router.push("/login");
  };

  if (user) {
    return <div>Redirecting...</div>;
  }

  return (
    <div
      className={`bg-gray-50 h-[100vh] p-4 flex justify-center items-center`}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          You are few clicks away from using Devlink app...
        </h1>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Home;
