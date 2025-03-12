"use client";  
import React from 'react'
import Image from 'next/image'
import { Anton, Righteous, } from "next/font/google";
import { motion } from "framer-motion";


const righteous = Righteous({ subsets: ["latin"], weight: "400" });


export default function Content() {
  return (
    <div className='  bg-red-100 py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  ) 
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
      <div className={righteous.className}>
        <div className="flex justify-between items-end">
          {/* Animated h1 with improved animation */}
          <motion.h1
            className="text-[14vw] leading-[0.8] mt-10"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            Mohmade AGAIGOU Photography
          </motion.h1>
  
          {/* Animated p with staggered effect */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: 'easeOut',
            }}
          >
            ©COPYRIGHT 📽
          </motion.p>
        </div>
      </div>
    );
  };

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <p herf="/">Home</p>
                <p>Projects</p>
                <p>Work</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
                <p>News</p>
                <p>Learn</p>
                <p>Certification</p>
                <p>Publications</p>
            </div>
        </div>
    )
}