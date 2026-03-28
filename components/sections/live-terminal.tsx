"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LiveTerminal() {
  const lines = [
    { t: 0,    c: "dim",  s: "TRACY BOOT SEQUENCE", v: "" },
    { t: 400,  c: "info", s: "[INFO]", v: " Version: 1.1.0" },
    { t: 800,  c: "info", s: "[INFO]", v: " Contact: cadence.ai.tracy@gmail.com" },
    { t: 1050, c: "info", s: "[INFO]", v: " Contact: +33 7 67 25 31 99" },
    { t: 1500, c: "ok",   s: "[OK]",   v: " License server registered" },
    { t: 2000, c: "ok",   s: "[OK]",   v: " Routes registered" },
    { t: 2500, c: "ok",   s: "[OK]",   v: " Access at http://localhost:9090 in Docker" },
  ];

  const [visible, setVisible] = useState(0);

  useEffect(() => {
    lines.forEach((l, i) => setTimeout(() => setVisible(i + 1), l.t));
  }, []);

  const colors: Record<string, string> = {
    dim:  "text-[#f2f2f2]/40 font-bold",
    ok:   "text-emerald-400",
    info: "text-[#4e9ad0]",
    warn: "text-amber-400",
    hi:   "text-[#f2f2f2] font-bold",
  };

  return (
      <div className="border border-[#235789]/50 bg-[#0a0f14]">
        <div className="flex items-center justify-between border-b border-[#235789]/30 px-5 py-2.5">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#235789]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#235789]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#235789]/30" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#235789]">
          TRACY // BOOT SEQUENCE
        </span>
          <div className="flex items-center gap-1.5">
            <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-400"
            />
            <span className="font-mono text-[10px] text-emerald-400/70 uppercase tracking-widest">
            LIVE
          </span>
          </div>
        </div>

        <div className="p-5 font-mono text-[13px] leading-7 min-h-65">
          <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: visible >= 1 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-[#4e9ad0] text-[10px] leading-tight mb-4 whitespace-pre"
          >
            {`  _______                              _____ \n |__   __|                       /\\   |_   _|\n    | |_ __ __ _  ___ _   _     /  \\    | |\n    | | '__/ _\` |/ __| | | |   / /\\ \\   | |\n    | | | | (_| | (__| |_| |  / ____ \\ _| |_\n    |_|_|  \\__,_|\\___|\\__, | /_/    \\_\\_____|\n                       __/ |\n                      |___/`}
          </motion.pre>

          {lines.slice(1, visible).map((l, i) => (
              <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-3"
              >
            <span className={`shrink-0 w-20 text-right ${colors[l.c]}`}>
              {l.s}
            </span>
                <span className="text-[#f2f2f2]/60">{l.v}</span>
              </motion.div>
          ))}

          {visible < lines.length && (
              <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block h-4 w-2.5 bg-[#4e9ad0] ml-1 align-middle"
              />
          )}
        </div>
      </div>
  );
}