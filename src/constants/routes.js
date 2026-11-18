/**
 * Permanent page addresses. Plain JS (no asset imports) so vite.config.js can
 * read it too: the build writes a real index.html for every path below, which
 * lets GitHub Pages serve deep links with a normal 200 instead of a 404.
 *
 * Changing a slug changes a public URL. Keep the old one in LEGACY_REDIRECTS
 * so links already on your resume keep working.
 */

export const PROJECT_SLUGS = {
  creditRisk: "credit-risk-ai",
  knowledge: "genai-rag-knowledge-platform",
  geospatial: "geospatial-ai-disaster-risk",
};

export const projectPath = (slug) => `/project/${slug}`;

export const INVESTMENT_PATHS = {
  valuation: "/investment/tesla-gem-valuation",
  vcWeekly: "/investment/sea-vc-weekly",
};

// Old address -> new address
export const LEGACY_REDIRECTS = {
  "/investment/bootcamp": INVESTMENT_PATHS.valuation,
  "/vc-digest": INVESTMENT_PATHS.vcWeekly,
  "/project/0": projectPath(PROJECT_SLUGS.creditRisk),
  "/project/1": projectPath(PROJECT_SLUGS.knowledge),
  "/project/2": projectPath(PROJECT_SLUGS.geospatial),
};

// Every address that gets its own HTML file at build time, with a tab title
export const STATIC_PAGES = [
  { path: projectPath(PROJECT_SLUGS.creditRisk), title: "Credit Risk Assessment AI | Ausie" },
  { path: projectPath(PROJECT_SLUGS.knowledge), title: "GenAI RAG Knowledge Platform | Ausie" },
  { path: projectPath(PROJECT_SLUGS.geospatial), title: "Geospatial AI Disaster Risk Platform | Ausie" },
  { path: INVESTMENT_PATHS.valuation, title: "Deals & Valuation: Tesla x GEM | Ausie" },
  { path: INVESTMENT_PATHS.vcWeekly, title: "Southeast Asia VC Weekly | Ausie" },
  ...Object.keys(LEGACY_REDIRECTS).map((path) => ({ path, title: "Ausie | Portfolio" })),
];
