"use client";

import { motion } from "framer-motion";

export default function Protocol() {
  const steps = [
    {
      n: "01",
      title: "Install Tracy Server",
      sub: "Tokened. Built. Live.",
      desc: "Generate an auth token, persist it to config, build the binary and boot the Docker stack in one go.",
      code: `docker compose down
docker compose build --no-cache tracy
docker compose up -d
docker logs tracy --follow`,
    },
    {
      n: "02",
      title: "Pull your LLMs",
      sub: "From 7B toys to 671B giants.",
      desc: "Download DeepSeek-V3.1:671B and keep every weight on your own hardware.",
      code: `curl http://localhost:9090/model/download \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "model": "deepseek-v3.1:671b"
}'`,
    },
    {
      n: "03",
      title: "Create your collection",
      sub: "Vector store, one call away.",
      desc: "Spin up a Qdrant collection tuned to your embedding size. Ready for chunks in a single POST.",
      code: `curl http://localhost:9090/collection \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "name": "documents",
  "size": 768
}'`,
    },
    {
      n: "04",
      title: "Ingest your files",
      sub: "PDFs in. Chunks out.",
      desc: "Upload PDFs, spreadsheets or HTML. Tracy parses, chunks and embeds directly into your collection.",
      code: `curl http://localhost:9090/collection/file \\
  --request POST \\
  --header 'Content-Type: multipart/form-data' \\
  --form 'collection=documents' \\
  --form 'model=nomic-embed-text' \\
  --form 'file=@/chemin/vers/mon-fichier.pdf'`,
    },
    {
      n: "05",
      title: "Spin up your agents",
      sub: "RAG and extractors, typed.",
      desc: "Create conversational and extractor agents in a few JSON lines, with RAG for chat and schema-based extraction for structured outputs.",
      code: `# Agent conversationnel
curl http://localhost:9090/agent/agent \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "name": "Assistant RH",
  "role": "Tu es un assistant spécialisé en ressources humaines. Réponds uniquement à partir des documents fournis.",
  "folder": "documents",
  "model": "llama3.2",
  "embedding_model": "nomic-embed-text"
}'

# Agent extracteur
curl http://localhost:9090/agent/extractor \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "name": "Extracteur contrats",
  "role": "Tu extrais les informations clés des contrats juridiques. Retourne uniquement le JSON demandé.",
  "model": "llama3.2",
  "format": "{\\n  \\"status\\": {\\n    \\"type\\": \\"string\\",\\n    \\"enum\\": [\\"Intern\\", \\"Apprentice\\", \\"Employee\\", \\"Engineer\\", \\"Researcher\\", \\"Consultant\\", \\"Manager\\", \\"Director\\", \\"C-Level\\", \\"Founder\\"]\\n  },\\n  \\"name\\": {\\n    \\"type\\": \\"string\\"\\n  },\\n  \\"salary\\": {\\n    \\"type\\": \\"number\\"\\n  }\\n}"
}'`,
    },
    {
      n: "06",
      title: "Chat with your agent",
      sub: "Conversational RAG, on-prem.",
      desc: "Send prompts into a persistent conversation and stream answers token by token from your own server.",
      code: `curl http://localhost:9090/chat \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "agent_id": 1,
  "conversation_id": 1,
  "prompt": "Quelles sont les congés prévus cette année ?",
  "limit": 5
}'`,
    },
    {
      n: "07",
      title: "Extract structured data",
      sub: "Free text in. JSON out.",
      desc: "Call extractor agents to turn raw text into typed JSON payloads that slot straight into your pipelines.",
      code: `curl http://localhost:9090/extract \\
  --request POST \\
  --header 'Content-Type: application/json' \\
  --data '{
  "agent_id": 1,
  "text": "Contrat signé le 01/01/2024 entre Dupont et Martin pour la somme de 5000€.",
  "nb": 3
}'`,
    },
  ];

  return (
      <section
          id="protocol"
          className="relative bg-[#1b2c3c] py-32 overflow-hidden"
      >
        <div className="mx-auto max-w-350 px-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 flex items-center gap-6"
          >
            <div className="h-px w-12 bg-[#4e9ad0]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4e9ad0]">
            Protocol
          </span>
          </motion.div>

          <div className="flex flex-col divide-y divide-[#235789]/20">
            {steps.map((s) => (
                <motion.div
                    key={s.n}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="group grid grid-cols-1 lg:grid-cols-[180px_1fr_1fr] gap-8 lg:gap-16 py-14 hover:bg-[#19222a]/30 transition-colors duration-500 px-4 -mx-4"
                >
                  <div className="flex items-start">
                <span
                    className="font-black text-[80px] leading-none tracking-tighter text-[#235789]/25 group-hover:text-[#235789]/50 transition-colors duration-500 select-none"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {s.n}
                </span>
                  </div>

                  <div className="flex flex-col justify-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4e9ad0]/55">
                  {s.sub}
                </span>
                    <h3
                        className="text-3xl font-black tracking-tight text-[#f2f2f2] leading-tight"
                        style={{ fontFamily: "'Syne',sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#f2f2f2]/40 text-sm leading-relaxed max-w-sm">
                      {s.desc}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full border border-[#235789]/30 bg-[#0a0f14]/80">
                      <div className="border-b border-[#235789]/20 px-4 py-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#235789]/50" />
                        <span className="h-2 w-2 rounded-full bg-[#235789]/30" />
                        <span className="font-mono text-[10px] text-[#235789]/40 ml-2 uppercase tracking-widest">
                      terminal
                    </span>
                      </div>
                      <pre className="p-5 font-mono text-[13px] text-[#f2f2f2]/60 leading-relaxed overflow-x-auto whitespace-pre">
                    {s.code}
                  </pre>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}