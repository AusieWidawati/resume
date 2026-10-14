import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { researchPosterFani, researchPosterFyp } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLockBodyScroll } from "../utils/device";

const UNDRR_URL =
  "https://www.undrr.org/publication/shedding-light-avoided-disasters-measuring-invisible-benefits-disaster-risk-reduction";

const RESEARCH_ITEMS = [
  {
    kicker: "Project 01",
    affiliation: "NTU × Stanford · CN Yang Scholars Programme",
    title: "Spatial interpolation under varying uncertainty",
    lede:
      "Comparison of Invariant-Sill Kriging (ISK) and Conditional Multivariate Normal (MVN) for predicting earthquake intensity when data uncertainty varies in space.",
    body: (
      <>
        <p>
          I simulated noisy intensity fields under both generative assumptions, then stress-tested each spatial interpolation method on the same diagnostics — culminating in an evaluation on{" "}
          <strong className="text-white/85 font-medium">real-world “Did You Feel It?” observations from the 2019 Ridgecrest earthquake</strong> (California).
        </p>
        <p>
          In simulation, <strong className="text-white/85 font-medium">ISK leads when noise is low</strong>, while{" "}
          <strong className="text-white/85 font-medium">MVN is more robust when the noise-to-signal ratio is high</strong>. On the Ridgecrest dataset,{" "}
          <strong className="text-white/85 font-medium">ISK achieved stronger overall predictive scores</strong> across the reported metrics — a useful reminder that method choice should follow both the noise regime and the validation context.
        </p>
      </>
    ),
    chips: ["ISK vs MVN", "Ridgecrest DYFI", "Uncertainty-aware kriging"],
    poster: researchPosterFyp,
    posterAlt: "Research poster — Spatial Interpolation Under Varying Uncertainty, NTU and Stanford",
    accent: "#38bdf8",
    publication: null,
  },
  {
    kicker: "Project 02",
    affiliation: "NTU · CN Yang Scholars Programme",
    title: "Probabilistic lives saved from risk reduction — Cyclone Fani",
    lede:
      "A counterfactual framework to quantify how many lives India’s evacuation likely spared during Tropical Cyclone Fani (Odisha, May 2019).",
    body: (
      <>
        <p>
          Using counterfactual disaster risk analysis, I linked{" "}
          <strong className="text-white/85 font-medium">hazard</strong> (storm-surge inundation),{" "}
          <strong className="text-white/85 font-medium">exposure</strong> (buildings and occupancy), and{" "}
          <strong className="text-white/85 font-medium">vulnerability</strong> (damage fragility) to estimate fatalities{" "}
          <em>without</em> the evacuation intervention versus observed outcomes.
        </p>
        <p>
          The counterfactual estimate for fatalities absent evacuation sits around{" "}
          <strong className="text-white/85 font-medium">3,223</strong>, compared with{" "}
          <strong className="text-white/85 font-medium">39</strong> recorded deaths — implying on the order of{" "}
          <strong className="text-emerald-400/95 font-medium">~318,420 lives</strong> probabilistically saved by the DRR response. The work is summarized in a{" "}
          <strong className="text-white/85 font-medium">UNDRR publication</strong> on measuring “invisible” benefits of disaster risk reduction.
        </p>
      </>
    ),
    chips: ["Counterfactual risk", "Fani · Odisha 2019", "DRR impact"],
    poster: researchPosterFani,
    posterAlt: "Research poster — Measuring probabilistic lives saved, Cyclone Fani, NTU CN Yang",
    accent: "#34d399",
    publication: { label: "Read on UNDRR", href: UNDRR_URL },
  },
];

const ResearchCard = ({ item, index, onOpenPoster }) => {
  const [expanded, setExpanded] = useState(false);
  const detailId = `research-detail-${index}`;

  return (
    <motion.article
      variants={fadeIn("up", "spring", 0.1 + index * 0.1, 0.7)}
      className="flex w-[86%] max-w-[400px] shrink-0 flex-col overflow-hidden rounded-[22px] border border-white/[0.08] bg-tertiary/60 md:w-auto md:max-w-none"
      style={{ boxShadow: `0 18px 50px -24px ${item.accent}55` }}
    >
      {/* Poster preview — tap to open full size */}
      <button
        type="button"
        onClick={() => onOpenPoster(item.poster, item.posterAlt)}
        className="group relative h-[200px] w-full shrink-0 overflow-hidden bg-black/30 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400/80 sm:h-[240px]"
        aria-label={`Enlarge poster: ${item.title}`}
      >
        <img
          src={item.poster}
          alt={item.posterAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0820]/90 via-transparent to-transparent"
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] text-white/85 backdrop-blur-md">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
          View poster
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em]">
          <span style={{ color: item.accent }}>{item.kicker}</span>
          <span className="h-px flex-1 bg-white/[0.08]" aria-hidden />
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-wider text-white/40">{item.affiliation}</p>
        <h3 className="mt-1.5 text-[18px] font-semibold leading-snug text-white sm:text-[20px]">{item.title}</h3>

        <p
          className={`mt-2 border-l-2 pl-3 text-[14px] leading-[22px] text-white/60 ${expanded ? "" : "line-clamp-1"}`}
          style={{ borderColor: item.accent }}
        >
          {item.lede}
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={detailId}
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-4 text-[14px] leading-[24px] text-white/60">{item.body}</div>
              <div className="flex flex-wrap gap-2 pt-4">
                {item.chips.map((c) => (
                  <span key={c} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[11px] text-white/50">
                    {c}
                  </span>
                ))}
              </div>
              {item.publication && (
                <a
                  href={item.publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/[0.08] px-4 text-[14px] font-medium text-emerald-300/95 transition-colors hover:border-emerald-400/45 hover:bg-emerald-500/[0.14]"
                >
                  {item.publication.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={detailId}
          className="mt-auto -mx-2 inline-flex min-h-[44px] items-center gap-1.5 self-start rounded-lg px-2 pt-3 text-[13.5px] font-semibold transition-opacity hover:opacity-85 active:bg-white/5"
          style={{ color: item.accent }}
        >
          {expanded ? "Show less" : "Read more"}
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
};

const Research = () => {
  const [lightbox, setLightbox] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const railRef = useRef(null);
  useLockBodyScroll(!!lightbox);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const onRailScroll = () => {
    const rail = railRef.current;
    const first = rail?.firstElementChild;
    if (!first) return;
    const step = first.getBoundingClientRect().width + 16; // card + gap-4
    setActiveSlide(Math.min(RESEARCH_ITEMS.length - 1, Math.round(rail.scrollLeft / step)));
  };

  const goToSlide = (i) => {
    const card = railRef.current?.children[i];
    if (card) railRef.current.scrollTo({ left: card.offsetLeft - railRef.current.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Geospatial statistics & disaster risk.</p>
        <h2 className={`${styles.sectionHeadText}`}>Research.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.08, 1)}
        className="mt-4 max-w-3xl text-[15px] leading-[26px] text-white/65 sm:text-[17px] sm:leading-[30px]"
      >
        Two CN Yang Scholars projects connecting rigorous{" "}
        <span className="text-white/85">spatial modelling</span> to questions policymakers actually care about.
      </motion.p>

      {/* Phones: swipe rail (same pattern as Projects). md+: side-by-side grid. */}
      <div
        ref={railRef}
        onScroll={onRailScroll}
        className="snap-row -mx-5 mt-8 flex items-start gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:px-0 md:pb-0"
      >
        {RESEARCH_ITEMS.map((item, index) => (
          <ResearchCard
            key={item.kicker}
            item={item}
            index={index}
            onOpenPoster={(src, alt) => setLightbox({ src, alt })}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1 md:hidden">
        {RESEARCH_ITEMS.map((item, i) => (
          <button
            key={item.kicker}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Show research project ${i + 1} of ${RESEARCH_ITEMS.length}`}
            aria-current={activeSlide === i}
            className="flex h-8 w-8 items-center justify-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === i ? "w-5 bg-[#915EFF]" : "w-1.5 bg-white/25"
              }`}
            />
          </button>
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Poster enlarged"
              className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-8 bg-black/92 backdrop-blur-sm cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightbox(null)}
            >
              <motion.img
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[min(88dvh,1200px)] max-w-full w-auto object-contain rounded-lg shadow-2xl cursor-default pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="button"
                className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 transition-colors"
                aria-label="Close"
                onClick={() => setLightbox(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default SectionWrapper(Research, "research");
