import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { investmentProjects } from "../constants";

const BRAND = "linear-gradient(120deg, #915EFF 0%, #c026d3 50%, #e879f9 100%)";

const NUMBERS = [
  { value: "~€6bn", label: "Enterprise value from our DCF" },
  { value: "€4.05bn", label: "Equity value in the offer" },
  { value: "80 / 20", label: "Payment split, stock first and cash later" },
];

const WHAT_I_DID = [
  {
    lead: "Sized the market.",
    text: "Battery recycling is forecast to grow from US$18.6bn in 2023 to US$34.9bn by 2032 (7.25% CAGR), with Asia Pacific the largest region at 44%. It is a fragmented market with no dominant player, which is part of why buying a leader makes sense.",
  },
  {
    lead: "Made the strategic case.",
    text: "Vertical integration for Tesla: recycle old batteries, feed the materials back into new ones. I scored GEM's capabilities with a VRIO framework and recommended full absorption after the deal, because the cost synergies depend on it.",
  },
  {
    lead: "Valued it with a DCF.",
    text: "Revenue growth of 16.1%, EBITDA margin rising from 8.3% to 10% over ten years, a 6.4% WACC and 3.5% long-term growth gave an enterprise value of about €5.95bn.",
  },
  {
    lead: "Cross-checked with peers.",
    text: "GEM's revenue beats most of its Chinese peers, but it trades at roughly a third of their price-to-sales, which makes it look cheap.",
  },
  {
    lead: "Priced the synergies and structured the payment.",
    text: "Cost synergies of about 0.1% of Tesla's COGS a year through 2031. We offer the equity value plus 75% of the €1.13bn synergies, paying the synergy part only once it shows up. The first payment is 80% in Tesla stock, since Tesla's P/E (76x) is high compared to peers, and the rest is paid in cash after two years from Tesla's cash pile.",
  },
  {
    lead: "Modelled the LBO",
    text: "in the bootcamp workbook, alongside the DCF, EVA and multiples work.",
  },
  {
    lead: "Closed with a recommendation,",
    text: "the main risks (a fragmented market, and China being outside Tesla's home turf) and next steps: a tender offer and full due diligence.",
  },
];

const TAKEAWAYS = [
  "Most of the value sits in the terminal value (about 90% of our enterprise value), so growth and WACC assumptions move the answer far more than any single year of cash flow.",
  "A price is only half a deal. How you pay (stock vs cash, upfront vs contingent) changes who carries the risk.",
  "A good pitch is a story first: market, why this target, what it is worth, how to pay, what could go wrong.",
  "I'm not a banker, but I can now follow a deal from thesis to valuation to structure, and build the model behind it.",
];

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-7 ${className}`}>{children}</div>
);

const SectionTitle = ({ children }) => (
  <h2 className="mb-5 flex items-center gap-3 text-[21px] font-bold text-white sm:text-[24px]">
    <span aria-hidden className="h-7 w-[3px] shrink-0 rounded-full" style={{ background: BRAND }} />
    {children}
  </h2>
);

const BootcampPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const project = investmentProjects[0];
  const hasLink = (href) => href && href !== "#";
  // The Excel button appears automatically once source_code_link points at the workbook
  const actions = [
    hasLink(project.deck_link) && { label: "Open the pitch deck", href: project.deck_link, primary: true },
    hasLink(project.source_code_link) && { label: "Open the Excel model", href: project.source_code_link },
  ].filter(Boolean);

  const reveal = (delay) => ({
    variants: fadeIn("up", "spring", delay, 0.75),
    initial: "hidden",
    animate: "show",
  });

  return (
    <div className="relative min-h-[100dvh] bg-primary overflow-hidden pb-safe">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20" />

      <div className="relative z-10">
        <div className={`${styles.paddingX} pt-[calc(1rem+env(safe-area-inset-top))] sm:pt-10`}>
          <Link
            to="/"
            state={{ scrollTo: "investment" }}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[14px] sm:text-[12px] active:bg-white/10 font-medium text-white/75 transition-colors duration-200 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Investment Thinking
          </Link>
        </div>

        <div className={`${styles.padding} !pt-6 sm:!pt-10 max-w-5xl`}>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={styles.sectionSubText}>Investment thinking · INSEAD bootcamp</p>
            <h1 className={styles.sectionHeadText}>Deals & Valuation.</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className="mt-4 sm:mt-5 max-w-3xl text-[15px] leading-[26px] sm:text-[16px] sm:leading-[30px] text-white/60"
          >
            At INSEAD&apos;s BB Deals &amp; Valuing Innovation bootcamp, my group built a full deal pitch: why Tesla should
            buy a battery-recycling company, what it is worth, and how to pay for it. This page walks through what I did
            and what I took from it.
          </motion.p>

          {/* The case */}
          <motion.section {...reveal(0.15)} className="mt-10 sm:mt-12">
            <Card>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c4b5fd]">The case</p>
              <h2 className="mt-2 text-[22px] font-bold leading-snug text-white sm:text-[28px]">
                Tesla acquires GEM, a battery-recycling company
              </h2>
              <p className="mt-3 text-[15px] leading-[26px] text-white/60 sm:text-[16px] sm:leading-[28px]">
                Our group (INSEAD Group 32, July 2023) pitched Tesla on acquiring GEM, a China-based battery recycling and
                cathode materials company listed in Shenzhen and Zurich. The idea: bring battery recycling in-house, cut
                costs, and strengthen Tesla&apos;s footprint in Asia ahead of its push into India.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                {NUMBERS.map((n) => (
                  <div key={n.label} className="rounded-xl border border-[#915EFF]/25 bg-[#915EFF]/[0.08] px-4 py-4 text-center">
                    <p className="bg-gradient-to-r from-[#c4b5fd] to-[#e879f9] bg-clip-text text-[24px] font-black leading-none text-transparent sm:text-[28px]">
                      {n.value}
                    </p>
                    <p className="mt-2 text-[12.5px] font-medium leading-snug text-white/70">{n.label}</p>
                  </div>
                ))}
              </div>

              {actions.length > 0 && (
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  {actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        a.primary
                          ? "flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-bold text-white shadow-[0_10px_30px_-12px_rgba(145,94,255,0.7)] transition-shadow hover:shadow-[0_14px_36px_-10px_rgba(232,121,249,0.85)] sm:text-[14px]"
                          : "flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/10 px-6 text-[15px] font-semibold text-[#e9e3ff] transition-colors hover:bg-[#915EFF]/20 sm:text-[14px]"
                      }
                      style={a.primary ? { background: BRAND } : undefined}
                    >
                      {a.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </Card>
          </motion.section>

          {/* What I did */}
          <motion.section {...reveal(0.25)} className="mt-12 sm:mt-14">
            <SectionTitle>What I did</SectionTitle>
            <ol className="m-0 list-none space-y-3 p-0">
              {WHAT_I_DID.map((step, i) => (
                <li key={step.lead} className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white"
                    style={{ background: BRAND }}
                  >
                    {i + 1}
                  </span>
                  <p className="m-0 text-[15px] leading-[25px] text-white/60 sm:text-[15.5px] sm:leading-[27px]">
                    <strong className="font-semibold text-white">{step.lead}</strong> {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* What I took from it */}
          <motion.section {...reveal(0.35)} className="mt-12 sm:mt-14">
            <SectionTitle>What I took from it</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              {TAKEAWAYS.map((t, i) => (
                <div key={t} className="rounded-xl border border-[#915EFF]/20 bg-[#915EFF]/[0.06] p-4 sm:p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c4b5fd]">Takeaway {i + 1}</p>
                  <p className="mt-2 text-[15px] leading-[25px] text-white/75">{t}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default BootcampPage;
