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
            <img
                src="/tracy.svg"
                alt="Tracy logo"
                className="h-9 w-9"
            />
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

          <div className="hidden md:flex items-center gap-3">
            <a
                href="https://calendly.com/tracy-ai/discutons-de-votre-projet"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="flex items-center gap-3 border border-[#235789] px-6 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] hover:bg-[#235789] hover:text-white transition-all duration-300"
            >
              <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ⬡
              </motion.span>
              Contact us
            </a>

            <a
                href="https://app.tracy-ai.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="flex items-center gap-3 border border-[#235789] px-6 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] hover:bg-[#235789] hover:text-white transition-all duration-300"
            >
              <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ⬡
              </motion.span>
              Log in
            </a>
          </div>

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
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="border border-[#235789] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] text-center"
                >
                  Log in
                </a>

                <a
                    href="https://calendly.com/tracy-ai/discutons-de-votre-projet"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="border border-[#235789] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#4e9ad0] text-center"
                >
                  Contact us
                </a>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
}