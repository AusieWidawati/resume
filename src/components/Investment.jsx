import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { investmentProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ── VC Digest Data ────────────────────────────────────────────────────

const DIGEST_DATE = "Week of May 12, 2026";
const DIGEST_REGION = "Southeast Asia & Singapore";

const DIGEST_STATS = [
  { label: "SG Capital Share", value: "91.5%", sub: "Q1 2026 regional", color: "#915EFF" },
  { label: "Largest Deal", value: "$2B+", sub: "DayOne Series C", color: "#60a5fa" },
  { label: "AI Funding (Asia)", value: "$12.5B", sub: "Q1 2026 alone", color: "#34d399" },
  { label: "Seed Decline", value: "−50%", sub: "H1 2025 vs H2 2024", color: "#f87171" },
];

const DIGEST_DEALS = [
  {
    name: "DayOne Data Centers",
    amount: "$2B+",
    stage: "Series C",
    sector: "Digital Infrastructure",
    color: "#60a5fa",
    lead: "Coatue + INA",
    country: "SG",
    insight: "Largest private data-center raise globally; 1GW of customer commitments across SIJORI, Finland, Japan, HK.",
    tags: ["AI Compute", "Data Centers", "SIJORI"],
    announced: "Jan 5, 2026",
  },
  {
    name: "Amity",
    amount: "$100M",
    stage: "Series D",
    sector: "Enterprise AI / GenAI",
    color: "#915EFF",
    lead: "EDBI + Asia Partners",
    country: "TH/SG",
    insight: "SEA's largest GenAI round to date. 10× revenue growth since 2022. IPO target: 2027.",
    tags: ["GenAI", "Enterprise SaaS", "IPO-track"],
    announced: "Mar 25, 2026",
  },
  {
    name: "Silicon Box",
    amount: "$150M",
    stage: "Late-Stage",
    sector: "Semiconductors / Chiplets",
    color: "#f59e0b",
    lead: "EDBI + institutional",
    country: "SG",
    insight: "SG's semiconductor unicorn (~$1B val). EDBI entry = national strategic signal. Pre-IPO 2027–28 candidate.",
    tags: ["Deep Tech", "Semiconductors", "Unicorn"],
    announced: "~May 4, 2026",
  },
  {
    name: "Video Rebirth",
    amount: "$80M",
    stage: "Growth",
    sector: "AI / Generative Video",
    color: "#34d399",
    lead: "AMD Ventures + Hyundai",
    country: "SG",
    insight: "AMD-backed agentic AI video engine (BACH). Compute infrastructure alignment deal. Competes with Sora, Runway.",
    tags: ["Agentic AI", "Creative Tech", "Generative Video"],
    announced: "Mar 18, 2026",
  },
  {
    name: "Sapiens AI",
    amount: "$20M",
    stage: "Seed/Early",
    sector: "AI Foundation Models",
    color: "#e879f9",
    lead: "Undisclosed institutional",
    country: "SG",
    insight: "Homegrown Asian LLM for Bahasa, Thai, Tagalog, Vietnamese. High-risk, high-upside bet on regional foundational model layer.",
    tags: ["LLM", "Asian Languages", "Foundation Models"],
    announced: "Mar 2026",
  },
];

const DIGEST_SECTORS = [
  { name: "AI / Agentic AI", status: "HOT", statusColor: "#34d399", deals: 13, note: "Agentic systems moving from theory to funded reality. Key: Amity, Video Rebirth, Sapiens AI.", bar: 90 },
  { name: "Digital Infrastructure", status: "HOT", statusColor: "#34d399", deals: 5, note: "DayOne's $2B anchors a multi-year AI compute buildout across SIJORI corridor.", bar: 85 },
  { name: "Semiconductors / Deep Tech", status: "HOT", statusColor: "#34d399", deals: 3, note: "SG national strategy: chiplet packaging as AI chip supply chain bottleneck play.", bar: 78 },
  { name: "Fintech", status: "ACTIVE", statusColor: "#60a5fa", deals: 16, note: "Highest volume sector. SME digital banking, embedded finance, BaaS. SG = 88% of funding.", bar: 65 },
  { name: "Health Tech", status: "ACTIVE", statusColor: "#60a5fa", deals: 12, note: "Third by deal volume, strongest YoY rebound. Post-COVID infrastructure maturing.", bar: 55 },
  { name: "Consumer E-commerce", status: "QUIET", statusColor: "#9ca3af", deals: 4, note: "Capital rotating away. Only active where AI/automation provides clear efficiency story.", bar: 25 },
  { name: "Seed / Early-Stage", status: "RED FLAG", statusColor: "#f87171", deals: 0, note: "Seed funding collapsed 50% H1 2025. Lowest quarterly deal count in 8+ years.", bar: 15 },
];

const DIGEST_WATCHLIST = [
  { company: "Amity", country: "TH/SG", stage: "Series D, pre-IPO", why: "IPO target 2027; SEA's largest GenAI deal", color: "#915EFF" },
  { company: "Silicon Box", country: "SG", stage: "Late-stage", why: "Semiconductor unicorn; EDBI-backed; IPO candidate 2027–28", color: "#f59e0b" },
  { company: "Video Rebirth", country: "SG", stage: "Growth", why: "AMD-backed AI video; agentic creative tech play", color: "#34d399" },
  { company: "Sapiens AI", country: "SG", stage: "Early", why: "Homegrown Asian LLM; high-risk, high-upside", color: "#e879f9" },
  { company: "DayOne", country: "SG", stage: "Series C", why: "AI infrastructure backbone; 1GW committed compute", color: "#60a5fa" },
  { company: "Malaysia early-stage", country: "MY", stage: "Seed/Series A", why: "Emerging deal flow uptick; NEXEA pipeline worth tracking", color: "#9ca3af" },
];

const DIGEST_TAKEAWAYS = [
  { n: "1", title: "Singapore Premium accelerating", body: "91.5% of SEA capital reflects regulatory clarity, talent, and government co-investment infrastructure no other market yet matches." },
  { n: "2", title: "Government capital is setting terms", body: "EDBI led both Silicon Box and Amity. Singapore isn't passively hosting deals — it's actively shaping which sectors get built." },
  { n: "3", title: "Agentic AI thesis is investable now", body: "Shift from 'AI as a tool' to 'AI as an agent' is backed by deal flow. Build fluency in enterprise agentic deployments." },
  { n: "4", title: "Late-stage concentration = valuation risk", body: "Late-stage funding +140%, seed −50%. Current unicorns are well-funded but the pipeline thins. Model exit multiples accordingly." },
  { n: "5", title: "Governance due diligence is table stakes", body: "eFishery founder sentenced to 9 years. Stricter financial audit requirements across SEA are now table stakes for diligence." },
];

// ── VC Digest Sub-tabs ────────────────────────────────────────────────

const VC_TABS = ["Market Pulse", "Top Deals", "Sectors", "Watch List"];

const MarketPulseTab = () => {
  const maxDeal = 2000;
  const deals = [
    { name: "DayOne", amount: 2000, color: "#60a5fa" },
    { name: "Silicon Box", amount: 150, color: "#f59e0b" },
    { name: "Amity", amount: 100, color: "#915EFF" },
    { name: "Video Rebirth", amount: 80, color: "#34d399" },
    { name: "Sapiens AI", amount: 20, color: "#e879f9" },
  ];
  return (
    <div className="flex flex-col gap-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {DIGEST_STATS.map((s) => (
          <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "14px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.label}</div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Capital concentration */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px" }}>
        <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "10px" }}>Q1 2026 — Regional Capital Concentration</div>
        <div className="flex flex-col gap-2.5">
          {[
            { label: "Singapore", pct: 91.5, color: "#915EFF" },
            { label: "Malaysia", pct: 5.5, color: "#60a5fa" },
            { label: "Indonesia / Others", pct: 3.0, color: "#9ca3af" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <div style={{ width: "120px", fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{row.label}</div>
              <div style={{ flex: 1, height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "99px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "99px", background: row.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                />
              </div>
              <div style={{ width: "38px", textAlign: "right", fontSize: "11px", fontWeight: 700, color: row.color, flexShrink: 0 }}>{row.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Deal size chart */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px" }}>
        <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>Notable Deals — Funding Size (USD M)</div>
        <div className="flex flex-col gap-2">
          {deals.map((d) => (
            <div key={d.name} className="flex items-center gap-3">
              <div style={{ width: "96px", fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{d.name}</div>
              <div style={{ flex: 1, height: "10px", background: "rgba(255,255,255,0.04)", borderRadius: "99px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "99px", background: d.color, opacity: 0.85 }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(d.amount / maxDeal) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                />
              </div>
              <div style={{ width: "52px", textAlign: "right", fontSize: "11px", fontWeight: 700, color: d.color, flexShrink: 0 }}>${d.amount >= 1000 ? `${d.amount / 1000}B+` : `${d.amount}M`}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>
          * Bar width scaled to DayOne's $2B anchor deal
        </div>
      </div>

      {/* Key takeaways */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px" }}>
        <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>Key Analyst Takeaways</div>
        <div className="flex flex-col gap-3">
          {DIGEST_TAKEAWAYS.map((t) => (
            <div key={t.n} className="flex gap-3 items-start">
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(145,94,255,0.15)", border: "1px solid rgba(145,94,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#915EFF" }}>{t.n}</span>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: "2px" }}>{t.title}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{t.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TopDealsTab = () => (
  <div className="flex flex-col gap-3">
    {DIGEST_DEALS.map((deal, i) => (
      <motion.div
        key={deal.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: i * 0.06 }}
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(255,255,255,0.06)`,
          borderLeft: `3px solid ${deal.color}`,
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>{deal.name}</span>
              <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: `rgba(${hexToRgb(deal.color)},0.15)`, border: `1px solid ${deal.color}40`, color: deal.color, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{deal.stage}</span>
              <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>{deal.country}</span>
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>{deal.sector} · Lead: {deal.lead} · {deal.announced}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{deal.insight}</div>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {deal.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: deal.color, lineHeight: 1 }}>{deal.amount}</div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "1px" }}>raised</div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const SectorsTab = () => (
  <div className="flex flex-col gap-3">
    <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", marginBottom: "4px" }}>Sector Heat — Q1 2026 Southeast Asia</div>
    {DIGEST_SECTORS.map((s, i) => (
      <motion.div
        key={s.name}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: i * 0.05 }}
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "14px 16px",
        }}
      >
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)", flex: 1 }}>{s.name}</span>
          <span style={{ fontSize: "8px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", background: `${s.statusColor}20`, border: `1px solid ${s.statusColor}50`, color: s.statusColor, letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.status}</span>
          {s.deals > 0 && <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>{s.deals} deals</span>}
        </div>
        <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "99px", overflow: "hidden", marginBottom: "8px" }}>
          <motion.div
            style={{ height: "100%", borderRadius: "99px", background: `linear-gradient(90deg, ${s.statusColor}99, ${s.statusColor})` }}
            initial={{ width: 0 }}
            animate={{ width: `${s.bar}%` }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + i * 0.04 }}
          />
        </div>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{s.note}</div>
      </motion.div>
    ))}
  </div>
);

const WatchListTab = () => (
  <div className="flex flex-col gap-3">
    <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", marginBottom: "4px" }}>Companies to Watch — Southeast Asia 2026</div>
    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 130px 1fr", gap: "12px", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
        {["Company", "Market", "Stage", "Why Watch"].map((h) => (
          <div key={h} style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", fontWeight: 600 }}>{h}</div>
        ))}
      </div>
      {DIGEST_WATCHLIST.map((row, i) => (
        <motion.div
          key={row.company}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: i * 0.05 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 130px 1fr",
            gap: "12px",
            padding: "12px 16px",
            borderBottom: i < DIGEST_WATCHLIST.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            alignItems: "start",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 600, color: row.color }}>{row.company}</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{row.country}</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{row.stage}</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{row.why}</div>
        </motion.div>
      ))}
    </div>

    {/* Governance alert */}
    <div style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: "12px", padding: "14px 16px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#f87171" }}>!</span>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#f87171", marginBottom: "4px" }}>Governance Alert — eFishery</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
            Founder Gibran Huzaifah sentenced to <strong style={{ color: "rgba(255,255,255,0.65)" }}>9 years</strong> for inflating financial reports. Once backed by SoftBank & Sequoia, eFishery fabricated revenue. Expect stricter financial audit requirements and more rigorous diligence on SEA growth-stage companies.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── VC Digest Pane ────────────────────────────────────────────────────

const VCDigestPane = () => {
  const [activeTab, setActiveTab] = useState(0);
  const TabContent = [MarketPulseTab, TopDealsTab, SectorsTab, WatchListTab][activeTab];
  return (
    <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", gap: "18px", overflow: "hidden" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>
        Investment Thinking /{" "}
        <span style={{ color: "#f59e0b" }}>VC & Startup Intelligence</span>
      </div>

      {/* Header */}
      <AnimatePresence mode="wait">
        <motion.div key="vc-header" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "2px", flexWrap: "wrap" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
              VC & Startup Intelligence
            </h3>
            <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>{DIGEST_DATE}</span>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>
            {DIGEST_REGION} · Curated Market Intelligence Digest
          </div>

          {/* Sub-tabs */}
          <div style={{ display: "flex", gap: "4px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "4px" }}>
            {VC_TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "7px 14px",
                  fontSize: "11px",
                  fontWeight: activeTab === i ? 600 : 400,
                  color: activeTab === i ? "#f59e0b" : "rgba(255,255,255,0.35)",
                  borderBottom: activeTab === i ? "2px solid #f59e0b" : "2px solid transparent",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === i ? "2px solid #f59e0b" : "2px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  letterSpacing: "0.3px",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tab content — scrollable */}
      <div style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <TabContent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

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

const VC_DIGEST_INDEX = 3; // index after the 3 investmentProjects

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isVCDigest = activeIndex === VC_DIGEST_INDEX;
  const active = isVCDigest ? null : WORKSTREAM_META[activeIndex];
  const project = isVCDigest ? null : investmentProjects[activeIndex];
  const Preview = active?.Preview ?? null;

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
          minHeight: "560px",
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
                <div style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "2px", color: meta.typeColor, marginBottom: "5px", fontWeight: 600 }}>
                  {meta.type}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: isActive ? "#fff" : "rgba(255,255,255,0.6)", lineHeight: 1.3, marginBottom: "4px" }}>
                  {project.name}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>
                  {meta.meta}
                </div>
              </button>
            );
          })}

          {/* VC Digest entry */}
          {(() => {
            const isActive = activeIndex === VC_DIGEST_INDEX;
            return (
              <button
                onClick={() => setActiveIndex(VC_DIGEST_INDEX)}
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  borderLeft: isActive ? "2px solid #f59e0b" : "2px solid transparent",
                  background: isActive ? "rgba(245,158,11,0.07)" : "transparent",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  marginTop: "auto",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "2px", color: "#f59e0b", marginBottom: "5px", fontWeight: 600 }}>
                  DIGEST
                </div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: isActive ? "#fff" : "rgba(255,255,255,0.6)", lineHeight: 1.3, marginBottom: "4px" }}>
                  VC & Startup Intelligence
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>
                  SEA & Singapore · May 2026
                </div>
              </button>
            );
          })()}
        </div>

        {/* ── Focus pane ── */}
        <AnimatePresence mode="wait">
          {isVCDigest ? (
            <motion.div key="vc-digest" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <VCDigestPane />
            </motion.div>
          ) : (
            <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Breadcrumb */}
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>
                Investment Thinking /{" "}
                <span style={{ color: active.typeColor }}>{active.breadcrumbSub}</span>
              </div>

              {/* Title row */}
              <div>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
