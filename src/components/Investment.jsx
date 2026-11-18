import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { investmentProjects } from "../constants";
import { INVESTMENT_PATHS } from "../constants/routes";
import { fadeIn, textVariant } from "../utils/motion";

// ── VC Digest Data ────────────────────────────────────────────────────
// Weekly update: replace the values below. Every tab, the main-page card
// and the full page read from these lists; nothing else needs editing.

const DIGEST_DATE = "Week of November 17, 2026";
const DIGEST_REGION = "Southeast Asia & Singapore";
const DIGEST_SOURCES = "DealStreetAsia · KrASIA · e27 · Techloy · TechNode Global · Pulse2";

const DIGEST_SUMMARY =
  "Singapore keeps consolidating its position as the region's capital magnet, now absorbing over 91% of SEA venture funding, while Vietnam, Thailand, Indonesia and the Philippines produce smaller but strategically meaningful rounds. Three themes stand out this week: deep tech moving from lab to fundable (Staera Semiconductor), consumer wellness gaining traction with ASEAN's middle class (Horizon Group), and debt, strategic and pre-Series A money filling the gap left by scarce growth capital. SEA AI funding hit $4.2B through September 2026, up 121% year on year, but 98% of it sits in just ten rounds.";

// Four tiles: first four also appear on the main-page card preview
const DIGEST_STATS = [
  { label: "SG Capital Share", value: "91%", sub: "of SEA venture funding, 2026", color: "#915EFF" },
  { label: "SEA AI Funding", value: "+121%", sub: "YoY to Sep 2026 ($4.2B)", color: "#34d399" },
  { label: "AI in 10 Rounds", value: "98%", sub: "of AI funding, 10 deals", color: "#f87171" },
  { label: "Largest Financing", value: "$590M+", sub: "Haoyang data centers, TH", color: "#60a5fa" },
];

// amountNum (USD M) drives the deal-size chart; 0 = undisclosed (left out of the chart)
const DIGEST_DEALS = [
  {
    name: "Haoyang Data Center",
    amount: "$590M+",
    amountNum: 590,
    stage: "Infrastructure Financing",
    type: "debt",
    sector: "Data Center / AI Infrastructure",
    color: "#60a5fa",
    investors: "Undisclosed lenders, plus a THB 610M (~$18.8M) facility",
    country: "TH",
    insight: "Up to $590M to build data center capacity in Thailand, which is competing with Malaysia's Johor for hyperscaler spend. Microsoft, Google and Amazon have all committed billions to the region.",
    watch: "AI compute demand now needs sovereign-scale capital. Vietnam is rumoured to be the next major data center market.",
    tags: ["AI Infrastructure", "Data Centers", "Debt"],
    announced: "Nov 2026",
    source: "https://www.techloy.com/week-46-asia-startup-funding-haoyang/",
    sourceLabel: "Techloy Week 46",
  },
  {
    name: "Roojai",
    amount: "Up to $35M",
    amountNum: 35,
    stage: "Debt Facility",
    type: "debt",
    sector: "Insurtech",
    color: "#ec4899",
    investors: "Lendable (private credit)",
    country: "TH",
    insight: "Thailand's leading digital insurer takes its first institutional debt, structured in Thai baht to remove currency risk. Lendable's asset-backed lending suggests Roojai's motor insurance receivables are clean enough to securitise.",
    watch: "Debt layered on a recent Series C ($60M, Nov 2025) usually means unit economics are proven and founders want growth without dilution.",
    tags: ["Insurtech", "Private Credit"],
    announced: "Nov 17, 2026",
    source: "https://kr-asia.com/deals-in-brief-vucar-secures-osk-sbi-backing-roojai-lands-new-financing-from-lendable-ten-china-investments-and-more",
    sourceLabel: "KrASIA",
  },
  {
    name: "Horizon Group / Lunio",
    amount: "$12.5M",
    amountNum: 12.5,
    stage: "Series A",
    type: "equity",
    sector: "Consumer Wellness / Sleep Tech",
    color: "#10b981",
    investors: "Vertex Ventures SEA & India (sole investor)",
    country: "TH",
    insight: "Bangkok-based sleep brand (mattresses, adjustable beds, bedding) selling direct across Thailand, Taiwan, Vietnam and Malaysia, with plans for ergonomic furniture, recovery devices and beauty tech. A solo Vertex cheque signals strong conviction.",
    watch: "Watch DTC acquisition efficiency, subscription attach rates and expansion into higher-GDP markets like Singapore.",
    tags: ["Consumer", "DTC", "Wellness"],
    announced: "Nov 12, 2026",
    source: "https://kr-asia.com/deals-in-brief-vucar-secures-osk-sbi-backing-roojai-lands-new-financing-from-lendable-ten-china-investments-and-more",
    sourceLabel: "KrASIA",
  },
  {
    name: "BillEase",
    amount: "~$7.9M",
    amountNum: 7.9,
    stage: "Credit Facility",
    type: "debt",
    sector: "Fintech / BNPL",
    color: "#8b5cf6",
    investors: "Philippine Bank of Communications (PBCOM)",
    country: "PH",
    insight: "A PHP 500M facility from a domestic bank to a BNPL lender for the underbanked. It signals balance-sheet credibility and that BillEase has cleared the central bank's scrutiny to become bankable.",
    watch: "With ~12% credit card penetration, BNPL growth is structural. A Series B could follow in 12 to 18 months if repayment stays healthy.",
    tags: ["BNPL", "Consumer Lending"],
    announced: "Nov 2026",
    source: "https://www.techloy.com/week-46-asia-startup-funding-haoyang/",
    sourceLabel: "Techloy Week 46",
  },
  {
    name: "Staera Semiconductor",
    amount: "$4.6M",
    amountNum: 4.6,
    stage: "Pre-Seed",
    type: "equity",
    sector: "Deep Tech / Semiconductors",
    color: "#6366f1",
    investors: "Openspace Capital (lead), SGInnovate, Black Kite Capital and others",
    country: "SG",
    insight: "A SMART (Singapore-MIT) spin-out replacing copper chip interconnects with light, using GaN LEDs and silicon nitride waveguides. Claims under 0.2 pJ per bit against ~5 pJ for rivals, with 98 to 99% yields.",
    watch: "Product launch targeted for 2030. One customer validation milestone would make it a Series A candidate for hard tech investors.",
    tags: ["Deep Tech", "Semiconductors", "AI Infrastructure"],
    announced: "Nov 11, 2026",
    source: "https://e27.co/copper-is-choking-ai-staera-secures-us4-6m-to-swap-it-for-light-20261111",
    sourceLabel: "e27",
  },
  {
    name: "Vucar",
    amount: "Undisclosed",
    amountNum: 0,
    stage: "Pre-Series A",
    type: "equity",
    sector: "Used Car Marketplace",
    color: "#f59e0b",
    investors: "OSK-SBI Venture Partners (lead), Monk's Hill Ventures, Antler",
    country: "VN",
    insight: "An inventory-light used-car auction platform for dealers in Vietnam, using AI for vehicle valuation. Follows the Carro, CarDekho and Spinny playbook in a fragmented, largely offline market.",
    watch: "Carro's planned $3B dual listing would give automotive tech its first public comparable in the region.",
    tags: ["Automotive", "Marketplace", "Cross-border"],
    announced: "Nov 17, 2026",
    source: "https://kr-asia.com/deals-in-brief-vucar-secures-osk-sbi-backing-roojai-lands-new-financing-from-lendable-ten-china-investments-and-more",
    sourceLabel: "KrASIA",
  },
  {
    name: "AquaBloom",
    amount: "Undisclosed",
    amountNum: 0,
    stage: "Seed",
    type: "equity",
    sector: "Agri Biotech / Climate Tech",
    color: "#14b8a6",
    investors: "Spiral Ventures (lead), Potato Impact Partners, Archipelago VC",
    country: "ID",
    insight: "Seaweed-based crop biostimulants for smallholder farmers, sourced from Indonesia's seaweed communities: market access for seaweed farmers and better yields for crop farmers.",
    watch: "Sits where climate, food security and smallholder enablement meet, all priorities for Indonesia and development finance, which opens blended finance options.",
    tags: ["Climate Tech", "Agri", "Impact"],
    announced: "Nov 2026",
    source: "https://kr-asia.com/deals-in-brief-vucar-secures-osk-sbi-backing-roojai-lands-new-financing-from-lendable-ten-china-investments-and-more",
    sourceLabel: "KrASIA",
  },
];

const SECTOR_STATUS = {
  HOT: { color: "#f87171", bar: 88 },
  ACTIVE: { color: "#f59e0b", bar: 62 },
  STABLE: { color: "#60a5fa", bar: 45 },
  QUIET: { color: "#9ca3af", bar: 18 },
};

const DIGEST_SECTORS = [
  { name: "Deep Tech & Semiconductors", status: "HOT", note: "Staera's pre-seed is rare for SEA, where VCs avoid long hardware cycles. Singapore's semiconductor initiative, SGInnovate co-investment and AI demand make this a live theme again." },
  { name: "Consumer Wellness & DTC", status: "HOT", note: "Rising in Thailand and Vietnam. Horizon/Lunio follows the Pomelo and Bluehouse pattern: regional DTC brands building multi-market footprints from Bangkok or Singapore." },
  { name: "Data Centers & AI Infrastructure", status: "HOT", note: "Haoyang's $590M in Thailand is the signal. Hyperscalers are committing billions across SEA, and software opportunities follow wherever data centers are built." },
  { name: "Automotive Tech", status: "ACTIVE", note: "Consolidating. Vucar in Vietnam and Carro's Nasdaq + SGX listing plan ($3B valuation) suggest the sector is nearing its exit moment." },
  { name: "Insurtech", status: "ACTIVE", note: "Roojai layering debt on equity shows a model robust enough for traditional finance. A re-activation signal after a quiet period since 2021–22." },
  { name: "Agri-Climate Tech (Indonesia)", status: "STABLE", note: "AquaBloom is early, but development priorities and blended finance mean more seaweed, biostimulant and alternative protein deals are likely." },
  { name: "Enterprise SaaS", status: "QUIET", note: "No notable rounds this week. Ailytics' Series A in late October is the latest data point; still underfunded against US and India benchmarks." },
  { name: "Edtech & Proptech", status: "QUIET", note: "Largely dormant since mid-2025, with no sign of revival yet." },
];

const DIGEST_INVESTORS = [
  { name: "Vertex Ventures SEA & India", tag: "Series A/B", note: "Led Horizon Group's $12.5M Series A this week and Hivebotics' $6M Series A in September, writing meaningful cheques across consumer, deep tech and B2B." },
  { name: "Openspace Capital", tag: "Early Stage", note: "Led Staera's pre-seed while also backing Stryv's Series B: willing to go very early in deep tech and still back consumer scale-ups." },
  { name: "Tin Men Capital", tag: "B2B AI", note: "Becoming Singapore's go-to Series A investor for B2B AI and industrial tech after leading Ailytics in October." },
  { name: "OSK-SBI Venture Partners", tag: "Cross-border", note: "A Malaysia-Japan fund leading into Vietnam: cross-border capital flowing beyond the usual Singapore-centric money." },
  { name: "Lendable", tag: "Private Credit", note: "UK private credit in a Thai insurtech deal shows the line between VC and private credit blurring for growth-stage fintech." },
  { name: "Orient Corporation / Orico", tag: "Corporate VC", note: "A Japanese consumer credit firm taking a strategic stake in Carro, which usually precedes deeper product integration." },
];

const DIGEST_TAKEAWAYS = [
  { n: "1", title: "Singapore's 91% share is real, but fragile", body: "Most capital went to Singapore-registered companies with regional or global mandates, and DayOne's $4.5B Series C alone is 62% of H1. Strip out the mega-rounds to see what's happening at the company-building layer." },
  { n: "2", title: "The growth capital gap is getting worse", body: "Vertex Holdings' CEO called mid-stage funding 'essentially hollow'. Series A median size fell to $8M from $11.6M. A dedicated SEA Series B/C fund would face little competition and strong deal flow." },
  { n: "3", title: "AI concentration is a risk, not a trophy stat", body: "$4.2B in SEA AI funding, but 10 deals made up 98% and there were only 28 rounds in nine months. For a regional AI portfolio, seed is where the access is." },
  { n: "4", title: "Japan is the key cross-border investor", body: "Ricoh, Orient/Orico, Asset Management One/Mizuho and OSK-SBI all moved this week. Relationships with Japanese CVCs are an asymmetric advantage." },
  { n: "5", title: "Semiconductors are back on Singapore's agenda", body: "The EDB/A*STAR semiconductor initiative launched in September 2026, and Staera's round shows it is already pulling in private money. A 10-year thesis with a live early-stage signal." },
];

const DIGEST_WATCHLIST = [
  { company: "Carro", country: "SG", stage: "Pre-IPO", why: "Nasdaq + SGX dual listing at a $3B target: the most consequential SEA exit in years", color: "#f87171" },
  { company: "Staera Semiconductor", country: "SG", stage: "Pre-Seed", why: "Clear 2030 roadmap; first customer validation would trigger a Series A", color: "#6366f1" },
  { company: "BillEase", country: "PH", stage: "Growth", why: "Leading Philippine BNPL with fresh debt capacity; Series B likely in 12 to 18 months", color: "#8b5cf6" },
  { company: "Finfra", country: "ID", stage: "Series A ext.", why: "Lending-as-a-service backed by ADB Ventures, signalling development-impact credibility", color: "#60a5fa" },
  { company: "AquaBloom and agri-climate", country: "ID", stage: "Seed", why: "Thematic fit plus blended finance means more seaweed and biostimulant deals ahead", color: "#14b8a6" },
  { company: "SEA AI exits", country: "Region", stage: "Macro", why: "Only one listing and one acquisition in nine months; watch the exit candidates", color: "#9ca3af" },
  { company: "Data centers TH / ID / VN", country: "Region", stage: "Infrastructure", why: "Where data centers get built, software follows; Vietnam rumoured to be next", color: "#9ca3af" },
];

const DIGEST_MACRO = [
  { title: "Singapore's AI push is accelerating", body: "SGD 1B allocated to AI research, and Anthropic opened a Singapore office in October, joining a growing cluster of frontier AI labs." },
  { title: "No credible local listing venue", body: "Peak XV's Rohit Agarwal calls IPOs 'the only predictable exit path'. Carro's dual listing will test whether SGX can be a real liquidity venue." },
  { title: "Japan-SEA capital is rising", body: "Japanese institutions are steadily increasing SEA exposure as they look for growth beyond their domestic market: a durable multi-year trend." },
];

const COUNTRY_NAMES = { SG: "Singapore", TH: "Thailand", VN: "Vietnam", ID: "Indonesia", PH: "Philippines", MY: "Malaysia" };

// ── VC Digest Sub-tabs ────────────────────────────────────────────────

const VC_TABS = ["Market Pulse", "Top Deals", "Sectors", "Watch List"];

const PANEL = { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px" };
const PANEL_LABEL = { fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "12px" };

const MarketPulseTab = () => {
  // Chart data comes straight from DIGEST_DEALS
  const sized = DIGEST_DEALS.filter((d) => d.amountNum > 0).sort((a, b) => b.amountNum - a.amountNum);
  const maxDeal = sized[0]?.amountNum || 1;
  const undisclosed = DIGEST_DEALS.length - sized.length;
  const byMarket = Object.entries(
    DIGEST_DEALS.reduce((acc, d) => ({ ...acc, [d.country]: (acc[d.country] || 0) + 1 }), {})
  ).sort((a, b) => b[1] - a[1]);
  const marketColors = ["#915EFF", "#60a5fa", "#34d399", "#f59e0b", "#e879f9", "#9ca3af"];

  return (
    <div className="flex flex-col gap-5">
      {/* This week in one paragraph */}
      <div style={{ ...PANEL, borderLeft: "3px solid #915EFF" }}>
        <div style={PANEL_LABEL}>This Week</div>
        <div className="text-[13px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{DIGEST_SUMMARY}</div>
      </div>

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

      {/* Deals by market */}
      <div style={PANEL}>
        <div style={{ ...PANEL_LABEL, marginBottom: "10px" }}>This Week — Deals by Market</div>
        <div className="flex flex-col gap-2.5">
          {byMarket.map(([code, count], i) => (
            <div key={code} className="flex items-center gap-3">
              <div className="w-[92px] sm:w-[120px]" style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{COUNTRY_NAMES[code] ?? code}</div>
              <div style={{ flex: 1, height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "99px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "99px", background: marketColors[i % marketColors.length] }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(count / DIGEST_DEALS.length) * 100}%` }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                />
              </div>
              <div style={{ width: "52px", textAlign: "right", fontSize: "11px", fontWeight: 700, color: marketColors[i % marketColors.length], flexShrink: 0 }}>
                {count} {count === 1 ? "deal" : "deals"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deal size chart */}
      <div style={PANEL}>
        <div style={PANEL_LABEL}>Notable Deals — Size (USD M)</div>
        <div className="flex flex-col gap-2">
          {sized.map((d) => (
            <div key={d.name} className="flex items-center gap-3">
              <div className="w-[92px] sm:w-[130px] truncate" style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>{d.name}</div>
              <div style={{ flex: 1, height: "10px", background: "rgba(255,255,255,0.04)", borderRadius: "99px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "99px", background: d.color, opacity: 0.85, minWidth: "4px" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(d.amountNum / maxDeal) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                />
              </div>
              <div style={{ width: "60px", textAlign: "right", fontSize: "11px", fontWeight: 700, color: d.color, flexShrink: 0 }}>{d.amount.replace(/^Up to /, "")}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "9px", color: "rgba(255,255,255,0.25)" }}>
          * Bars scaled to the largest deal ({sized[0]?.name}).{undisclosed > 0 && ` ${undisclosed} undisclosed rounds not shown.`}
        </div>
      </div>

      {/* Key takeaways */}
      <div style={PANEL}>
        <div style={PANEL_LABEL}>Key Analyst Takeaways</div>
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
        style={{ ...PANEL, borderLeft: `3px solid ${deal.color}` }}
      >
        {/* Phones: amount stacks above the text; sm+: amount sits on the right */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>{deal.name}</span>
              <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: `rgba(${hexToRgb(deal.color)},0.15)`, border: `1px solid ${deal.color}40`, color: deal.color, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{deal.stage}</span>
              <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>{deal.country}</span>
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>{deal.sector} · {deal.investors} · {deal.announced}</div>
            <div className="text-[13px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{deal.insight}</div>
            {deal.watch && (
              <div className="mt-2 text-[12.5px] sm:text-[11.5px]" style={{ color: "rgba(251,191,36,0.8)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 700 }}>Watch: </span>{deal.watch}
              </div>
            )}
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              {deal.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>{tag}</span>
              ))}
              {deal.source && (
                <a href={deal.source} target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px", color: "#60a5fa", marginLeft: "4px", textDecoration: "none" }}>
                  {deal.sourceLabel} ↗
                </a>
              )}
            </div>
          </div>
          <div className="order-first flex items-baseline gap-2 sm:order-none sm:block sm:max-w-[40%] sm:shrink-0 sm:text-right">
            <div className="text-[19px] sm:text-[24px]" style={{ fontWeight: 800, color: deal.color, lineHeight: 1.05 }}>{deal.amount}</div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "1px" }}>
              {deal.type === "debt" ? "debt / credit" : "equity"}
            </div>
          </div>
        </div>
      </motion.div>
    ))}

    {/* Investor activity */}
    <div style={{ ...PANEL, marginTop: "4px" }}>
      <div style={PANEL_LABEL}>Investor Activity</div>
      <div className="flex flex-col gap-3">
        {DIGEST_INVESTORS.map((inv) => (
          <div key={inv.name} className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[13px] sm:text-[12px]" style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{inv.name}</div>
              <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{inv.note}</div>
            </div>
            <span style={{ fontSize: "8.5px", padding: "3px 8px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>{inv.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SectorsTab = () => (
  <div className="flex flex-col gap-3">
    <div style={{ ...PANEL_LABEL, color: "rgba(255,255,255,0.25)", marginBottom: "4px" }}>Sector Heat — {DIGEST_DATE}</div>
    {DIGEST_SECTORS.map((s, i) => {
      const st = SECTOR_STATUS[s.status] ?? SECTOR_STATUS.QUIET;
      return (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: i * 0.05 }}
          style={{ ...PANEL, padding: "14px 16px" }}
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)", flex: 1 }}>{s.name}</span>
            <span style={{ fontSize: "8px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", background: `${st.color}20`, border: `1px solid ${st.color}50`, color: st.color, letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.status}</span>
          </div>
          <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "99px", overflow: "hidden", marginBottom: "8px" }}>
            <motion.div
              style={{ height: "100%", borderRadius: "99px", background: `linear-gradient(90deg, ${st.color}99, ${st.color})` }}
              initial={{ width: 0 }}
              animate={{ width: `${st.bar}%` }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + i * 0.04 }}
            />
          </div>
          <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{s.note}</div>
        </motion.div>
      );
    })}
  </div>
);

const WatchListTab = () => (
  <div className="flex flex-col gap-3">
    <div style={{ ...PANEL_LABEL, color: "rgba(255,255,255,0.25)", marginBottom: "4px" }}>Companies & Themes to Watch</div>
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

    {/* Macro context */}
    <div style={{ ...PANEL_LABEL, color: "rgba(255,255,255,0.25)", margin: "8px 0 0" }}>Macro Context</div>
    <div className="grid gap-3 md:grid-cols-3">
      {DIGEST_MACRO.map((m) => (
        <div key={m.title} style={{ ...PANEL, padding: "14px 16px" }}>
          <div className="text-[13px] sm:text-[12px]" style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "4px" }}>{m.title}</div>
          <div className="text-[12.5px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{m.body}</div>
        </div>
      ))}
    </div>

    <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>Sources: {DIGEST_SOURCES}</div>
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
                  to={INVESTMENT_PATHS.vcWeekly}
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
    subtitle: "INSEAD Valuation bootcamp · EV battery recycling · ~US$6M target",
    breadcrumbSub: "Tesla M&A · Battery Recycling",
    Preview: BootcampDealPreview,
    metrics: [
      { label: "Target EV", value: "~US$6M" },
      { label: "Buyer lens", value: "Tesla" },
      { label: "Outputs", value: "DCF + Deck" },
    ],
  },
];

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
    to: INVESTMENT_PATHS.valuation,
    type: WORKSTREAM_META[0].subtitle,
    color: "#f59e0b",
    title: investmentProjects[0].name,
    blurb: investmentProjects[0].description,
    chips: ["DCF", "LBO", "M&A"],
    Preview: BootcampDealPreview,
    download: { href: investmentProjects[0].deck_link, label: "Download pitch deck (PDF)" },
  },
  {
    to: INVESTMENT_PATHS.vcWeekly,
    type: "Digest",
    color: "#60a5fa",
    title: "Southeast Asia VC Weekly",
    blurb: "A weekly tracker I built for myself to see how VC investment is moving in Singapore and Southeast Asia: deals, hot sectors and companies I'm watching.",
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
        {/* Whole card opens the page; the download link stops propagation so it only downloads */}
        <div
          onClick={() => navigate(card.to)}
          className="group flex h-full w-full cursor-pointer flex-col rounded-[21px] bg-tertiary p-4 text-left shadow-card transition-transform duration-300 active:scale-[0.99] sm:p-5 [@media(hover:hover)]:hover:-translate-y-1"
        >
          <div className="pointer-events-none h-[215px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[210px]">
            <Preview />
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: card.color }}>
            {card.type}
          </span>
          <h3 className="mt-1 text-[18px] font-bold leading-snug text-white sm:text-[20px]">{card.title}</h3>
          <p className="mt-2 text-[14px] leading-[22px] text-secondary">{card.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {card.chips.map((c) => (
              <span key={c} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-[#dfd9ff]/90">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-auto flex w-full flex-col gap-2 pt-5">
            {/* Secondary action first, so "Open full page" sits on the same bottom line on every card */}
            {card.download && (
              <a
                href={card.download.href}
                download
                onClick={(e) => e.stopPropagation()}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/10 text-[14px] font-semibold text-[#e9e3ff] transition-colors hover:bg-[#915EFF]/20 sm:text-[13px]"
              >
                <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" /></svg>
                {card.download.label}
              </a>
            )}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); navigate(card.to); }}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl text-[15px] font-bold text-white shadow-[0_10px_30px_-12px_rgba(145,94,255,0.7)] transition-shadow duration-300 hover:shadow-[0_14px_36px_-10px_rgba(232,121,249,0.85)] sm:text-[13.5px]"
              style={{ background: "linear-gradient(120deg, #915EFF 0%, #c026d3 50%, #e879f9 100%)" }}
            >
              Open full page
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Investment = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Learning the deal side</p>
      <h2 className={styles.sectionHeadText}>Investment Thinking.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 sm:mt-5 text-white/55 text-[15px] sm:text-[16px] max-w-3xl leading-[26px] sm:leading-[30px]"
    >
      I&apos;ve gotten really curious about deal financing and startup community, so I learn by building. Here&apos;s a deal
      evaluation pitch deck I built at INSEAD, plus a weekly tracker I made to follow VC in Singapore and Southeast Asia.
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

export { VCDigestPane };
export default SectionWrapper(Investment, "investment");
