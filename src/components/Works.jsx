import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ── Video modal ──────────────────────────────────────────────────────

const VideoModal = ({ video, name, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden"
        style={{ background: "rgba(10,8,25,0.95)", border: "1px solid rgba(145,94,255,0.2)", boxShadow: "0 0 80px rgba(145,94,255,0.15)" }}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/70 text-sm font-medium">{name}</span>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <video
          src={video}
          controls
          autoPlay
          className="w-full"
          style={{ display: "block", maxHeight: "75vh" }}
        />
      </motion.div>
    </motion.div>
  );
};

// ── Project card ─────────────────────────────────────────────────────

const ProjectCard = ({ index, name, description, tags, image, source_code_link, video }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (videoRef.current) { videoRef.current.play(); }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div
            className="relative w-full h-[230px] cursor-pointer group"
            onClick={() => video && setModalOpen(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video replaces image when available */}
            {video ? (
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
            )}

            {/* Play badge on hover (video cards only) */}
            {video && (
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div style={{ background: "rgba(145,94,255,0.85)", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 24px rgba(145,94,255,0.5)" }}>
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* GitHub button */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/5">
            <button
              onClick={() => navigate(`/project/${index}`)}
              className="flex items-center gap-1.5 text-[13px] text-[#915eff] hover:text-white transition-colors font-medium"
            >
              Details
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Tilt>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <VideoModal video={video} name={name} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// ── Section ──────────────────────────────────────────────────────────

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This gallery of projects is a showcase of passion and academic projects,
          all of which are targeted towards solving problems with different technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
