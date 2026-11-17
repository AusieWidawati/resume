import { TOOL_ICONS } from "../constants/tools";

/** AI tools first, otherwise keep the given order */
export const aiFirst = (tools = []) => {
  const unique = [...new Set(tools)];
  const isAi = (tool) => Boolean(TOOL_ICONS[tool]?.ai);
  return [...unique.filter(isAi), ...unique.filter((t) => !isAi(t))];
};

/** Logo chips shared by Work Experience and Projects */
const ToolChips = ({ tools, className = "mt-2", size = "md", children }) => (
  <span className={`flex flex-wrap gap-1.5 ${className}`}>
    {tools.map((tool) => {
      const { icon: Icon, color } = TOOL_ICONS[tool] ?? {};
      return (
        <span
          key={tool}
          className={`inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] font-medium text-[#dfd9ff] ${
            size === "sm" ? "px-1.5 py-0.5 text-[11px]" : "px-2 py-0.5 text-[12px]"
          }`}
        >
          {Icon && <Icon aria-hidden className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} style={{ color }} />}
          {tool}
        </span>
      );
    })}
    {children}
  </span>
);

export default ToolChips;
