"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate} from "framer-motion";
import { useState, useRef } from "react";

/*
  1️⃣ Scroll-based navbar shrink + blur increase
  2️⃣ Magnetic cursor effect
  3️⃣ Mobile 3D menu animation
*/

const navItems = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* -------------------------------
     1️⃣ SCROLL-BASED EFFECTS
  -------------------------------- */
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 120], [80, 60]);
  const navBlur = useTransform(scrollY, [0, 120], [12, 24]);
  const navOpacity = useTransform(scrollY, [0, 120], [0.7, 0.9]);
  const backdropFilter = useMotionTemplate`blur(${navBlur}px)`;
  const backgroundColor = useMotionTemplate`rgba(0, 0, 0, ${navOpacity})`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
             height: navHeight,
             backdropFilter,
             backgroundColor,
             perspective: "1200px",
        }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <Link href="/" className="text-xl font-bold tracking-wide">
            Home
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 relative">
          {navItems.map((item) => (
            <MagneticLink
              key={item.name}
              href={item.href}
              label={item.name}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* -------------------------------
          3️⃣ MOBILE 3D MENU
      -------------------------------- */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10"
          style={{ transformOrigin: "top" }}
        >
          <div className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="text-lg text-gray-300 hover:text-white"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ----------------------------------
   2️⃣ MAGNETIC CURSOR LINK
----------------------------------- */
function MagneticLink({
  href,
  label,
  hovered,
  setHovered,
}: {
  href: string;
  label: string;
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }
  const MotionLink = motion(Link);

  return (
     <MotionLink
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        reset();
        setHovered(null);
      }}
      onMouseEnter={() => setHovered(label)}
      className="relative text-gray-300 hover:text-white transition"
      whileHover={{ rotateX: 15, rotateY: -15, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {label}

      {hovered === label && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500"
        />
      )}
    </MotionLink>
  );
}
