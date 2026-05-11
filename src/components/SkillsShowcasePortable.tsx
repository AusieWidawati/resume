/**
 * SkillsShowcasePortable — single-file, drop-in skills grid with icons + motion.
 *
 * Dependencies (install in the target project):
 *   npm install framer-motion react-icons
 *
 * Tailwind: uses only standard utility classes (no custom theme tokens / fonts).
 * If the target project doesn't use Tailwind, the section still works but the
 * layout falls back to browser defaults — swap classes for inline styles or
 * your own CSS as needed.
 *
 * Usage:
 *   <SkillsShowcasePortable />
 *
 *   // Or override anything:
 *   <SkillsShowcasePortable
 *     title="My Stack"
 *     subtitle="Tools I reach for daily"
 *     skills={["React", "TypeScript", "Python"]}
 *     showHeader
 *   />
 *
 *   // Or pass your own skill list with custom icons:
 *   <SkillsShowcasePortable
 *     customSkills={[
 *       { name: "My Tool", icon: SomeIcon, color: "text-pink-500" },
 *     ]}
 *   />
 */

import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import { VscAzure } from "react-icons/vsc"
import { GiArtificialIntelligence } from "react-icons/gi"
import { MdOutlineSdStorage } from "react-icons/md"
import { TbAuth2Fa, TbBrandAws } from "react-icons/tb"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiLangchain,
  SiShadcnui,
  SiRadixui,
  SiSpring,
  SiAndroid,
  SiArcgis,
  SiOpenai,
  SiSimplelogin,
} from "react-icons/si"

export interface Skill {
  name: string
  icon: IconType
  color?: string // any Tailwind text-color class, e.g. "text-blue-500"
}

const DEFAULT_TECH: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  React: { icon: SiReact, color: "text-blue-500" },
  TypeScript: { icon: SiTypescript, color: "text-blue-600" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-500" },
  "Material UI": { icon: SiMui, color: "text-blue-500" },
  "shadcn/ui": { icon: SiShadcnui, color: "text-slate-400" },
  "Radix UI": { icon: SiRadixui, color: "text-pink-500" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-600" },
  Python: { icon: SiPython, color: "text-yellow-500" },
  Java: { icon: SiSpring, color: "text-orange-500" },
  "Spring Framework": { icon: SiSpring, color: "text-green-600" },
  Android: { icon: SiAndroid, color: "text-green-500" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-700" },
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  Redis: { icon: SiRedis, color: "text-red-500" },
  GraphQL: { icon: SiGraphql, color: "text-pink-500" },
  Docker: { icon: SiDocker, color: "text-blue-500" },
  Kubernetes: { icon: SiKubernetes, color: "text-blue-600" },
  AWS: { icon: TbBrandAws, color: "text-orange-500" },
  "Azure AI Services": { icon: VscAzure, color: "text-blue-700" },
  "Azure OpenAI": { icon: SiOpenai, color: "text-blue-700" },
  LangChain: { icon: SiLangchain, color: "text-green-400" },
  "ArcGIS API": { icon: SiArcgis, color: "text-blue-600" },
  ArcGIS: { icon: SiArcgis, color: "text-blue-600" },
  MSAL: { icon: TbAuth2Fa, color: "text-blue-600" },
  SSO: { icon: SiSimplelogin, color: "text-blue-600" },
  RAG: { icon: MdOutlineSdStorage, color: "text-emerald-500" },
  "Agentic AI": { icon: GiArtificialIntelligence, color: "text-amber-500" },
  "Vector Search": { icon: MdOutlineSdStorage, color: "text-emerald-500" },
  Git: { icon: SiGit, color: "text-orange-600" },
  Figma: { icon: SiFigma, color: "text-purple-500" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  HTML: { icon: SiHtml5, color: "text-orange-500" },
  CSS: { icon: SiCss, color: "text-blue-500" },
}

const DEFAULT_SKILLS: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Material UI",
  "shadcn/ui",
  "Radix UI",
  "Node.js",
  "Python",
  "Java",
  "Spring Framework",
  "Android",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure AI Services",
  "Azure OpenAI",
  "LangChain",
  "ArcGIS API",
  "MSAL",
  "SSO",
  "RAG",
  "Agentic AI",
  "Vector Search",
  "Git",
  "Figma",
  "JavaScript",
  "HTML",
  "CSS",
]

export interface SkillsShowcasePortableProps {
  /** Section heading. */
  title?: string
  /** Section subheading. */
  subtitle?: string
  /** Show the title/subtitle block. */
  showHeader?: boolean
  /**
   * Skill names to render. Each name must exist in the built-in icon map
   * OR be supplied via `customSkills`. Unknown names are skipped silently.
   */
  skills?: string[]
  /** Add or override skills with your own icons / colors. */
  customSkills?: Skill[]
  /** Optional `id` on the root (omit when nested inside another named region). */
  sectionId?: string
  /** Optional className appended to the root element. */
  className?: string
}

export function SkillsShowcasePortable({
  title = "My Skills",
  subtitle = "The tech arsenal powering enterprise AI solutions and scalable applications",
  showHeader = true,
  skills = DEFAULT_SKILLS,
  customSkills = [],
  sectionId,
  className = "",
}: SkillsShowcasePortableProps) {
  const overrides = new Map(customSkills.map((s) => [s.name, s]))

  const resolved: Skill[] = skills
    .map((name): Skill | null => {
      const override = overrides.get(name)
      if (override) return override
      const def = DEFAULT_TECH[name]
      if (def) return { name, icon: def.icon, color: def.color }
      return null
    })
    .filter((s): s is Skill => s !== null)

  return (
    <div
      role="region"
      aria-label={title}
      {...(sectionId ? { id: sectionId } : {})}
      className={`relative overflow-visible ${showHeader ? "py-24" : "py-8"} ${className}`}
    >
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-500/10 blur-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 blur-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-secondary sm:text-xl">
              {subtitle}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-6 xl:grid-cols-8">
          {resolved.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group flex cursor-pointer flex-col items-center"
              >
                <motion.div
                  className={`mb-2 text-3xl sm:mb-3 sm:text-4xl ${skill.color ?? "text-white"}`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.div>

                <motion.span
                  className="text-center text-xs font-medium text-secondary sm:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillsShowcasePortable
