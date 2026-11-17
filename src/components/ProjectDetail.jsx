import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, experiences } from "../constants";
import { github } from "../assets";
import Navbar from "./Navbar";
import ToolChips, { aiFirst } from "./ToolChips";
import {
  BulletDot,
  SubHeading,
  SectionHeading,
  MetricCard,
  TableOfContents,
  MobileToc,
  useActiveSection,
} from "./DetailPage";

const SECTIONS = [
  { id: "challenge", label: "Business Challenge" },
  { id: "solution", label: "Solution" },
  { id: "value", label: "Business Value" },
  { id: "role", label: "My Role" },
  { id: "architecture", label: "Product & Architecture" },
];

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

  useActiveSection(SECTIONS.map((sec) => sec.id), setActiveSection, [project]);

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

  const { name, category, tools = [], image, video, videoHd, source_code_link, details } = project;

  // My Role can mirror a group from the Work Experience entry (single source of truth)
  const linkedGroup = details?.experienceGroup
    ? experiences
        .find((e) => e.company_name === details.experienceGroup.company)
        ?.groups?.find((g) => g.title === details.experienceGroup.group)
    : null;
  // Project-specific bullets win; otherwise mirror the linked Work Experience group
  const roleItems = details?.role ?? linkedGroup?.items ?? [];

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
              // Full frame (no cropping), sharper file when one exists
              <video
                src={videoHd ?? video}
                controls
                className="block w-full bg-black"
                playsInline
                preload="metadata"
                style={{ maxHeight: "80svh", objectFit: "contain" }}
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
            <MobileToc items={tocItems} />

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
