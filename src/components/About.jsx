import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const OPEN_TO_ROLES = [
  'Product management',
  1800,
  'Strategy/Management Consulting',
  1800,
  'Venture Capital',
  1800,
  'Investment-adjacent role',
  1800,
];

/** Scroll-linked fade + slide; respects prefers-reduced-motion */
const ScrollReveal = ({
  children,
  className = '',
  yFrom = 28,
  xFrom = 0,
  offset = ['start 0.9', 'start 0.38'],
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [yFrom, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, x, opacity }}
    >
      {children}
    </motion.div>
  );
};

const bodySm =
  'text-secondary text-[14px] sm:text-[15px] leading-[23px] sm:leading-[26px]';

const About = () => {
  const columnRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: columnProgress } = useScroll({
    target: columnRef,
    offset: ['start 0.85', 'end 0.2'],
  });

  const lineScaleX = useTransform(columnProgress, [0.08, 0.45], [0, 1]);
  const orbY = useTransform(columnProgress, [0, 1], [0, -18]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Profile photo — layered gradient slabs behind the card */}
      <motion.div
        className="group relative mx-auto mt-8 mb-10 h-[206px] w-[170px] sm:h-[255px] sm:w-[210px]"
        variants={fadeIn("up", "spring", 0.1, 0.75)}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[18px] opacity-55 transition-transform duration-500 [transform:rotate(6deg)_translateY(6px)] group-hover:[transform:rotate(8deg)_translateY(6px)]"
          style={{
            background: "linear-gradient(135deg, #ff6ec7, #915eff)",
            boxShadow: "0 12px 40px rgba(255,110,199,0.25)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-[18px] opacity-40 transition-transform duration-500 [transform:rotate(-3.5deg)_translateY(3px)] group-hover:[transform:rotate(-5deg)_translateY(3px)]"
          style={{ background: "linear-gradient(135deg, #915eff, #60a5fa)" }}
        />
        <div
          className="relative h-full w-full rounded-[16px] p-[2px]"
          style={{
            background: "linear-gradient(135deg, #ff6ec7, #915eff, #60a5fa)",
            boxShadow: "0 20px 60px rgba(145,94,255,0.35), 0 8px 24px rgba(255,110,199,0.2)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-[14px]">
            <img
              src={`${import.meta.env.BASE_URL}ausie-white-bg.svg`}
              alt="Ausie Widawati"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-6 sm:mt-4">
        <div
          ref={columnRef}
          className="relative flex flex-1 flex-col gap-8 sm:gap-10 md:gap-12"
        >
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-4 top-0 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(145,94,255,0.14),transparent)] md:-right-8"
              style={{ y: orbY }}
            />
          )}

          <ScrollReveal yFrom={36} xFrom={0} className="relative z-[1] max-w-2xl">
            <p className="text-[15px] font-medium leading-[26px] text-[#dfd9ff] sm:text-[16px] sm:leading-[28px]">
              I'm an{' '}
              <span className="bg-gradient-to-r from-white to-[#c4b5fd] bg-clip-text font-semibold text-transparent">
                AI product manager and strategy consultant
              </span>
              , and a graduate of the{' '}
              <span className="font-semibold text-white">INSEAD</span> Master in
              Management programme. I ship enterprise AI platforms, drive digital
              transformation, and think commercially — from pricing strategy to deal
              evaluation.
            </p>
          </ScrollReveal>

          <ScrollReveal yFrom={26} xFrom={-22} className="relative z-[1] md:pl-10">
            <div
              className="absolute left-0 top-1 hidden h-[calc(100%-0.25rem)] w-px overflow-hidden bg-white/10 md:block"
              aria-hidden
            >
              {reduceMotion ? (
                <div className="h-full w-full bg-gradient-to-b from-[#915eff] via-[#e879f9]/80 to-transparent" />
              ) : (
                <motion.div
                  className="h-full w-full origin-top bg-gradient-to-b from-[#915eff] via-[#e879f9] to-transparent"
                  style={{ scaleY: lineScaleX, transformOrigin: 'top' }}
                />
              )}
            </div>
            <p className={`${bodySm} md:pl-8`}>
              I own products end-to-end. From requirements to UAT to stakeholder
              management, I turn complex business problems into systems that work.
            </p>
          </ScrollReveal>

          <ScrollReveal
            yFrom={22}
            xFrom={18}
            offset={['start 0.88', 'start 0.32']}
            className="relative z-[1] md:ml-4 md:max-w-[94%]"
          >
            <p className={bodySm}>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#915eff]">
                On the side
              </span>
              Beyond my day job, I run{' '}
              <a
                href="https://www.linkedin.com/company/friendswhoshare/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#dfd9ff] underline decoration-[#915EFF]/45 underline-offset-[3px] transition-colors duration-200 hover:text-white hover:decoration-[#e879f9]"
              >
                Friends Who Share
              </a>
              , an AI and tech startup community connecting builders, thinkers, and
              investors in Singapore.
            </p>
          </ScrollReveal>
        </div>

      </div>

      {/* Full-viewport-width strip (breaks out of max-w column) */}
      <ScrollReveal
        yFrom={16}
        xFrom={0}
        offset={['start 0.88', 'start 0.35']}
        className="relative z-[1] mt-10 sm:mt-12"
      >
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip">
          <motion.div
            role="note"
            aria-label="Currently open to work"
            className="relative overflow-hidden rounded-none py-6 shadow-2xl sm:py-7"
            style={{
              background:
                'linear-gradient(128deg, #ff3cac 0%, #c026d3 42%, #7c3aed 78%, #4f46e5 100%)',
            }}
            animate={
              reduceMotion
                ? {
                    boxShadow:
                      '0 12px 48px rgba(124, 58, 237, 0.45), 0 8px 28px rgba(255, 60, 172, 0.35)',
                  }
                : {
                    boxShadow: [
                      '0 10px 40px rgba(192, 38, 211, 0.45), 0 0 0 0 rgba(124, 58, 237, 0)',
                      '0 20px 64px rgba(255, 60, 172, 0.55), 0 0 80px 18px rgba(124, 58, 237, 0.55)',
                      '0 10px 40px rgba(192, 38, 211, 0.45), 0 0 0 0 rgba(124, 58, 237, 0)',
                    ],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            {!reduceMotion && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-[#4f46e5]/30"
                animate={{ opacity: [0.28, 0.5, 0.28] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
            <div
              className={`relative z-[1] mx-auto max-w-7xl text-left ${styles.paddingX}`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white/95 ring-1 ring-white/25 backdrop-blur-[2px]">
                Currently
              </span>
              <p className="mt-4 max-w-3xl text-[16px] font-medium leading-[28px] text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[34px]">
                I'm open to opportunities in{' '}
                {reduceMotion ? (
                  <span className="inline-block font-extrabold bg-gradient-to-r from-white/90 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.4)]">
                    product management, strategy/management consulting, venture
                    capital, or investment adjacent roles.
                  </span>
                ) : (
                  <TypeAnimation
                    sequence={OPEN_TO_ROLES}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    cursor
                    style={{
                      display: 'inline-block',
                      filter: 'drop-shadow(0 0 18px rgba(34, 211, 238, 0.42))',
                    }}
                    className="font-extrabold bg-gradient-to-r from-white/90 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  />
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </>
  )
}

export default SectionWrapper(About, "about")