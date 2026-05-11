import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const isCurrentRole = (date) => /present/i.test(date || '');

const Modal = ({ experience, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        className="relative bg-[#1d1836] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/10"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-white transition-colors text-2xl leading-none"
        >
          ×
        </button>

        <div className="mb-6">
          <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[15px] font-semibold mt-1">{experience.company_name}</p>
          <p className="text-[13px] text-white/50 mt-1">{experience.date}</p>
        </div>

        <ul className="list-disc ml-5 space-y-3">
          {experience.points.map((point, index) => (
            <li
              key={`modal-point-${index}`}
              className="text-white-100 text-[14px] tracking-wide leading-relaxed"
            >
              {point.full}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

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
                  className="flex gap-2.5 text-[13.5px] sm:text-[14px] leading-[20px] text-white-100"
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
            className="group/cta mt-5 inline-flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90"
          >
            <span className="text-[12.5px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
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

      {modalOpen && (
        <Modal experience={experience} onClose={() => setModalOpen(false)} />
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

      <div className="exp-timeline mt-16 sm:mt-20 flex flex-col">
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
