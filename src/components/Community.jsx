import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  ausieFws,
  balineseDance,
  fwsGroupPic,
  peVcInsead,
  superAi,
} from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

/** Same viewport width for every slide; height fixed for a uniform strip */
const CAROUSEL_SLIDES = [
  { src: fwsGroupPic, alt: "Friends Who Share tech community group photo" },
  { src: ausieFws, alt: "Friends Who Share — community snapshot" },
  { src: balineseDance, alt: "Balinese dance performance with ensemble" },
  { src: superAi, alt: "Tech event — AI and startup ecosystem" },
  { src: peVcInsead, alt: "INSEAD Private Equity & Venture Capital Conference Singapore" },
];

const LOOP_DURATION_SEC = 38;

const CommunityMarquee = () => {
  const reduceMotion = useReducedMotion();
  const loopSlides = useMemo(() => [...CAROUSEL_SLIDES, ...CAROUSEL_SLIDES], []);

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-5">
        {CAROUSEL_SLIDES.map(({ src, alt }) => (
          <div
            key={alt}
            className="h-[220px] w-[300px] sm:w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/20 shadow-lg shadow-black/30"
          >
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative -mx-2 sm:mx-0 overflow-hidden rounded-2xl py-2">
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-2 left-0 z-10 w-16 bg-gradient-to-r from-[#050816] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-2 right-0 z-10 w-16 bg-gradient-to-l from-[#050816] to-transparent sm:w-24"
        aria-hidden
      />

      <motion.div
        className="flex w-max gap-5 md:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: LOOP_DURATION_SEC,
            ease: "linear",
          },
        }}
        aria-hidden
      >
        {loopSlides.map(({ src, alt }, i) => (
          <div
            key={`${alt}-${i}`}
            className="h-[220px] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/25 shadow-xl shadow-black/40 sm:h-[240px] sm:w-[320px] md:h-[260px] md:w-[340px]"
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Community = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Community.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.08, 1)} className="mt-8 space-y-6 max-w-3xl">
        <p className="text-[17px] leading-[30px] text-white/70">
          I co-founded{" "}
          <span className="text-white/90 font-medium">Friends Who Share</span>, a tech-sharing community where people swap ideas,
          tools, and experiments — built around curiosity rather than credentials.
        </p>
        <p className="text-[17px] leading-[30px] text-white/70">
          I volunteer at tech events, help out behind the scenes where it counts, and regularly join startup, AI, and VC gatherings to
          stay close to builders and capital allocators alike.
        </p>
        <p className="text-[17px] leading-[30px] text-white/70">
          Off-screen, I perform{" "}
          <span className="text-white/90 font-medium">Balinese dance</span> as part of an ensemble — culture and discipline from a
          different stage.
        </p>
        <p className="text-[17px] leading-[30px] text-white/70">
          I also serve as an active alumni representative for{" "}
          <span className="text-white/90 font-medium">INSEAD MIM</span> and{" "}
          <span className="text-white/90 font-medium">NTU CN Yang Scholars Programme</span>, staying engaged with peers and incoming
          cohorts.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.15, 0.85)} className="mt-14 w-full max-w-7xl mx-auto">
        <p className="mb-6 text-[13px] uppercase tracking-[0.2em] text-white/35">Snapshots</p>
        <CommunityMarquee />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Community, "community");
