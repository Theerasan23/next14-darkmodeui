import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Colormode from "./components/colormode";
import Navbar  from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={`${inter.className } "dark"` }>
      <title>webbaord</title>
      
        <body className="dark:bg-[#070C0B] dark:text-white">

          <main>
            <div className="min-h-screen flex flex-col justify-between ">
                <Navbar />
              <div className="mb-[15px]">
                  <Colormode />
                  {children}
              </div>
              <Footer />
            </div>
          </main>
       
        </body>
      
    </html>
  );
}
