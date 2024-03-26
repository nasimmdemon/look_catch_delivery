import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Look Catch | The Ride",
  description: "Simplicity. Seamless. Your journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#68758A] font-poppins">
        <Header />
        {children}
      </body>
    </html>
  );
}
