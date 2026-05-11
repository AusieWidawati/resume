import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { github } from "../assets";
import Navbar from "./Navbar";

const challengeAnchorId = (title) =>
  `challenge-${title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;

// ── Section heading with left blue bar ──────────────────────────────
const SectionHeading = ({ children }) => (
  <h2 className="text-[28px] font-bold text-white flex items-center gap-4 mb-6">
    <span className="w-[3px] h-8 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
    {children}
  </h2>
);

// ── Expandable feature card ──────────────────────────────────────────
const FeatureCard = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl px-5 py-4 mb-3 cursor-pointer transition-colors"
      style={{
        background: "#111118",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-white font-medium text-[15px]">{title}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && (
        <p className="mt-3 text-gray-400 text-[14px] leading-[24px]">{description}</p>
      )}
    </div>
  );
};

// ── Outcome metric card ──────────────────────────────────────────────
const MetricCard = ({ value, label }) => (
  <div
    className="rounded-xl p-6 text-center"
    style={{
      background: "rgba(59,130,246,0.07)",
      border: "1px solid rgba(59,130,246,0.18)",
    }}
  >
    <p className="font-bold text-[26px] leading-none mb-2" style={{ color: "#3b82f6" }}>
      {value}
    </p>
    <p className="text-gray-300 text-[13px] font-medium leading-snug">{label}</p>
  </div>
);

// ── Sticky table of contents ─────────────────────────────────────────
const TableOfContents = ({ items, activeSection }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-24">
      <p className="text-gray-500 text-[11px] uppercase tracking-widest mb-5 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        On this page
      </p>

      <div className="relative">
        {/* Vertical connecting line */}
        <div
          className="absolute top-2 bottom-2"
          style={{ left: "6px", width: "1px", background: "rgba(255,255,255,0.07)" }}
        />

        <ul className="space-y-0.5">
          {items.map((item) => {
            const isActive =
              activeSection === item.id ||
              item.subItems?.some((s) => s.id === activeSection);

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-3 py-1.5 text-[13px] w-full text-left transition-colors relative"
                  style={{ color: isActive ? "#3b82f6" : "#6b7280" }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <span
                      className="absolute rounded-full"
                      style={{
                        left: "-14px",
                        top: "6px",
                        bottom: "6px",
                        width: "2px",
                        background: "#3b82f6",
                      }}
                    />
                  )}
                  {/* Dot */}
                  <span
                    className="w-[13px] h-[13px] rounded-full border-2 shrink-0 z-10 transition-colors"
                    style={{
                      borderColor: isActive ? "#3b82f6" : "rgba(255,255,255,0.15)",
                      background: isActive ? "rgba(59,130,246,0.2)" : "#0a0a0f",
                    }}
                  />
                  <span className={isActive ? "text-[#3b82f6]" : "hover:text-gray-300"}>
                    {item.label}
                  </span>
                </button>

                {/* Sub-items */}
                {item.subItems?.length > 0 && (
                  <ul className="ml-6 mt-0.5 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => scrollTo(sub.id)}
                          className="flex items-center gap-2 py-1 text-[12px] w-full text-left transition-colors"
                          style={{
                            color: activeSection === sub.id ? "#3b82f6" : "#4b5563",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              background:
                                activeSection === sub.id ? "#3b82f6" : "rgba(255,255,255,0.15)",
                            }}
                          />
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// ── Main component ───────────────────────────────────────────────────
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const project = projects[parseInt(id)];

  // Always land at the top of the subpage (where the hero video sits)
  // when the route opens, regardless of the parent page's scroll position.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    if (!project) return;
    const ids = ["overview", "keyFeatures", "techStack", "challenges", "outcome"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((sId) => {
      const el = document.getElementById(sId);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0a0f" }}>
        <div className="text-center">
          <p className="text-white text-xl mb-4">Project not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="transition-colors"
            style={{ color: "#3b82f6" }}
          >
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  const { name, tags, image, video, source_code_link, details } = project;

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "keyFeatures", label: "Key Features" },
    { id: "techStack", label: "Tech Stack" },
    {
      id: "challenges",
      label: "Challenges & Learnings",
      subItems:
        details?.challenges?.map((c) => ({
          id: challengeAnchorId(c.title),
          label: c.title,
        })) || [],
    },
    { id: "outcome", label: "Outcome" },
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: "#0a0a0f" }}>

      <Navbar
        leading={
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[15px] font-medium transition-colors group text-white/50 hover:text-white"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover:-translate-x-0.5 transition-transform shrink-0"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Projects
          </button>
        }
      />

      {/* ── Hero / Title + Media ── */}
      <div className="pt-20" style={{ background: "#0d0d16" }}>
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>
                  #{tag.name}
                </span>
              ))}
            </div>
            <h1 className="text-[36px] sm:text-[46px] font-black text-white leading-tight">
              {name}
            </h1>
            {details?.tagline && (
              <p className="mt-3 max-w-3xl text-[15px] font-medium leading-relaxed text-[#c4b5fd] sm:text-[16px]">
                {details.tagline}
              </p>
            )}
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {video ? (
              <video
                src={video}
                controls
                className="w-full block"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full block"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-16">

          {/* Left: content */}
          <div className="flex-1 min-w-0">

            {/* Meta bar */}
            <div
              className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-5 text-[14px]" style={{ color: "#9ca3af" }}>
                {details?.duration && (
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {details.duration}
                  </span>
                )}
                {details?.status && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#4ade80" }} />
                    {details.status}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                {source_code_link && source_code_link !== "#" && (
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] transition-colors hover:text-white"
                    style={{
                      color: "#d1d5db",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <img src={github} alt="GitHub" className="w-4 h-4" />
                    Source
                  </a>
                )}
                {details?.demoLink && (
                  <a
                    href={details.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ background: "#3b82f6" }}
                  >
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            {(details?.overview || details?.context) && (
              <section id="overview" className="mb-14 scroll-mt-28">
                <SectionHeading>Overview</SectionHeading>
                {details.context && (
                  <p className="mb-4 text-[14px] leading-[26px] text-gray-500 italic border-l-2 border-[#915EFF]/40 pl-4">
                    {details.context}
                  </p>
                )}
                {details.overview && (
                  <p className="text-[15px] leading-[28px]" style={{ color: "#9ca3af" }}>
                    {details.overview}
                  </p>
                )}
              </section>
            )}

            {/* Key Features */}
            {details?.keyFeatures?.length > 0 && (
              <section id="keyFeatures" className="mb-14 scroll-mt-28">
                <SectionHeading>Key Features</SectionHeading>
                {details.keyFeatures.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </section>
            )}

            {/* Tech Stack */}
            {details?.techStack?.length > 0 && (
              <section id="techStack" className="mb-14 scroll-mt-28">
                <SectionHeading>Tech Stack</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {details.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-lg text-[13px] font-medium"
                      style={{
                        color: "#d1d5db",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Learnings */}
            {details?.challenges?.length > 0 && (
              <section id="challenges" className="mb-14 scroll-mt-28">
                <SectionHeading>Challenges & Learnings</SectionHeading>
                {details.challenges.map((c) => (
                  <div
                    key={c.title}
                    id={challengeAnchorId(c.title)}
                    className="mb-7 scroll-mt-28"
                  >
                    <h3 className="text-white font-semibold text-[17px] mb-2">{c.title}</h3>
                    <p className="text-[14px] leading-[26px]" style={{ color: "#9ca3af" }}>
                      {c.description}
                    </p>
                    {c.solution && (
                      <div
                        className="mt-3 rounded-lg border border-[#915EFF]/20 bg-[#915EFF]/[0.06] px-4 py-3"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd]">
                          Approach
                        </p>
                        <p className="mt-1 text-[14px] leading-[24px] text-gray-300">
                          {c.solution}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* Outcome */}
            {details?.outcome && (
              <section id="outcome" className="mb-14 scroll-mt-28">
                <SectionHeading>Outcome</SectionHeading>
                {details.outcome.description && (
                  <p className="text-[15px] leading-[28px] mb-6" style={{ color: "#9ca3af" }}>
                    {details.outcome.description}
                  </p>
                )}
                {details.outcome.metrics?.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {details.outcome.metrics.map((m) => (
                      <MetricCard key={m.label} {...m} />
                    ))}
                  </div>
                )}
                {details.outcome.achievements?.length > 0 && (
                  <div className="mt-8">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd]">
                      Highlights
                    </p>
                    <ul className="m-0 list-none space-y-2 p-0">
                      {details.outcome.achievements.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2 text-[14px] leading-[24px] text-gray-400"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]"
                            aria-hidden
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right: sticky TOC */}
          <div className="hidden lg:block w-60 shrink-0">
            <TableOfContents items={tocItems} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
