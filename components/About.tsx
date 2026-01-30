"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gray-950 border-t border-gray-800 overflow-hidden"
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I am a computer engineering student driven by a deep curiosity
            about how systems work — from low-level logic to high-level
            software architecture. I don’t just write code to make things
            function; I design systems to make them{" "}
            <span className="text-white font-medium">
              robust, understandable, and scalable
            </span>.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            My approach to engineering is grounded in first principles.
            Before choosing tools or frameworks, I focus on understanding
            the problem space, identifying constraints, and reasoning about
            trade-offs. This allows me to build solutions that remain reliable
            as complexity grows.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I value clarity over cleverness and maintainability over shortcuts.
            Whether I am designing a user interface or structuring backend
            logic, I prioritize clean abstractions, predictable behavior,
            and long-term performance. I believe good software should be easy
            to reason about — even months after it’s written.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I am continuously refining my skills through hands-on projects,
            studying system design, and exploring modern engineering practices.
            My goal is to grow into an engineer who can contribute meaningfully
            to complex products, collaborate effectively with teams, and build
            technology that stands the test of time.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            rotateX: 6,
            rotateY: -6,
            scale: 1.02,
          }}
          className="relative mx-auto w-full max-w-md aspect-square rounded-3xl bg-black/40 backdrop-blur-xl border border-gray-800 shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* IMAGE */}
          <div className="absolute inset-3 rounded-2xl overflow-hidden">
            <Image
              src="/projects/link.jpg"
              alt="About me portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* IMAGE GLOW */}
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
