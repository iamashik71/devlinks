import { AppProps } from "next/app";
import "@/styles/globals.css";
import { AuthProvider } from "../context/AuthContext"; // Adjust path to your AuthContext

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
