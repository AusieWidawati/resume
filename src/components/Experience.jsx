import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { motion, AnimatePresence } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

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

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.filter(p => p.featured !== false).map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point.short}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 text-[13px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 hover:opacity-80 transition-opacity cursor-pointer"
        >
          View full experience details →
        </button>
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
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
