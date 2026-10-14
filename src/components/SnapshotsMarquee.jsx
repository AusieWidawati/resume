import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ausieFws,
  balineseDance,
  fwsGroupPic,
  peVcInsead,
  superAi,
} from "../assets";

/** Same viewport width for every slide; height fixed for a uniform strip */
const CAROUSEL_SLIDES = [
  { src: fwsGroupPic, alt: "Friends Who Share tech community group photo" },
  { src: ausieFws, alt: "Friends Who Share — community snapshot" },
  { src: balineseDance, alt: "Balinese dance performance with ensemble" },
  { src: superAi, alt: "Tech event — AI and startup ecosystem" },
  { src: peVcInsead, alt: "INSEAD Private Equity & Venture Capital Conference Singapore" },
];

const LOOP_DURATION_SEC = 38;

export const SnapshotsMarquee = () => {
  const reduceMotion = useReducedMotion();
  const loopSlides = useMemo(() => [...CAROUSEL_SLIDES, ...CAROUSEL_SLIDES], []);

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-5">
        {CAROUSEL_SLIDES.map(({ src, alt }) => (
          <div
            key={alt}
            className="h-[200px] w-full sm:h-[220px] sm:w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/20 shadow-lg shadow-black/30"
          >
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative -mx-5 sm:mx-0 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <motion.div
        className="flex w-max gap-3 sm:gap-5 md:gap-6"
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
            className="h-[190px] w-[260px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/25 shadow-xl shadow-black/40 sm:h-[240px] sm:w-[320px] md:h-[260px] md:w-[340px]"
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SnapshotsMarquee;
