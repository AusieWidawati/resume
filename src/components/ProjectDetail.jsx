import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, experiences } from "../constants";
import { github } from "../assets";
import Navbar from "./Navbar";
import ToolChips, { aiFirst } from "./ToolChips";

const SECTIONS = [
  { id: "challenge", label: "Business Challenge" },
  { id: "solution", label: "Solution" },
  { id: "value", label: "Business Value" },
  { id: "role", label: "My Role" },
  { id: "architecture", label: "Product & Architecture" },
];

const BulletDot = () => (
  <span
    aria-hidden
    className="mt-[9px] block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#e879f9]"
  />
);

const SubHeading = ({ children }) => (
  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd]">{children}</p>
);

// ── Section heading with left blue bar ──────────────────────────────
const SectionHeading = ({ children }) => (
  <h2 className="text-[23px] sm:text-[28px] font-bold text-white flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
    <span className="w-[3px] h-8 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
    {children}
  </h2>
);

// ── Expandable feature card ──────────────────────────────────────────
const FeatureCard = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl mb-3 transition-colors"
      style={{
        background: "#111118",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex min-h-[52px] w-full items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left active:bg-white/[0.03] rounded-xl"
      >
        <span className="text-white font-medium text-[15px]">{title}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="px-4 sm:px-5 pb-4 -mt-1 text-gray-400 text-[14.5px] sm:text-[14px] leading-[24px]">{description}</p>
      )}
    </div>
  );
};

// ── Outcome metric card ──────────────────────────────────────────────
const MetricCard = ({ value, label }) => (
  <div
    className="rounded-xl px-2.5 py-3.5 sm:p-5 text-center"
    style={{
      background: "rgba(59,130,246,0.07)",
      border: "1px solid rgba(59,130,246,0.18)",
    }}
  >
    <p className="font-bold text-[20px] sm:text-[28px] leading-none mb-2" style={{ color: "#60a5fa" }}>
      {value}
    </p>
    <p className="text-gray-300 text-[11.5px] sm:text-[13px] font-medium leading-snug">{label}</p>
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
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const project = projects[parseInt(id)];

  // Always land at the top of the subpage (where the hero video sits)
  // when the route opens, regardless of the parent page's scroll position.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    if (!project) return;
    const ids = SECTIONS.map((sec) => sec.id);
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

  const { name, category, tools = [], image, video, source_code_link, details } = project;

  // My Role can mirror a group from the Work Experience entry (single source of truth)
  const linkedGroup = details?.experienceGroup
    ? experiences
        .find((e) => e.company_name === details.experienceGroup.company)
        ?.groups?.find((g) => g.title === details.experienceGroup.group)
    : null;
  const roleItems = linkedGroup?.items ?? details?.role ?? [];

  const openInExperience = () =>
    navigate("/", { state: { openExperience: details.experienceGroup } });

  const tocItems = SECTIONS.filter(({ id: key }) => {
    if (key === "role") return roleItems.length > 0;
    const v = details?.[key];
    return Array.isArray(v) ? v.length > 0 : Boolean(v);
  });

  return (
    <div className="min-h-[100dvh] text-white" style={{ background: "#0a0a0f" }}>

      <Navbar
        leading={
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="-ml-2 flex min-h-[44px] items-center gap-2 rounded-lg px-2 text-[15px] font-medium transition-colors group text-white/60 hover:text-white active:bg-white/5"
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
      <div className="pt-[calc(64px+env(safe-area-inset-top))] lg:pt-20" style={{ background: "#0d0d16" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            {category && (
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c4b5fd]">
                {category}
              </p>
            )}
            <h1 className="text-[30px] sm:text-[46px] font-black text-white leading-[1.12] sm:leading-tight">
              {name}
            </h1>
            {details?.tagline && (
              <p className="mt-3 max-w-3xl text-[15px] font-medium leading-relaxed text-[#c4b5fd] sm:text-[16px]">
                {details.tagline}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2 text-[12.5px] font-medium">
              {details?.audience && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#915EFF]/15 px-3 py-1 text-[#e9e3ff] ring-1 ring-[#915EFF]/40">
                  <svg aria-hidden width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Built for: {details.audience}
                </span>
              )}
              {[details?.status].flat().filter(Boolean).map((st) => (
                <span key={st} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1 text-gray-300 ring-1 ring-white/10">
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full ${/progress/i.test(st) ? "bg-amber-400" : "bg-[#4ade80]"}`}
                  />
                  {st}
                </span>
              ))}
            </div>
            {details?.headline?.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-4">
                {details.headline.map((m) => (
                  <MetricCard key={m.label} {...m} />
                ))}
              </div>
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
                playsInline
                preload="metadata"
                style={{ maxHeight: "min(520px, 60svh)", objectFit: "cover" }}
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
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-12 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        <div className="flex gap-16">

          {/* Left: content */}
          <div className="flex-1 min-w-0">

            {/* Phones/tablets: vertical contents list (desktop uses the sticky TOC on the right) */}
            <nav
              aria-label="On this page"
              className="lg:hidden mb-10 rounded-2xl p-2"
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                On this page
              </p>
              <ol className="m-0 list-none p-0">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-left text-[15px] text-gray-200 active:bg-white/[0.05]"
                    >
                      <span className="w-5 text-[12px] font-bold text-[#60a5fa]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">{item.label}</span>
                      <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Actions */}
            {(details?.demoLink || (source_code_link && source_code_link !== "#")) && (
            <div
              className="flex flex-wrap items-center justify-between gap-4 mb-10 sm:mb-12 pb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex w-full sm:w-auto gap-3 [&>a]:flex-1 sm:[&>a]:flex-none">
                {source_code_link && source_code_link !== "#" && (
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-center gap-2 px-4 py-2 rounded-lg text-[14px] sm:text-[13px] transition-colors hover:text-white"
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
                    className="flex min-h-[44px] items-center justify-center gap-2 px-4 py-2 rounded-lg text-[14px] sm:text-[13px] text-white font-medium hover:opacity-90 transition-opacity"
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
            )}

            {/* Business Challenge */}
            {details?.challenge?.length > 0 && (
              <section id="challenge" className="mb-14 scroll-mt-24 lg:scroll-mt-28">
                <SectionHeading>Business Challenge</SectionHeading>
                <div className={`grid gap-3 ${details.challenge.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                  {details.challenge.map((c, i) => (
                    <div
                      key={c.title}
                      className="rounded-xl p-4 sm:p-5"
                      style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-[12px] font-bold text-[#60a5fa]">0{i + 1}</p>
                      <h3 className="mt-1 text-[16px] font-semibold leading-snug text-white">{c.title}</h3>
                      <p className="mt-2 text-[14px] leading-[23px] text-gray-400">{c.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Solution */}
            {details?.solution && (
              <section id="solution" className="mb-14 scroll-mt-24 lg:scroll-mt-28">
                <SectionHeading>Solution</SectionHeading>
                <p className="text-[15px] leading-[26px] sm:leading-[28px] text-gray-300">
                  {details.solution.summary}
                </p>
                {details.solution.modules?.length > 0 && (() => {
                  let n = 0;
                  return (
                    <div className="mt-6">
                      <SubHeading>{details.solution.modulesLabel ?? "Key modules"}</SubHeading>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {details.solution.modules.map((m) => (
                          <div
                            key={m.title}
                            className="rounded-xl border border-[#915EFF]/20 bg-[#915EFF]/[0.06] p-4"
                          >
                            <h3 className="text-[15px] font-semibold text-white">{m.title}</h3>
                            <p className="mt-1.5 text-[14px] leading-[22px] text-gray-400">{m.text}</p>
                            {m.items?.length > 0 && (
                              <ul className="m-0 mt-3 list-none space-y-2.5 border-t border-white/[0.06] p-0 pt-3">
                                {m.items.map((it) => {
                                  n += 1;
                                  return (
                                    <li key={it.title} className="flex gap-2.5">
                                      <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#3b82f6]/15 text-[11px] font-bold text-[#60a5fa]">
                                        {n}
                                      </span>
                                      <span className="text-[13.5px] leading-[20px] text-gray-400">
                                        <strong className="font-semibold text-gray-100">{it.title}</strong>
                                        <br />
                                        {it.text}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </section>
            )}

            {/* Business Value */}
            {details?.value?.length > 0 && (
              <section id="value" className="mb-14 scroll-mt-24 lg:scroll-mt-28">
                <SectionHeading>Business Value</SectionHeading>
                <ul className="m-0 list-none space-y-3 p-0">
                  {details.value.map((v) => (
                    <li key={v.title} className="flex gap-2.5 text-[15px] leading-[26px] text-gray-400">
                      <BulletDot />
                      <span>
                        <strong className="font-semibold text-white">{v.title}:</strong> {v.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* My Role */}
            {roleItems.length > 0 && (
              <section id="role" className="mb-14 scroll-mt-24 lg:scroll-mt-28">
                <SectionHeading>My Role</SectionHeading>
                {details.roleTitle && (
                  <p className="-mt-1 mb-5 inline-flex rounded-lg bg-gradient-to-r from-[#915EFF]/20 to-[#e879f9]/10 px-3.5 py-2 text-[14px] font-semibold text-white ring-1 ring-[#915EFF]/35">
                    {details.roleTitle}
                  </p>
                )}
                <ul className="m-0 list-none space-y-3 p-0">
                  {roleItems.map((r) => (
                    <li key={r.label} className="flex gap-2.5 text-[15px] leading-[26px] text-gray-400">
                      <BulletDot />
                      <span>
                        <strong className="font-semibold text-white">{r.label}:</strong> {r.text}
                      </span>
                    </li>
                  ))}
                </ul>
                {linkedGroup && (
                  <button
                    type="button"
                    onClick={openInExperience}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/10 px-4 text-[14px] font-semibold text-[#e9e3ff] transition-colors hover:bg-[#915EFF]/20 active:bg-[#915EFF]/25"
                  >
                    See this role in my Work Experience
                    <span aria-hidden>→</span>
                  </button>
                )}
              </section>
            )}

            {/* Product & Architecture */}
            {details?.architecture && (
              <section id="architecture" className="mb-14 scroll-mt-24 lg:scroll-mt-28">
                <SectionHeading>Product & Architecture</SectionHeading>
                {details.architecture.flow?.length > 0 && (
                  <div className="mb-7">
                    <SubHeading>How it works</SubHeading>
                    <ol className="m-0 flex list-none flex-col gap-1.5 p-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                      {details.architecture.flow.map((step, i) => (
                        <li key={step} className="flex items-center gap-2 sm:contents">
                          {i > 0 && (
                            <span aria-hidden className="hidden text-gray-600 sm:inline">→</span>
                          )}
                          <span className="inline-flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-1.5 text-[13.5px] text-gray-200 ring-1 ring-white/10">
                            <span className="text-[11px] font-bold text-[#60a5fa]">{i + 1}</span>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {details.architecture.features?.length > 0 && (
                  <div className="mb-7">
                    <SubHeading>{details.architecture.featuresLabel ?? "Key features"}</SubHeading>
                    {details.architecture.features.map((f) => (
                      <FeatureCard key={f.title} {...f} />
                    ))}
                  </div>
                )}
                {tools.length > 0 && (
                  <div>
                    <SubHeading>Tools & tech</SubHeading>
                    <ToolChips tools={aiFirst(tools)} className="" />
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
