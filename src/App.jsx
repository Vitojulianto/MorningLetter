import React from "react";
import { motion } from "framer-motion";

export default function LovePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      {/* Animasi love goyang */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-8xl"
      >
        ❤️
      </motion.div>

      {/* Pesan manis */}
      <h1 className="text-4xl mt-6 font-bold text-red-600">
        Good Morning Laura 💕
      </h1>
      <p className="mt-3 text-lg text-gray-700">
        Goodluck for your school and may your day be as beautiful as your smile ❤️🌸
      </p>
    </div>
  );
}
