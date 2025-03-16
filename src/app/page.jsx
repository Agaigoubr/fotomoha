"use client";

import Image from "next/image";
import { Anton, Righteous } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Homeb from "@/component/Homeb";
import Homcc from "@/component/Homcc";
import styles from "./page.module.css";

// تحميل الخطوط
const righteous = Righteous({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Home() {
  // تجنب استخدام النصوص المتغيرة مباشرة في الـ SSR
  const [text, setText] = useState("");

  useEffect(() => {
    setText(
      "Photography Portrait Photography Commercial Photography Landscape. Storytelling Photo Editing Color Grading Correction Advanced Retouching."
    );
  }, []);

  return (
   

<div>





 <Image
        src="/ava.jpg"
        width={1330}
        height={535}
        alt="Photography"
        className="   w-[530px] h-[535px] mt-[10px] ml-[10px]   rounded-xl"
      />







      {/* العنوان + التحريك */}
      <div className={righteous.className}>
        <div className=" ml-[10px] mt-[20px]">
          <h1 className="text-5xl">About Us</h1>
          <motion.h1
            className="text-3xl mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.h1>
        </div>
      </div>

      {/* نص متحرك أفقيًا */}
      <div className={anton.className}>
        <motion.div
          className="scrolling-text text-8xl"
          initial={{ x: "-100%" }}
          animate={{ x: "50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="bg-red-200 rounded-xl">
            <span className="pe-1">
              HELLO, I'M Mohamed AGAIGOU - Photographer & Editor{" "}
              <span className="spacer">HELLO, I'M Mohamed AGAIGOU</span>
            </span>
          </div>
        </motion.div>
      </div>


      {/* أقسام أخرى */}
      <Homeb />
      <Homcc />
      </div> 
  );
}
