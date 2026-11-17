/**
 * Shared building blocks for long-form detail pages (project pages, Deals & Valuation):
 * centred column, section headings, metric tiles, sticky desktop TOC and a vertical phone TOC.
 */
import { useEffect } from "react";

export const BulletDot = () => (
  <span
    aria-hidden
    className="mt-[9px] block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#e879f9]"
  />
);

export const SubHeading = ({ children }) => (
  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd]">{children}</p>
);

// ── Section heading with left blue bar ──────────────────────────────
export const SectionHeading = ({ children }) => (
  <h2 className="text-[23px] sm:text-[28px] font-bold text-white flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
    <span className="w-[3px] h-8 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
    {children}
  </h2>
);

// ── Outcome metric card ──────────────────────────────────────────────
export const MetricCard = ({ value, label }) => (
  <div
    className="rounded-xl px-2.5 py-3.5 sm:p-5 text-center"
    style={{
      background: "rgba(59,130,246,0.07)",
      border: "1px solid rgba(59,130,246,0.18)",
    }}
  >
    <p className="font-bold text-[20px] sm:text-[28px] leading-none mb-2" style={{ color: "#60a5fa" }}>
      {value}
    </p>
    <p className="text-gray-300 text-[11.5px] sm:text-[13px] font-medium leading-snug">{label}</p>
  </div>
);

// ── Sticky table of contents ─────────────────────────────────────────
export const TableOfContents = ({ items, activeSection }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-24">
      <p className="text-gray-500 text-[11px] uppercase tracking-widest mb-5 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        On this page
      </p>

      <div className="relative">
        {/* Vertical connecting line */}
        <div
          className="absolute top-2 bottom-2"
          style={{ left: "6px", width: "1px", background: "rgba(255,255,255,0.07)" }}
        />

        <ul className="space-y-0.5">
          {items.map((item) => {
            const isActive =
              activeSection === item.id ||
              item.subItems?.some((s) => s.id === activeSection);

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-3 py-1.5 text-[13px] w-full text-left transition-colors relative"
                  style={{ color: isActive ? "#3b82f6" : "#6b7280" }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <span
                      className="absolute rounded-full"
                      style={{
                        left: "-14px",
                        top: "6px",
                        bottom: "6px",
                        width: "2px",
                        background: "#3b82f6",
                      }}
                    />
                  )}
                  {/* Dot */}
                  <span
                    className="w-[13px] h-[13px] rounded-full border-2 shrink-0 z-10 transition-colors"
                    style={{
                      borderColor: isActive ? "#3b82f6" : "rgba(255,255,255,0.15)",
                      background: isActive ? "rgba(59,130,246,0.2)" : "#0a0a0f",
                    }}
                  />
                  <span className={isActive ? "text-[#3b82f6]" : "hover:text-gray-300"}>
                    {item.label}
                  </span>
                </button>

                {/* Sub-items */}
                {item.subItems?.length > 0 && (
                  <ul className="ml-6 mt-0.5 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => scrollTo(sub.id)}
                          className="flex items-center gap-2 py-1 text-[12px] w-full text-left transition-colors"
                          style={{
                            color: activeSection === sub.id ? "#3b82f6" : "#4b5563",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              background:
                                activeSection === sub.id ? "#3b82f6" : "rgba(255,255,255,0.15)",
                            }}
                          />
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// ── Phones/tablets: vertical contents list ───────────────────────────
export const MobileToc = ({ items }) => (
  <nav
    aria-label="On this page"
    className="lg:hidden mb-10 rounded-2xl p-2"
    style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)" }}
  >
    <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
      On this page
    </p>
    <ol className="m-0 list-none p-0">
      {items.map((item, i) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-left text-[15px] text-gray-200 active:bg-white/[0.05]"
          >
            <span className="w-5 text-[12px] font-bold text-[#60a5fa]">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1">{item.label}</span>
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </li>
      ))}
    </ol>
  </nav>
);

// ── Highlights whichever section is in the reading zone ─────────────
export const useActiveSection = (ids, setActive, deps = []) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((sId) => {
      const el = document.getElementById(sId);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
