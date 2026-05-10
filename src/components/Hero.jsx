import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto pt-[120px] pb-10">
      {/* Ambient orbs — clipped by a wrapper that doesn't affect transforms */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="orb w-[500px] h-[500px] bg-purple-600 top-[-100px] left-[-150px]" />
        <div className="orb w-[300px] h-[300px] bg-fuchsia-600 top-[80px] right-[-60px]" />
        <div className="orb w-[200px] h-[200px] bg-indigo-600 bottom-0 left-[40%]" />
      </div>

      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <motion.div
          className="flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF] glow-ring" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="shimmer-text">Ausie</span>
          </h1>

          <p className={`${styles.heroSubText} mt-3 text-white/70`}>
            An AI product builder, consultant, and venture enthusiast.
            <br />
            I deliver products end-to-end, evaluate what's worth building, and stay close to the startup and tech community.
          </p>

          <motion.div
            className="mt-6 flex items-center gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/ausie-widawati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-[#915EFF] transition-colors duration-200 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Ausie Widawati
            </a>
            <span className="text-white/20">·</span>
            <a
              href="mailto:ausie.widawati@gmail.com"
              className="flex items-center gap-2 text-white/60 hover:text-[#915EFF] transition-colors duration-200 text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              ausie.widawati@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#915EFF] hover:bg-[#7c3aed] transition-colors duration-200 shadow-lg shadow-purple-900/40"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white/70 bg-white/5 backdrop-blur-sm hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-[#915EFF] to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
