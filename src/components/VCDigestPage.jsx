import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { VCDigestPane } from "./Investment";

const VCDigestPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20" />

      <div className="relative z-10">
        <div className={`${styles.paddingX} pt-8 sm:pt-10`}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-medium text-white/75 transition-colors duration-200 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to portfolio
          </Link>
        </div>

        <div className={`${styles.padding} pt-10`}>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={styles.sectionSubText}>Ausie's Weekly Venture</p>
            <h1 className={styles.sectionHeadText}>ASEAN VC Digest.</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-3xl text-[16px] leading-[30px] text-white/55"
          >
            Welcome to my weekly intelligence report on venture capital activity, startup funding rounds, and strategic deals across Southeast Asia (with emphasis on Singapore). Curated by me (Ausie) & updated on a weekly basis, credits to Claude Code Cowork. Sources include Moody's Analytics, TechAsia, DealStreetAsia, e27, Crunchbase, Pitchbook, AngelList, LinkedIn and official press releases. Enjoy!
          </motion.p>

          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            initial="hidden"
            animate="show"
            className="mt-10"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.01)",
              display: "flex",
              minHeight: "calc(100vh - 260px)",
            }}
          >
            <VCDigestPane />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VCDigestPage;
