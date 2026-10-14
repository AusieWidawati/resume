import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
            <div className="text-[20px] sm:text-[22px]" style={{ fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.label}</div>
            <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.8px", lineHeight: 1.4 }}>{s.sub}</div>
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
              <div className="w-[92px] sm:w-[120px]" style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{row.label}</div>
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
              <div className="w-[80px] sm:w-[96px]" style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{d.name}</div>
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
                <div className="text-[13px] sm:text-[12px]" style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: "2px" }}>{t.title}</div>
                <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{t.body}</div>
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
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>{deal.name}</span>
              <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: `rgba(${hexToRgb(deal.color)},0.15)`, border: `1px solid ${deal.color}40`, color: deal.color, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{deal.stage}</span>
              <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>{deal.country}</span>
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>{deal.sector} · Lead: {deal.lead} · {deal.announced}</div>
            <div className="text-[13px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{deal.insight}</div>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {deal.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div className="text-[22px] sm:text-[26px]" style={{ fontWeight: 800, color: deal.color, lineHeight: 1 }}>{deal.amount}</div>
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
        <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{s.note}</div>
      </motion.div>
    ))}
  </div>
);

const WatchListTab = () => (
  <div className="flex flex-col gap-3">
    <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", marginBottom: "4px" }}>Companies to Watch — Southeast Asia 2026</div>
    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
      {/* Header */}
      <div className="hidden sm:grid grid-cols-[1fr_80px_130px_1fr]" style={{ gap: "12px", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
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
          className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 sm:grid-cols-[1fr_80px_130px_1fr] sm:gap-3"
          style={{
            padding: "12px 16px",
            borderBottom: i < DIGEST_WATCHLIST.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            alignItems: "start",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 600, color: row.color }}>{row.company}</div>
          <div className="text-right sm:text-left" style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{row.country}</div>
          <div className="col-span-2 sm:col-span-1" style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{row.stage}</div>
          <div className="col-span-2 sm:col-span-1 text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{row.why}</div>
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
          <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
            Founder Gibran Huzaifah sentenced to <strong style={{ color: "rgba(255,255,255,0.65)" }}>9 years</strong> for inflating financial reports. Once backed by SoftBank & Sequoia, eFishery fabricated revenue. Expect stricter financial audit requirements and more rigorous diligence on SEA growth-stage companies.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── VC Digest Pane ────────────────────────────────────────────────────

const VCDigestPane = ({ showFullPageLink = false }) => {
  const [activeTab, setActiveTab] = useState(0);
  const TabContent = [MarketPulseTab, TopDealsTab, SectorsTab, WatchListTab][activeTab];
  return (
    <div className="p-4 sm:px-8 sm:py-7" style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "18px", overflow: "hidden" }}>
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
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {showFullPageLink && (
                <Link
                  to="/vc-digest"
                  className="text-[12px] sm:text-[10px]"
                  style={{
                    letterSpacing: "0.5px",
                    color: "rgba(255,255,255,0.78)",
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.28)",
                    borderRadius: "999px",
                    padding: "6px 12px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Open full page
                </Link>
              )}
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>{DIGEST_DATE}</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>
            {DIGEST_REGION} · Curated Market Intelligence Digest
          </div>

          {/* Sub-tabs */}
          <div className="no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" role="tablist" style={{ display: "flex", gap: "4px", overflowX: "auto", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "4px" }}>
            {VC_TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className="min-h-[44px] text-[13px] sm:min-h-0 sm:text-[11px]"
                style={{
                  padding: "7px 14px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  fontWeight: activeTab === i ? 600 : 400,
                  color: activeTab === i ? "#f59e0b" : "rgba(255,255,255,0.35)",
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
      <div className="sm:pr-1" style={{ flex: 1, overflowY: "auto" }}>
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

/** Preview card — BB Deals bootcamp: Tesla × EV battery recycling buy-side work */
const BootcampDealPreview = () => {
  const waterfall = [
    { label: "DCF base", w: 72, color: "#e11d48" },
    { label: "EVA / multiples", w: 58, color: "#f59e0b" },
    { label: "LBO bridge", w: 64, color: "#34d399" },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#140808] to-[#0a0a12] rounded-xl p-4 flex flex-col gap-3 border border-white/[0.06]">
      <div className="flex justify-between items-start gap-2">
        <div>
          <span className="text-[9px] text-rose-400 uppercase tracking-widest font-semibold">Buy-side thesis</span>
          <div className="text-[10px] text-white/45 mt-1 leading-snug">EV battery recycling · M&A target ~US$6M EV</div>
        </div>
        <span className="text-[8px] text-white/25 shrink-0">BB Deals</span>
      </div>
      <div className="flex gap-2 mt-0.5">
        {["DCF", "EVA", "LBO"].map((t) => (
          <span key={t} className="text-[7px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/35 border border-white/[0.06]">
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1 justify-center py-1 md:py-0">
        {waterfall.map((row) => (
          <div key={row.label} className="space-y-1">
            <div className="flex justify-between text-[8px] text-white/40">
              <span>{row.label}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: row.color }}
                initial={{ width: 0 }}
                animate={{ width: `${row.w}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-white/5 flex justify-between text-[7px] text-white/20">
        <span>Model.xlsx</span>
        <span>Pitch.pdf</span>
      </div>
    </div>
  );
};

// ── Per-item metadata (display only, keeps constants clean) ──────────

const WORKSTREAM_META = [
  {
    type: "BOOTCAMP",
    typeColor: "#f59e0b",
    activeBorder: "rgba(245,158,11,0.6)",
    meta: "BB Deals & Valuing Innovation Bootcamp",
    subtitle: "Capital budgeting, DCF, EVA, multiples & LBO — buy-side pitch for Tesla acquiring a US$6M EV battery-recycling target",
    breadcrumbSub: "Tesla M&A · Battery Recycling",
    Preview: BootcampDealPreview,
    metrics: [
      { label: "Target EV", value: "~US$6M" },
      { label: "Buyer lens", value: "Tesla" },
      { label: "Outputs", value: "DCF + Deck" },
    ],
  },
];

// ── Bootcamp detail pane (rendered on its own page) ──────────────────

const BootcampPane = () => {
  const active = WORKSTREAM_META[0];
  const project = investmentProjects[0];
  const Preview = active.Preview;
  const links = [
    project.source_code_link !== "#" && { label: "Model", title: "Open financial model", href: project.source_code_link },
    project.deck_link && project.deck_link !== "#" && { label: "Deck", title: "Open pitch deck", href: project.deck_link },
  ].filter(Boolean);

  return (
    <div className="flex flex-1 flex-col gap-5 p-4 sm:px-8 sm:py-7">
      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>
        Investment Thinking / <span style={{ color: active.typeColor }}>{active.breadcrumbSub}</span>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
        <h3 className="text-[19px] font-semibold leading-tight text-white sm:text-[22px]">{project.name}</h3>
        {links.length > 0 && (
          <div className="flex shrink-0 gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={l.title}
                className="flex min-h-[40px] items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 text-[12px] text-white/60 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="text-[13px] leading-[1.6] text-white/40 sm:text-[12.5px]">{active.subtitle}</p>

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
        <div className="w-full md:h-[190px] md:w-[260px] md:shrink-0">
          <Preview />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <p className="text-[14.5px] leading-[1.75] text-white/55 sm:text-[13.5px]">{project.description}</p>
          <div className="grid grid-cols-3 gap-2.5">
            {active.metrics.map(({ label, value }) => (
              <div key={label} className="rounded-[10px] border border-white/[0.06] bg-white/[0.03] px-2 py-3 text-center">
                <div className="text-[15px] font-bold leading-tight sm:text-[18px]" style={{ color: active.typeColor }}>{value}</div>
                <div className="mt-1 text-[9px] uppercase tracking-[1px] text-white/30">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag.name} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[10.5px] text-white/40">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Card preview for the VC digest ───────────────────────────────────

const VCDigestPreview = () => (
  <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#120d05] to-[#0a0a12] p-3">
    <div className="flex items-center justify-between text-[9px] uppercase tracking-widest">
      <span className="font-semibold text-amber-400">Weekly digest</span>
      <span className="flex items-center gap-1.5 text-white/30">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
        {DIGEST_DATE.replace("Week of ", "")}
      </span>
    </div>
    <div className="grid flex-1 grid-cols-2 gap-2">
      {DIGEST_STATS.map((st) => (
        <div key={st.label} className="flex flex-col justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5">
          <div className="text-[16px] font-bold leading-none" style={{ color: st.color }}>{st.value}</div>
          <div className="mt-1 truncate text-[9.5px] text-white/50">{st.label}</div>
        </div>
      ))}
    </div>
  </div>
);

// ── Main section ─────────────────────────────────────────────────────

const WORKSTREAM_CARDS = [
  {
    to: "/investment/bootcamp",
    type: "Bootcamp",
    color: "#f59e0b",
    title: investmentProjects[0].name,
    blurb: WORKSTREAM_META[0].subtitle,
    chips: ["DCF", "LBO", "M&A"],
    Preview: BootcampDealPreview,
  },
  {
    to: "/vc-digest",
    type: "Digest",
    color: "#60a5fa",
    title: "VC & Startup Intelligence",
    blurb: `${DIGEST_REGION} · weekly deal flow, sector heat and companies to watch.`,
    chips: ["Market Pulse", "Top Deals", "Watch List"],
    Preview: VCDigestPreview,
  },
];

const WorkstreamCard = ({ card, index }) => {
  const navigate = useNavigate();
  const { Preview } = card;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.75)} className="h-full w-full">
      <div
        className="h-full rounded-[22px] p-[1px]"
        style={{ background: `linear-gradient(135deg, ${card.color}88, rgba(145,94,255,0.35), ${card.color}55)` }}
      >
        <button
          type="button"
          onClick={() => navigate(card.to)}
          className="group flex h-full w-full flex-col rounded-[21px] bg-tertiary p-4 text-left shadow-card transition-transform duration-300 active:scale-[0.99] sm:p-5 [@media(hover:hover)]:hover:-translate-y-1"
        >
          <div className="pointer-events-none h-[215px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[210px]">
            <Preview />
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: card.color }}>
            {card.type}
          </span>
          <h3 className="mt-1 text-[18px] font-bold leading-snug text-white sm:text-[20px]">{card.title}</h3>
          <p className="mt-2 line-clamp-2 text-[14px] leading-[22px] text-secondary">{card.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {card.chips.map((c) => (
              <span key={c} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-[#dfd9ff]/90">
                {c}
              </span>
            ))}
          </div>
          <span className="mt-auto block w-full pt-5">
            <span
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl text-[15px] font-bold text-white sm:text-[13.5px]"
              style={{ background: `linear-gradient(120deg, ${card.color}, #915EFF)` }}
            >
              Open full page
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const Investment = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Where analytical rigor meets market intuition.</p>
      <h2 className={styles.sectionHeadText}>Investment Thinking.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 sm:mt-5 text-white/55 text-[15px] sm:text-[16px] max-w-3xl leading-[26px] sm:leading-[30px]"
    >
      My investment interest sits at the overlap of{" "}
      <span className="text-white/80">AI infrastructure</span>,{" "}
      <span className="text-white/80">climate tech</span>, and{" "}
      <span className="text-white/80">emerging market enterprise software</span> — sectors I've worked in directly.
      Below: a valuation bootcamp deliverable (DCF / LBO / deck) plus a living digest of regional VC & startup intelligence.
    </motion.p>

    <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:mt-12 md:grid-cols-2 md:gap-7">
      {WORKSTREAM_CARDS.map((card, i) => (
        <WorkstreamCard key={card.to} card={card} index={i} />
      ))}
    </div>
  </>
);

// hex color to rgb triplet for rgba() usage
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export { VCDigestPane, BootcampPane };
export default SectionWrapper(Investment, "investment");
