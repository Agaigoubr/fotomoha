"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["foto3.jpg", "foto16.jpg", "foto10.jpg", "foto4.jpg"];

function GallerySection({ onImageClick }) {
  return (
    <div className="max-w-screen-xl 5xl:max-w-screen-3xl mx-auto py-6 lg:py-24 flex flex-col justify-center">
      <motion.div
        className="flex flex-col sm:flex-row mx-auto gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {images.map((src, index) => (
          <motion.a
            key={index}
            href="#_"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => onImageClick(index)}
          >
            <motion.img
              src={src}
              className="h-full w-full object-cover rounded-xl"
              alt="image"
              whileHover={{ scale: 1.1 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

function ImageModal({ selectedIndex, setSelectedIndex, onClose }) {
  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            className="w-full h-full object-contain cursor-pointer"
            alt="Selected"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={handleNextImage} // عند النقر، تنتقل للصورة التالية
            drag="y" // السحب عمودي فقط
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.3}
            onDragEnd={(event, info) => {
              if (info.offset.y > 100) {
                handleNextImage(); // عند السحب للأسفل، انتقل للصورة التالية
              } else if (info.offset.y < -100) {
                onClose(); // عند السحب للأعلى، أغلق المودال
              }
            }}
          />
          <button
            className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Homcc() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="bg-zinc-80 overflow-hidden">
      <GallerySection onImageClick={setSelectedIndex} />
      <ImageModal
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}
