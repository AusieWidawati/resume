import { motion } from "framer-motion";
import { styles } from "../styles";
import SnapshotsMarquee from "./SnapshotsMarquee";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto min-h-[100svh] sm:min-h-0 flex flex-col justify-center pt-[calc(88px+env(safe-area-inset-top))] pb-10 sm:pt-[120px] sm:pb-14">
      {/* Ambient orbs — clipped by a wrapper that doesn't affect transforms */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="orb w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-purple-600 top-[-100px] left-[-150px]" />
        <div className="orb w-[300px] h-[300px] bg-fuchsia-600 top-[80px] right-[-60px]" />
        <div className="orb w-[200px] h-[200px] bg-indigo-600 bottom-0 left-[40%]" />
      </div>

      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-stretch gap-4 sm:gap-5 w-full`}>
        <motion.div
          // Dot + rail, shown at every size; the rail stretches with the text column
          className="flex shrink-0 flex-col items-center pt-4 sm:pt-5 pb-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 rounded-full bg-[#915EFF] glow-ring" />
          <div className="w-[3px] sm:w-1 flex-1 rounded-full bg-gradient-to-b from-[#915EFF] via-[#915EFF]/60 to-transparent" />
        </motion.div>

        <motion.div
          className="min-w-0 flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="shimmer-text">Ausie</span>.
          </h1>

          <p className={`${styles.heroSubText} mt-4 sm:mt-3 !text-white/90 max-w-[38rem]`}>
            AI product manager and venture community builder.
          </p>

          <p className="mt-3 max-w-[38rem] text-[15px] leading-[25px] text-white/60 sm:text-[17px] sm:leading-[29px] lg:text-[18px] lg:leading-[31px]">
            I drive enterprise digital transformation and run a Singapore tech community that connects builders and
            investors.
          </p>

          <motion.div
            className="mt-6 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/ausie-widawati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-2 text-white/60 hover:text-[#915EFF] active:text-[#915EFF] transition-colors duration-200 text-[15px] sm:text-sm"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Ausie Widawati
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a
              href="mailto:ausie.widawati@gmail.com"
              className="flex min-h-[44px] min-w-0 items-center gap-2 text-white/60 hover:text-[#915EFF] active:text-[#915EFF] transition-colors duration-200 text-[15px] sm:text-sm break-all"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              ausie.widawati@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-6 grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:flex sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="cta-glow flex min-h-[48px] items-center justify-center whitespace-nowrap px-5 sm:px-6 py-2.5 rounded-full text-[15px] sm:text-sm font-semibold text-white bg-[#915EFF] hover:bg-[#7c3aed] active:scale-[0.97] transition-colors duration-200"
            >
              See my shipped AI
            </a>
            <a
              href="#contact"
              className="flex min-h-[48px] items-center justify-center whitespace-nowrap px-5 sm:px-6 py-2.5 rounded-full text-[15px] sm:text-sm font-semibold text-white/80 bg-white/5 backdrop-blur-sm hover:text-white hover:bg-white/10 active:scale-[0.97] transition-all duration-200 border border-white/10"
            >
              Let's talk!
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={`relative z-[1] mx-auto mt-10 w-full max-w-7xl sm:mt-12 ${styles.paddingX}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <SnapshotsMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;
