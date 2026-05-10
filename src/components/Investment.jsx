import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { investmentProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ── Document previews ────────────────────────────────────────────────

const MemoPreview = () => (
  <div className="w-full h-full bg-[#0d0d1a] rounded-xl p-5 flex flex-col gap-2.5 font-mono">
    <div className="flex justify-between items-center mb-1">
      <span className="text-[9px] text-[#915EFF] uppercase tracking-widest font-semibold">Investment Memo</span>
      <span className="text-[8px] text-white/20">CONFIDENTIAL</span>
    </div>
    {["TO: Investment Committee", "RE: Enterprise AI — Series B Evaluation", "DATE: Q2 2025"].map((line, i) => (
      <div key={i} className="flex gap-2 items-center">
        <div className="w-1 h-1 rounded-full bg-[#915EFF]/60 flex-shrink-0" />
        <span className="text-[9px] text-white/50">{line}</span>
      </div>
    ))}
    <div className="mt-2 space-y-1.5">
      {[80, 60, 90, 45, 70].map((w, i) => (
        <div key={i} className="h-[5px] rounded-full bg-white/8" style={{ width: `${w}%` }} />
      ))}
    </div>
    <div className="mt-auto pt-2 border-t border-white/5 flex gap-3">
      {["Thesis", "Comps", "Risks", "Returns"].map((s) => (
        <span key={s} className="text-[8px] text-white/25">{s}</span>
      ))}
    </div>
  </div>
);

const ExcelPreview = () => {
  const bars = [42, 68, 55, 80, 63, 91, 74];
  const cols = ["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7"];
  const rows = [
    { label: "Revenue", vals: ["$2.1M", "$4.8M", "$9.2M", "$16M", "$24M"] },
    { label: "EBITDA",  vals: ["(0.8M)", "(0.2M)", "$1.1M", "$3.4M", "$7.2M"] },
    { label: "IRR",     vals: ["—", "—", "—", "—", "28.4%"] },
  ];
  return (
    <div className="w-full h-full bg-[#071a0f] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold">DCF Model · Blended Finance</span>
        <span className="text-[8px] text-white/20">v2.3.xlsx</span>
      </div>
      <div className="flex items-end gap-1 h-14 px-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
            <div
              className="w-full rounded-t"
              style={{
                height: `${h}%`,
                background: i === 6 ? "linear-gradient(to top, #34d399, #6ee7b7)" : "rgba(52,211,153,0.25)",
              }}
            />
            <span className="text-[6px] text-white/20">{cols[i]}</span>
          </div>
        ))}
      </div>
      <div className="border border-white/5 rounded overflow-hidden">
        {rows.map((row, i) => (
          <div key={i} className={`flex text-[8px] ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
            <span className="w-16 px-2 py-1 text-white/30 border-r border-white/5 flex-shrink-0">{row.label}</span>
            {row.vals.map((v, j) => (
              <span key={j} className={`flex-1 px-1 py-1 text-center ${v.startsWith("(") ? "text-red-400/70" : v === "—" ? "text-white/15" : "text-emerald-400/80"}`}>{v}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const DeckPreview = () => {
  const sectors = [
    { label: "Nature-based",    pct: 35, color: "#34d399" },
    { label: "Infrastructure",  pct: 40, color: "#60a5fa" },
    { label: "Parametric Ins.", pct: 25, color: "#a78bfa" },
  ];
  return (
    <div className="w-full h-full bg-[#0a0a1f] rounded-xl p-5 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[9px] text-blue-400 uppercase tracking-widest font-semibold">Sector Analysis · Climate</span>
        <span className="text-[8px] text-white/20">Fund III</span>
      </div>
      <div className="space-y-2.5 mt-1">
        {sectors.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="flex justify-between">
              <span className="text-[9px] text-white/50">{s.label}</span>
              <span className="text-[9px] font-semibold" style={{ color: s.color }}>{s.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
        {[["Target IRR", "14–18%"], ["Fund Size", "$120M"], ["Horizon", "10 yr"]].map(([k, v]) => (
          <div key={k} className="text-center">
            <div className="text-[10px] font-semibold text-white/80">{v}</div>
            <div className="text-[7px] text-white/25 mt-0.5">{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Per-item metadata (display only, keeps constants clean) ──────────

const WORKSTREAM_META = [
  {
    type: "MEMO",
    typeColor: "#915EFF",
    activeBorder: "rgba(145,94,255,0.6)",
    meta: "Q2 2025 · Investment Committee",
    subtitle: "Investment Committee Memo · Q2 2025 · CONFIDENTIAL",
    breadcrumbSub: "Enterprise AI",
    Preview: MemoPreview,
    metrics: [
      { label: "Deal Size",       value: "$28M"  },
      { label: "Projected MOIC",  value: "3.2×"  },
      { label: "Target IRR",      value: "28%"   },
    ],
  },
  {
    type: "ANALYSIS",
    typeColor: "#60a5fa",
    activeBorder: "rgba(96,165,250,0.6)",
    meta: "Q4 2024 · Fund III",
    subtitle: "Sector Analysis · Fund III · Q4 2024",
    breadcrumbSub: "Climate Tech",
    Preview: DeckPreview,
    metrics: [
      { label: "Fund Size",   value: "$120M"   },
      { label: "Target IRR", value: "14–18%"  },
      { label: "Horizon",    value: "10 yr"   },
    ],
  },
  {
    type: "MODEL",
    typeColor: "#34d399",
    activeBorder: "rgba(52,211,153,0.6)",
    meta: "Q1 2025 · v2.3",
    subtitle: "DCF Model · Blended Finance · Q1 2025 · v2.3",
    breadcrumbSub: "Blended Finance",
    Preview: ExcelPreview,
    metrics: [
      { label: "Revenue (Y7)",  value: "$24M"   },
      { label: "IRR",          value: "28.4%"  },
      { label: "EBITDA (Y7)",  value: "$7.2M"  },
    ],
  },
];

// ── Main section ─────────────────────────────────────────────────────

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = WORKSTREAM_META[activeIndex];
  const project = investmentProjects[activeIndex];
  const { Preview } = active;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where analytical rigor meets market intuition.</p>
        <h2 className={styles.sectionHeadText}>Investment Thinking.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-white/55 text-[16px] max-w-3xl leading-[30px]"
      >
        My investment interest sits at the overlap of{" "}
        <span className="text-white/80">AI infrastructure</span>,{" "}
        <span className="text-white/80">climate tech</span>, and{" "}
        <span className="text-white/80">emerging market enterprise software</span> — sectors I've worked in directly.
        These are working files: financial models, sector analyses, and investment memos built to sharpen deal evaluation skills.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-12"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.01)",
          display: "flex",
          minHeight: "500px",
        }}
      >
        {/* ── Sidebar ── */}
        <div
          style={{
            width: "280px",
            flexShrink: 0,
            borderRight: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.015)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.2)",
              padding: "20px 20px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            Workstreams
          </div>

          {investmentProjects.map((project, i) => {
            const meta = WORKSTREAM_META[i];
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  borderLeft: isActive ? `2px solid ${meta.typeColor}` : "2px solid transparent",
                  background: isActive ? `rgba(${hexToRgb(meta.typeColor)}, 0.07)` : "transparent",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.03)",
                }}
              >
                <div
                  style={{
                    fontSize: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: meta.typeColor,
                    marginBottom: "5px",
                    fontWeight: 600,
                  }}
                >
                  {meta.type}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}
                >
                  {project.name}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>
                  {meta.meta}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Focus pane ── */}
        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>
            Investment Thinking /{" "}
            <span style={{ color: active.typeColor }}>{active.breadcrumbSub}</span>
          </div>

          {/* Title row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.25, color: "#fff" }}>
                  {project.name}
                </h3>
                {project.source_code_link !== "#" && (
                  <button
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0, marginTop: "4px", background: "none", border: "none", cursor: "pointer" }}
                    title="Open"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                )}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
                {active.subtitle}
              </div>

              {/* Two-column: preview + detail */}
              <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                {/* Preview */}
                <div style={{ width: "260px", height: "190px", flexShrink: 0 }}>
                  <Preview />
                </div>

                {/* Description + metrics */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    {active.metrics.map(({ label, value }) => (
                      <div
                        key={label}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: "10px",
                          padding: "12px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: "18px", fontWeight: 700, color: active.typeColor }}>{value}</div>
                        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "3px" }}>{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        style={{
                          fontSize: "10px",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

// hex color to rgb triplet for rgba() usage
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default SectionWrapper(Investment, "investment");
