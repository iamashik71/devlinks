import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import CustomLinks from "@/components/CustomLinks";
import MockUp from "@/components/MockUp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`bg-gray-50 h-[100vh] p-4`}>
      <NavBar />
      <div className="flex justify-between gap-6 mt-6 max-w-screen-xl m-auto">
        <MockUp />
        <CustomLinks />
      </div>
    </div>
  );
}
