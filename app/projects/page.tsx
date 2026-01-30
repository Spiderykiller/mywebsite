"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Anna Market",
    url: "https://anna-market-659b.vercel.app",
    image: "/projects/anna-market.jpg",
    description:
      "A full-scale commercial platform built for Anna Market, a company specializing in furniture, home décor, and kitchen materials. The project emphasizes performance, clarity of user experience, and scalable backend architecture suitable for real business operations.",
    tech: ["Next.js", "Neon DB", "PostgreSQL", "SQL"],
  },
  {
    title: "Custom E-Commerce Platform",
    url: "https://e-commerce-site-6pu2.vercel.app",
    image: "/projects/ecommerce.jpg",
    description:
      "A robust e-commerce solution designed for high product volume and long-term scalability. The system focuses on structured data modeling, fast rendering, and clean separation between frontend logic and database operations.",
    tech: ["Next.js", "Neon DB", "PostgreSQL", "SQL"],
  },
  {
    title: "OpenSee — NFT Marketplace Concept",
    url: "https://opensee-webappp.vercel.app",
    image: "/projects/opensee.jpg",
    description:
      "An experimental NFT marketplace inspired by OpenSea, redesigned with a modern, minimal interface and decentralized architecture. This project explores Web3 interaction patterns, blockchain-backed storage, and decentralized application workflows.",
    tech: ["React", "Vite", "Motoko", "Internet Computer"],
  },
  {
    title: "Puma Website Rebranding",
    url: "https://rebranding-blond.vercel.app",
    image: "/projects/puma-rebrand.jpg",
    description:
      "A complete rebranding concept for Puma’s digital presence. The project reimagines the brand with a sharper visual identity, modern layouts, and a flexible content architecture powered by headless CMS tools.",
    tech: ["Next.js", "Strapi", "Firebase"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32"
          style={{
                 backgroundImage: "url('/experience-bg.jpg')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
           }}
       >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center mb-32"
      >
        <h1 className="text-5xl font-bold mb-6">Selected Projects</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          A curated collection of production-ready platforms, experimental
          concepts, and design-driven projects demonstrating my approach to
          modern frontend engineering and system architecture.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto space-y-40">
        {projects.map((project, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.section
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-14 items-center ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} homepage`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  View Live Project →
                </Link>
              </div>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}
