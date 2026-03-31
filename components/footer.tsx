export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/cadence-ai/tracy-server-release" },
    { label: "Docs", href: "https://api.tracy-ai.com/docs/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/tracy-ai-app/?viewAsMember=true",
    },
    { label: "Privacy", href: "https://app.tracy-ai.com/#/policyConfidentiality" },
  ];

  return (
      <footer className="border-t border-[#235789]/20 bg-[#0d1318]">
        <div className="mx-auto flex max-w-350 flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3">
            <a href="#" className="flex items-center gap-3">
              <img
                  src="/tracy.svg"
                  alt="Tracy logo"
                  className="h-8 w-8"
              />
              <span className="text-sm font-black uppercase tracking-[0.15em] text-[#f2f2f2]/50">
              TRACY
            </span>
            </a>

            <div className="hidden md:block text-[#235789]">·</div>

            <p className="font-mono text-xs text-[#f2f2f2]/20">
              Your AI, your infra.
            </p>
          </div>

          <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-5 md:gap-8"
          >
            {links.map((link) => {
              const external = link.href.startsWith("http");

              return (
                  <a
                      key={link.label}
                      href={link.href}
                      {...(external
                          ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                          : {})}
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f2f2f2]/20 transition-colors hover:text-[#4e9ad0]"
                  >
                    {link.label}
                  </a>
              );
            })}
          </nav>

          <p className="font-mono text-[10px] uppercase tracking-widest text-[#235789]/40">
            MIT · No telemetry · Ever.
          </p>
        </div>
      </footer>
  );
}