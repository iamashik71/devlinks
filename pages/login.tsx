import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebaseClient";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      router.push("/");
    } catch (e) {
      console.error("Error signing in with Google:", e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
