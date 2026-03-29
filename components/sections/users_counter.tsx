"use client";

import { motion } from "framer-motion";

const REAL_USERS = 45;
const MAX_EARLY_ACCESS_USERS = 100;

export default function EarlyAccessSection() {
    const placesLeft = Math.max(MAX_EARLY_ACCESS_USERS - REAL_USERS, 0);

    return (
        <section
            id="early-access"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#111920] py-32"
        >
            <div className="relative z-10 mx-auto flex w-full max-w-350 flex-col justify-center px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl"
                >
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px w-12 bg-[#4e9ad0]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4e9ad0]">
              Early access
            </span>
                    </div>

                    <h2
                        className="max-w-6xl text-[clamp(56px,9vw,140px)] font-black leading-[0.88] tracking-[-0.05em]"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        <span className="text-[#235789]">{placesLeft}</span>{" "}
                        <span className="text-[#f2f2f2]">LEFT.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#f2f2f2]/52 md:text-base">
                        Join early and lock in 50% off before standard pricing goes live.
                    </p>

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="https://app.tracy-ai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center border border-[#4e9ad0]/40 bg-[#4e9ad0]/10 px-8 py-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#4e9ad0] transition-all duration-200 hover:border-[#4e9ad0]/70 hover:bg-[#4e9ad0]/20"
                        >
                            Claim early access
                        </a>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mt-8 max-w-3xl font-mono text-[10px] uppercase tracking-widest text-[#f2f2f2]/20"
                    >
                        {REAL_USERS} active early users · {placesLeft} places left · 50% off
                        before public release
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}