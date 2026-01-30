"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  MessageSquare,
} from "lucide-react";

const contacts = [
  {
    label: "Phone",
    value: "+251 91 640 2817", // replace with your real number
    icon: Phone,
    href: "https://www.linkedin.com/in/beemnet-abegaz",
  },
  {
    label: " Work Email",
    value: "beemnettilahun15@gmail.com", // replace
    icon: Mail,
    href: "https://www.linkedin.com/in/beemnet-abegaz",
  },
  {
    label: "Personal Email",
    value: "beemnettilahun15@yahoo.com", // replace
    icon: Mail,
    href: "https://www.linkedin.com/in/beemnet-abegaz",
  },
  {
    label: "LinkedIn",
    value: "beemnet-abegaz",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/beemnet-abegaz",
  },
  {
    label: "GitHub",
    value: "Spiderykiller",
    icon: Github,
    href: "https://github.com/Spiderykiller",
  },
  {
    label: "Telegram",
    value: "@TheSilentJackal", // replace
    icon: Send,
    href: "https://t.me/TheSilentJackal",
  },
  {
    label: "Discord",
    value: "Discord Server",
    icon: MessageSquare,
    href: "https://discord.com/channels/1395720091571585077/1395720265060581516", // replace
  },
];

export default function ContactPage() {
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
        className="max-w-4xl mx-auto text-center mb-24"
      >
        <h1 className="text-5xl font-bold mb-6">Let’s Connect</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether it’s collaboration, freelance work, or a serious technical
          discussion — these are the fastest ways to reach me.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {contacts.map((item, i) => {
          const Icon = item.icon;
          const MotionLink = motion(Link);
          return (
            <MotionLink
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              className="group bg-black/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex items-center gap-5 shadow-xl"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition">
                  {item.value}
                </p>
              </div>
            </MotionLink>
          );
        })}
      </div>
    </main>
  );
}
