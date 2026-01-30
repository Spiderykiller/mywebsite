"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: "1200px" }}
      >
        {/* 3D CARD */}
        <motion.div
          whileHover={{
            rotateX: 10,
            rotateY: -10,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-black/60 border border-white/10 rounded-2xl p-10 shadow-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              Beemnet
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Computer Engineer focused on building fast, scalable, and
            visually refined web applications.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-6">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 rounded-lg text-white font-medium shadow-lg hover:bg-blue-600 transition"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-500 rounded-lg text-gray-200 hover:border-white transition"
            >
              About Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
