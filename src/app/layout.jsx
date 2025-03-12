
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber";
import { motion } from "framer-motion";
import Foot from "@/app/Foot"
import Header from '../component/header';












const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Mohamed Photographer",
  description: "Photographe",


};



export default function RootLayout({ children }) {
  return (

  
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<Header />
<Navber/>
        {children}
     <Foot/>
  

      </body>
    </html>
  );
}
