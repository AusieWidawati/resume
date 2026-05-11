import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { researchPosterFani, researchPosterFyp } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
    posterTint: "from-sky-500/10",
    publication: null,
    reverse: false,
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
    posterTint: "from-emerald-500/10",
    publication: { label: "Read on UNDRR", href: UNDRR_URL },
    reverse: true,
  },
];

function PosterFrame({ src, alt, accent, posterTint, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(src, alt)}
      className="group relative w-full max-w-xl mx-auto text-left rounded-2xl overflow-hidden border border-white/[0.08] bg-black/30 shadow-2xl shadow-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] focus-visible:ring-sky-400/80"
      style={{ "--accent": accent }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${posterTint} to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none z-[1]`} />
      <img src={src} alt={alt} className="relative z-0 w-full h-auto block object-cover max-h-[min(72vh,820px)] object-top" loading="lazy" />
      <div className="absolute bottom-3 right-3 z-[2] flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md px-3 py-1.5 text-[11px] text-white/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
        </svg>
        Enlarge
      </div>
    </motion.button>
  );
}

const Research = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Geospatial statistics & disaster risk.</p>
        <h2 className={`${styles.sectionHeadText}`}>Research.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.08, 1)} className="mt-6 max-w-3xl space-y-4">
        <p className="text-[17px] leading-[30px] text-white/65">
          Two CN Yang Scholars programme projects: one on{" "}
          <span className="text-white/85">spatial interpolation under uncertainty</span> with an NTU–Stanford line-up, and one on{" "}
          <span className="text-white/85">counterfactual lives saved</span> from evacuation during Cyclone Fani — connecting rigorous spatial modelling to questions policymakers actually care about.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col gap-24 md:gap-28">
        {RESEARCH_ITEMS.map((item, index) => (
          <motion.article
            key={item.kicker}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            className="relative"
          >
            {/* Vertical spine / timeline dot */}
            <div
              className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
              aria-hidden
            />
            <div
              className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full border-2 border-white/25"
              style={{
                backgroundColor: `${item.accent}55`,
                borderColor: `${item.accent}aa`,
                boxShadow: `0 0 24px ${item.accent}44`,
              }}
              aria-hidden
            />

            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-14 items-start ${
                item.reverse ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : ""
              }`}
            >
              <div className="relative md:pt-6">
                <PosterFrame
                  src={item.poster}
                  alt={item.posterAlt}
                  accent={item.accent}
                  posterTint={item.posterTint}
                  onOpen={(src, alt) => setLightbox({ src, alt })}
                />
              </div>

              <div className="space-y-5 md:pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35"
                  >
                    {item.kicker}
                  </span>
                  <span className="h-px flex-1 min-w-[2rem] bg-white/[0.08]" aria-hidden />
                </div>
                <p className="text-[12px] uppercase tracking-wider text-white/40">{item.affiliation}</p>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-white leading-[1.2]">{item.title}</h3>
                <p className="text-[16px] leading-[28px] text-white/55 border-l-2 pl-4" style={{ borderColor: item.accent }}>
                  {item.lede}
                </p>
                <div className="space-y-4 text-[15px] leading-[28px] text-white/60 [&_p]:space-y-4">{item.body}</div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.chips.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03] text-white/45"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {item.publication && (
                  <a
                    href={item.publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 rounded-xl px-4 py-3 text-[14px] font-medium transition-colors border border-emerald-500/35 bg-emerald-500/[0.08] text-emerald-300/95 hover:bg-emerald-500/[0.14] hover:border-emerald-400/45"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {item.publication.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Poster enlarged"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-sm cursor-zoom-out"
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
              className="max-h-[min(92vh,1200px)] max-w-full w-auto object-contain rounded-lg shadow-2xl cursor-default pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 p-2.5 transition-colors"
              aria-label="Close"
              onClick={() => setLightbox(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Research, "research");
