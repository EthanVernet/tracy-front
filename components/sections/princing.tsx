"use client";

import { motion } from "framer-motion";

const MONTHLY_FEATURES = [
    "Full Tracy AI access",
    "2-week free trial",
    "Local LLM support (Ollama)",
    "RAG + document ingestion",
    "API access + Bearer auth",
    "Updates & new features",
    "Email support",
] as const;

const planTitleClass =
    "text-[clamp(48px,6vw,72px)] font-black leading-none tracking-tight";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden bg-[#111920] py-32"
        >
            <div className="relative z-10 mx-auto max-w-350 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="mb-7 flex items-center gap-4">
                        <div className="h-px w-12 bg-[#4e9ad0]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4e9ad0]">
                            Pricing
                        </span>
                    </div>

                    <h2
                        className="text-[clamp(36px,4vw,60px)] font-black leading-[0.92] tracking-[-0.03em] text-[#f2f2f2]"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        ONE PLAN.
                        <br />
                        <span className="text-[#235789]">NO SURPRISES.</span>
                    </h2>
                </motion.div>

                <div className="grid max-w-3xl grid-cols-1 gap-5 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col border border-[#4e9ad0]/30 bg-[#1b2c3c]/60 p-8"
                    >
                        <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#4e9ad0]">
                            Monthly subscription
                        </span>

                        <div className="mb-8">
                            <div className="flex items-end gap-2">
                                <span
                                    className={`${planTitleClass} text-[#f2f2f2]`}
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    Monthly
                                </span>
                            </div>
                            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[#f2f2f2]/40">
                                2-week free trial · Billed monthly · Cancel anytime
                            </p>
                        </div>

                        <ul className="mb-10 flex flex-1 flex-col gap-3">
                            {MONTHLY_FEATURES.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-3 text-sm text-[#f2f2f2]/70"
                                >
                                    <span className="shrink-0 text-xs text-[#4e9ad0]">⬡</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://app.tracy-ai.com/#/auth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-[#4e9ad0]/40 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#4e9ad0] transition-all duration-200 hover:border-[#4e9ad0]/70 hover:bg-[#4e9ad0]/10"
                        >
                            Get started
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        className="relative flex flex-col border border-[#235789]/30 bg-[#19222a]/80 p-8"
                    >
                        <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#f2f2f2]/30">
                            Perpetual license
                        </span>

                        <div className="mb-8">
                            <span
                                className={`${planTitleClass} text-[#f2f2f2]/20`}
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                One-time
                            </span>
                            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[#f2f2f2]/25">
                                Own it forever · No renewal
                            </p>
                        </div>

                        <p className="mb-10 flex-1 text-sm leading-relaxed text-[#f2f2f2]/35">
                            Need a perpetual license for your organization? Custom pricing is
                            available for teams requiring a one-time purchase, on-premise
                            deployment agreements, or volume deals.
                            <br />
                            <br />
                            Reach out and we&apos;ll put together a proposal within 48h.
                        </p>

                        <a
                            href="https://calendly.com/tracy-ai/discutons-de-votre-projet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-[#235789]/40 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#f2f2f2]/40 transition-all duration-200 hover:border-[#4e9ad0]/30 hover:text-[#4e9ad0]/70"
                        >
                            Contact us
                        </a>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 max-w-3xl font-mono text-[10px] uppercase tracking-widest text-[#f2f2f2]/20"
                >
                    All plans include self-hosted deployment · 2-week free trial on the
                    monthly plan · No data leaves your server · Air-gapped compatible
                </motion.p>
            </div>
        </section>
    );
}