"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems: NavItem[] = [
    { label: "Features", href: "#features" },
    { label: "Protocol", href: "#protocol" },
    { label: "Security", href: "#security" },
    {
      label: "Docs",
      href: "https://api.tracy-ai.com/docs/",
      external: true,
    },
  ];

  return (
      <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                  ? "bg-[#19222a]/90 backdrop-blur-2xl border-b border-[#235789]/20"
                  : ""
          }`}
      >
        <div className="mx-auto flex max-w-350 items-center justify-between px-8 py-5">
          <a href="#" className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
              <polygon
                  points="18,2 34,10 34,26 18,34 2,26 2,10"
                  stroke="#235789"
                  strokeWidth="1"
                  fill="#1b2c3c"
              />
              <polygon
                  points="18,8 28,13.5 28,22.5 18,28 8,22.5 8,13.5"
                  stroke="#4e9ad0"
                  strokeWidth="0.8"
                  fill="none"
              />
              <text
                  x="18"
                  y="22"
                  textAnchor="middle"
                  fill="#4e9ad0"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
              >
                T
              </text>
            </svg>
            <span className="font-black tracking-[0.15em] text-[#f2f2f2] uppercase text-sm">
            TRACY
          </span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
                <li key={item.label}>
                  <a
                      href={item.href}
                      {...(item.external
                          ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                          : {})}
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f2f2f2]/35 hover:text-[#4e9ad0] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
            ))}
          </ul>

          <a
              href="https://app.tracy-ai.com/"
              data-hover
              className="hidden md:flex items-center gap-3 border border-[#235789] px-6 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] hover:bg-[#235789] hover:text-white transition-all duration-300"
          >
            <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ⬡
            </motion.span>
            Log in
          </a>

          <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#f2f2f2]/60 text-xl"
              aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden border-t border-[#235789]/20 bg-[#19222a]/95 backdrop-blur-xl px-8 py-6 flex flex-col gap-5"
              >
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        {...(item.external
                            ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                            : {})}
                        onClick={() => setOpen(false)}
                        className="font-mono text-xs uppercase tracking-[0.2em] text-[#f2f2f2]/50 hover:text-[#4e9ad0]"
                    >
                      {item.label}
                    </a>
                ))}

                <a
                    href="https://app.tracy-ai.com/"
                    onClick={() => setOpen(false)}
                    className="border border-[#235789] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] text-center"
                >
                  Log in
                </a>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
}