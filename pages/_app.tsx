import "@/styles/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import { LinksProvider } from "@/context/LinkContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LinksProvider>
        <Component {...pageProps} />
      </LinksProvider>
    </AuthProvider>
  );
}

export default App;
