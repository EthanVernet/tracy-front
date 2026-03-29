"use client";

import { motion } from "framer-motion";

import GlitchText from "@/components/animations/glitch-text";
import HexGrid from "@/components/animations/hex-grid";

export default function FinalCTA() {
  return (
      <section
          id="deploy"
          className="relative overflow-hidden bg-[#19222a] py-40"
      >
        <HexGrid />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-175 w-175 rounded-full bg-[#235789]/20 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-350 px-8 text-center">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#4e9ad0]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4e9ad0]">
              Self-hosted · One license · Yours forever
            </span>
              <div className="h-px w-12 bg-[#4e9ad0]" />
            </div>

            <h2
                className="text-[clamp(52px,9vw,130px)] font-black leading-[0.88] tracking-[-0.04em] text-[#f2f2f2]"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <GlitchText>OWN</GlitchText> YOUR
              <br />
              <span className="text-[#235789]">INTELLIGENCE.</span>
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-[#f2f2f2]/40">
              One license. Deployed on your infrastructure. No usage fees, no
              per-seat billing, no data leaving your server. Pay once — run
              forever on your terms.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                  href="https://app.tracy-ai.com/#/auth"
                  data-hover
                  className="group relative overflow-hidden border-2 border-[#4e9ad0] px-12 py-5 font-mono text-sm uppercase tracking-[0.2em] text-[#4e9ad0] transition-all duration-500 hover:text-[#19222a]"
              >
                <motion.span
                    className="absolute inset-0 origin-bottom bg-[#4e9ad0]"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="relative z-10">⬡ Get a license →</span>
              </a>

              <a
                  href="https://api.tracy-ai.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="border border-[#235789]/40 px-12 py-5 font-mono text-sm uppercase tracking-[0.2em] text-[#f2f2f2]/35 transition-all duration-300 hover:border-[#235789] hover:text-[#f2f2f2]/75"
              >
                Read the docs
              </a>
            </div>

            <div className="border border-[#235789]/30 bg-[#0a0f14]/80 px-8 py-4 font-mono text-sm text-[#4e9ad0]/65">
              <span className="mr-3 text-[#235789]/50">$</span>
              docker compose up -d
            </div>
          </motion.div>
        </div>
      </section>
  );
}