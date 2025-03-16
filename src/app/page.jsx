"use client";

import Image from "next/image";
import { Anton, Righteous } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Homeb from "@/component/Homeb";
import Homcc from "@/component/Homcc";
import styles from "./page.module.css";


const righteous = Righteous({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(
      "Photography Portrait Photography Commercial Photography Landscape. Storytelling Photo Editing Color Grading Correction Advanced Retouching."
    );
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* الصورة */}
      <div className="flex justify-center">
        <Image
          src="/ava.jpg"
          width={1330}
          height={535}
          alt="Photography"
          className="w-full max-w-[530px] h-auto mt-3 rounded-xl"
        />
      </div>

      {/* العنوان */}
      <div className={`${righteous.className} text-center mt-5`}>
        <h1 className="text-3xl sm:text-5xl">About Us</h1>
        <motion.h1
          className="text-lg sm:text-2xl mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.h1>
      </div>

      {/* نص متحرك */}
      <div className={`${anton.className} overflow-hidden mt-5`}>
        <motion.div
          className="scrolling-text text-2xl sm:text-4xl whitespace-nowrap"
          initial={{ x: "-100%" }}
          animate={{ x: "50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="bg-red-200 px-2 py-1 rounded-xl inline-block">
            HELLO, I'M Mohamed AGAIGOU - Photographer & Editor
          </div>
        </motion.div>
      </div>























      {/* الأقسام */}
      <Homeb />
      <Homcc />
    </div>
  );
}
