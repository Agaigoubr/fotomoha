"use client";
import { motion } from "framer-motion";

export default function Homeb() {
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* عنصر 1 - Wines */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 3, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
          >
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <motion.img
                src="foto15.jpg"
                alt="Wines"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
              <motion.h3
                className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Wines
              </motion.h3>
            </a>
          </motion.div>

          {/* عنصر 2 - Gin */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
          >
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <motion.img
                src="foto6.jpg"
                alt="Gin"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
              <motion.h3
                className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gin
              </motion.h3>
            </a>

            {/* العنصرين داخل عنصر Gin */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              {/* عنصر 3 - Whiskey */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <motion.img
                  src="foto17.jpg"
                  alt="Whiskey"
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <motion.h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Whiskey
                </motion.h3>
              </motion.a>

              {/* عنصر 4 - Vodka */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <motion.img
                  src="foto9.jpg"
                  alt="Vodka"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <motion.h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Vodka
                </motion.h3>
              </motion.a>
            </div>
          </motion.div>

          {/* عنصر 5 - Brandy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
          >
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <motion.img
                src="foto8.jpg"
                alt="Brandy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
              <motion.h3
                className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Brandy
              </motion.h3>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
