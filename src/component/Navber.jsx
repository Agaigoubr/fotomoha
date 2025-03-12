"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // لتحديد الصفحة النشطة

export default function Navber() {
  const pathname = usePathname(); // معرفة الصفحة الحالية

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className=" flex justify-center backdrop-blur-sm mt-[5px] ml-[10px] rounded-full gap-6 px-6 py-2 bg-white/50 shadow-md">
      {navItems.map((item, index) => (
        <motion.div
          key={item.name}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link
            href={item.path}
            className={`font-semibold rounded-lg px-4 py-2 transition-all duration-300
              ${
                pathname === item.path
                  ? "bg-black text-white shadow-lg"
                  : "text-black hover:bg-red-100 hover:text-lime-950"
              }`}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
