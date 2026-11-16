/**
 * Shared tool logos: chips in Work Experience and the categorised Tools section.
 * Add a tool here once and it can be used in both places.
 */
import {
  SiClaude,
  SiConfluence,
  SiDatabricks,
  SiDatadog,
  SiFigma,
  SiGitlab,
  SiGooglegemini,
  SiJira,
  SiLangchain,
  SiLanggraph,
  SiOpenai,
  SiOpensearch,
  SiPostgresql,
  SiPython,
  SiPostman,
  SiQgis,
  SiR,
  SiArcgis,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { TbRipple, TbSql } from "react-icons/tb";
import { RiCopilotFill } from "react-icons/ri";

/** Four-colour Microsoft mark (icon libraries only ship it single-colour) */
export const MicrosoftLogo = ({ className = "" }) => (
  <svg viewBox="0 0 23 23" className={className} aria-hidden>
    <path fill="#F25022" d="M1 1h10v10H1z" />
    <path fill="#7FBA00" d="M12 1h10v10H12z" />
    <path fill="#00A4EF" d="M1 12h10v10H1z" />
    <path fill="#FFB900" d="M12 12h10v10H12z" />
  </svg>
);

/** Four-colour Google "G" (icon libraries only ship it single-colour) */
export const GoogleLogo = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

/**
 * Logos + brand colours for the tool chips shown under expanded bullets.
 * `ai: true` tools are listed first in the card's tool row.
 */
export const TOOL_ICONS = {
  Jira: { icon: SiJira, color: "#2684FF" },
  "Azure DevOps": { icon: VscAzureDevops, color: "#0078D7" },
  Databricks: { icon: SiDatabricks, color: "#FF3621" },
  QGIS: { icon: SiQgis, color: "#93B023" },
  // No dedicated Foundry mark in react-icons; Foundry lives under Azure AI
  "Microsoft Foundry": { icon: VscAzure, color: "#0089D6", ai: true },
  "Claude Code": { icon: SiClaude, color: "#D97757", ai: true },
  Codex: { icon: SiOpenai, color: "#FFFFFF", ai: true },
  "Copilot Studio": { icon: RiCopilotFill, color: "#3FA8F4", ai: true },
  "Google AI Studio": { icon: SiGooglegemini, color: "#8E75F2", ai: true },
  // Brand purple (#632CA6) is too dark on the sheet; lightened for contrast
  Datadog: { icon: SiDatadog, color: "#A47BE6" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  // LangChain brand teal (#1C3C3C) disappears on the dark sheet; lightened
  LangChain: { icon: SiLangchain, color: "#4FB3A9", ai: true },
  LangGraph: { icon: SiLanggraph, color: "#4FB3A9", ai: true },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  // SQL is a language, not a brand — generic SQL glyph
  SQL: { icon: TbSql, color: "#60A5FA" },
  "Microsoft 365": { icon: MicrosoftLogo },
  "Google Workspace": { icon: GoogleLogo },
  Confluence: { icon: SiConfluence, color: "#2684FF" },
  "AWS OpenSearch": { icon: SiOpensearch, color: "#3B9BE8" },
  PostgreSQL: { icon: SiPostgresql, color: "#6B8FE8" },
  R: { icon: SiR, color: "#5B9BD5" },
  Python: { icon: SiPython, color: "#5A9FD4" },
  ArcGIS: { icon: SiArcgis, color: "#2C7AC3" },
  // Delft3D (Deltares) has no logo in icon libraries — generic water ripple
  Delft3D: { icon: TbRipple, color: "#38BDF8" },
  ChatGPT: { icon: SiOpenai, color: "#FFFFFF", ai: true },
  // Languages this portfolio is written in
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#4E9BEA" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#9B6BE0" },
};

/** Grouping for the Tools section — every tool used in Work Experience, plus this site's languages */
export const TOOL_CATEGORIES = [
  {
    title: "AI & Agent Platforms",
    tools: ["LangChain", "LangGraph", "Microsoft Foundry", "Copilot Studio", "Google AI Studio"],
  },
  {
    title: "AI Coding & Prototyping",
    tools: ["Claude Code", "Codex", "Figma"],
  },
  {
    title: "Data & Search",
    tools: ["AWS OpenSearch", "PostgreSQL", "Databricks", "SQL"],
  },
  {
    title: "Product & Delivery",
    tools: ["Jira", "Azure DevOps", "Confluence", "GitLab"],
  },
  {
    title: "Languages",
    tools: ["Python", "R", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "APIs & Observability",
    tools: ["Postman", "Datadog"],
  },
  {
    title: "Productivity",
    tools: ["Microsoft 365", "Google Workspace"],
  },
  {
    title: "Geospatial & Modelling",
    tools: ["QGIS", "ArcGIS", "Delft3D"],
  },
];
