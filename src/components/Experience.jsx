import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { motion, AnimatePresence, useDragControls, useReducedMotion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLockBodyScroll } from "../utils/device";

const isCurrentRole = (date) => /present/i.test(date || '');

const Modal = ({ experience, onClose }) => {
  const dragControls = useDragControls();
  useLockBodyScroll(true);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${experience.title} at ${experience.company_name}`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      {/* Bottom sheet on phones, centered card from sm up */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[88dvh] sm:max-h-[80vh] overflow-y-auto overscroll-contain rounded-t-3xl sm:rounded-2xl bg-[#1d1836] px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:p-8 shadow-2xl border border-white/10 border-b-0 sm:border-b"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
        // Drag only from the grab handle so inner scrolling still works
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120 || info.velocity.y > 600) onClose();
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden
          className="sm:hidden -mx-5 -mt-3 mb-2 flex h-8 cursor-grab touch-none items-center justify-center"
          onPointerDown={(e) => dragControls.start(e)}
        >
          <span className="h-1.5 w-10 rounded-full bg-white/25" />
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 flex h-11 w-11 items-center justify-center rounded-full text-secondary hover:text-white active:bg-white/10 transition-colors text-2xl leading-none"
        >
          ×
        </button>

        <div className="mb-6 pr-10">
          <h3 className="text-white text-[20px] sm:text-[22px] font-bold leading-tight">{experience.title}</h3>
          <p className="text-secondary text-[15px] font-semibold mt-1">{experience.company_name}</p>
          <p className="text-[13px] text-white/50 mt-1">{experience.date}</p>
        </div>

        <ul className="list-disc ml-5 space-y-3">
          {experience.points.map((point, index) => (
            <li
              key={`modal-point-${index}`}
              className="text-white-100 text-[15px] sm:text-[14px] tracking-wide leading-relaxed"
            >
              {point.full}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = isCurrentRole(experience.date);

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: 'linear-gradient(180deg, #1d1836 0%, #1a1530 100%)',
          color: '#fff',
          boxShadow:
            '0 18px 50px -18px rgba(145, 94, 255, 0.28), 0 10px 30px -8px rgba(0, 0, 0, 0.55)',
          padding: '1.5rem 1.5rem 1.25rem',
          borderRadius: '18px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
        iconStyle={{
          background: experience.iconBg,
          boxShadow: current
            ? '0 0 0 4px rgba(145, 94, 255, 0.55), 0 0 24px rgba(145, 94, 255, 0.6), 0 0 0 9px rgba(145, 94, 255, 0.18)'
            : '0 0 0 4px rgba(145, 94, 255, 0.22), 0 0 0 6px rgba(255, 255, 255, 0.04)',
        }}
        icon={
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="h-[80%] w-[80%] object-contain"
            />
          </div>
        }
      >
        <div className="exp-card group">
          {/* Date + status row — replaces the library's overlapping mobile date */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#dfd9ff] ring-1 ring-white/10">
              <span
                aria-hidden
                className="block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#915EFF] to-[#e879f9]"
              />
              {experience.date}
            </span>

            {current && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                style={{
                  background: 'linear-gradient(135deg, #00cea8, #915EFF)',
                  boxShadow: '0 0 18px rgba(0, 206, 168, 0.4)',
                }}
              >
                <motion.span
                  aria-hidden
                  className="block h-1.5 w-1.5 rounded-full bg-white"
                  animate={
                    reduceMotion
                      ? undefined
                      : { opacity: [1, 0.35, 1], scale: [1, 1.25, 1] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                />
                Currently
              </span>
            )}
          </div>

          <h3 className="text-[20px] sm:text-[24px] font-bold leading-tight text-white">
            {experience.title}
          </h3>
          <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-[#c4b5fd]">
            {experience.company_name}
          </p>

          <span
            aria-hidden
            className="my-4 block h-px w-12 bg-gradient-to-r from-[#915EFF] to-transparent"
          />

          <ul className="m-0 list-none space-y-2.5 p-0">
            {experience.points
              .filter((p) => p.featured !== false)
              .map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="flex gap-2.5 text-[14px] leading-[21px] text-white-100"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#e879f9] shadow-[0_0_6px_rgba(145,94,255,0.55)]"
                  />
                  <span>{point.short}</span>
                </li>
              ))}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="group/cta mt-3 -mx-2 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 cursor-pointer transition-opacity hover:opacity-90 active:bg-white/5"
          >
            <span className="text-[14px] sm:text-[12.5px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              View full experience details
            </span>
            <span
              aria-hidden
              className="text-[14px] text-pink-300 transition-transform duration-300 group-hover/cta:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </VerticalTimelineElement>

      {/* Portal: sections are z-0 stacking contexts, which would keep the sheet under the navbar */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && (
            <Modal experience={experience} onClose={() => setModalOpen(false)} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="exp-timeline mt-8 sm:mt-20 flex flex-col">
        <VerticalTimeline lineColor="">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
