"use client";

import { motion } from "framer-motion";

const frontend = [
  ["HTML", "Experienced"],
  ["CSS", "Experienced"],
  ["SASS", "Experienced"],
  ["JavaScript", "Intermediate"],
  ["React.js", "Experienced"],
  ["TypeScript", "Intermediate"],
  ["Web 3.0", "Intermediate"],
  ["Material UI", "Experienced"],
];

const backend = [
  ["Node.js", "Experienced"],
  ["Express.js", "Experienced"],
  ["APIs", "Experienced"],
  ["Authenticity & Security", "Intermediate"],
  ["PostgreSQL", "Experienced"],
  ["Motoko", "Experienced"],
  ["SqlLite and Neon db", "Intermediate"],
  ["Strapi and Firebase db", "Intermediate"],
];

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[][];
}) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-4 text-blue-400">
        {title}
      </h3>

      <ul className="space-y-3">
        {skills.map(([name, level]) => (
          <li
            key={name}
            className="flex justify-between text-gray-300"
          >
            <span>{name}</span>
            <span className="text-sm text-gray-500">
              {level}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main
      className="relative min-h-screen py-32 px-6 text-white"
      style={{
        backgroundImage: "url('/experience-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" /> 

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience & Skills
        </motion.h1>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-700" />

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-1/2 pr-12 text-right mb-16"
          >
            <h3 className="text-xl font-semibold">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 mt-3">
              Designed and built scalable applications with
              modular architecture, REST APIs, and clean
              state management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ml-auto w-1/2 pl-12"
          >
            <h3 className="text-xl font-semibold">
              Performance & Security
            </h3>
            <p className="text-gray-400 mt-3">
              Focused on optimization, secure authentication,
              API protection, and real-world deployment
              concerns.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10">
          <SkillCard title="Frontend" skills={frontend} />
          <SkillCard title="Backend" skills={backend} />
        </div>
      </div>
    </main>
  );
}
