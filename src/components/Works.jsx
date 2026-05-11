import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiArrowRight } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ── Video modal ──────────────────────────────────────────────────────

const VideoModal = ({ video, name, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl"
        style={{
          background: "rgba(10,8,25,0.96)",
          border: "1px solid rgba(145,94,255,0.25)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06) inset, 0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(145,94,255,0.12)",
        }}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-medium text-white/80">{name}</span>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/45 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <video
          src={video}
          controls
          autoPlay
          className="block w-full"
          style={{ maxHeight: "75vh" }}
        />
      </motion.div>
    </motion.div>
  );
};

// ── Project card ─────────────────────────────────────────────────────

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  featured,
  details,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  const handleMouseEnter = () => {
    setHoveredIndex(index);
    if (videoRef.current) videoRef.current.play();
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const stackPreview =
    details?.techStack?.slice(0, 5) || tags.map((t) => t.name);

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.12, 0.75)}
        className="h-full w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          scale: isHovered ? 1.035 : 1,
          opacity: isDimmed ? 0.45 : 1,
          filter: isDimmed ? "grayscale(0.6)" : "grayscale(0)",
          zIndex: isHovered ? 5 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        style={{ transformOrigin: "center" }}
      >
        <div
          className="h-full rounded-[22px] p-[1px] transition-shadow duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(145,94,255,0.55), rgba(232,121,249,0.35), rgba(0,206,168,0.35), rgba(145,94,255,0.45))",
            boxShadow: isHovered
              ? "0 24px 60px -20px rgba(145,94,255,0.55), 0 8px 24px -10px rgba(232,121,249,0.35)"
              : "0 8px 28px -16px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex h-full flex-col rounded-[21px] bg-tertiary p-5 shadow-card">
            <div
              className="group relative h-[220px] w-full shrink-0 cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => video && setModalOpen(true)}
              role={video ? "button" : undefined}
              tabIndex={video ? 0 : undefined}
              onKeyDown={(e) => {
                if (video && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setModalOpen(true);
                }
              }}
              aria-label={video ? `Play demo video for ${name}` : undefined}
            >
              {video ? (
                <video
                  ref={videoRef}
                  src={video}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain bg-[#0a0a14] p-6"
                />
              )}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-[#050816]/20 to-transparent"
                aria-hidden
              />

              {featured && (
                <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/95 ring-1 ring-white/20 backdrop-blur-sm">
                  Featured
                </span>
              )}

              {video && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white/30"
                    style={{
                      background: "rgba(145,94,255,0.92)",
                      boxShadow: "0 0 32px rgba(145,94,255,0.55)",
                    }}
                  >
                    <FiPlay className="ml-0.5 h-6 w-6" aria-hidden />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex min-h-[112px] flex-col">
              <h3 className="text-[18px] font-bold leading-snug text-white sm:text-[20px] line-clamp-2">
                {name}
              </h3>
              <p className="mt-2 line-clamp-3 text-[13.5px] leading-[22px] text-secondary sm:text-[14px]">
                {description}
              </p>
            </div>

            <div className="mt-4 flex min-h-[56px] flex-wrap content-start gap-1.5">
              {stackPreview.map((tech) => (
                <span
                  key={`${name}-${tech}`}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-[#dfd9ff]/90"
                >
                  {tech}
                </span>
              ))}
              {details?.techStack?.length > 5 && (
                <span className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/45">
                  +{details.techStack.length - 5}
                </span>
              )}
            </div>

            <div className="mt-auto pt-4 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() => navigate(`/project/${index}`)}
                className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-[13.5px] font-bold text-white shadow-[0_10px_30px_-12px_rgba(145,94,255,0.7)] transition-all duration-300 hover:shadow-[0_14px_36px_-10px_rgba(232,121,249,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e879f9]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-tertiary"
                style={{
                  background:
                    "linear-gradient(120deg, #915EFF 0%, #c026d3 50%, #e879f9 100%)",
                }}
              >
                {/* Pulsing glow halo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-70 motion-safe:animate-[edu-pulse_2.2s_ease-in-out_infinite]"
                  style={{
                    boxShadow:
                      "0 0 0 0 rgba(232,121,249,0.45), 0 0 24px rgba(145,94,255,0.45)",
                  }}
                />
                {/* Shine sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[300%]"
                />
                <span className="relative">View project details</span>
                <FiArrowRight
                  className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden
                />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && video && (
          <VideoModal
            video={video}
            name={name}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// ── Section ──────────────────────────────────────────────────────────

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[16px] leading-[28px] text-secondary sm:text-[17px] sm:leading-[30px]"
        >
          Enterprise AI builds spanning knowledge engines, climate intelligence,
          regulated credit screening, and executive operating companions. Each
          card opens a full breakdown of the architecture, challenges, and
          outcomes.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4 xl:gap-6 2xl:gap-7 lg:mt-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || `project-${index}`}
            index={index}
            {...project}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
