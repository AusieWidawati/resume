import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { TOOL_CATEGORIES, TOOL_ICONS } from "../constants/tools";

const ToolChip = ({ name }) => {
  const { icon: Icon, color } = TOOL_ICONS[name] ?? {};
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[13px] font-medium text-[#dfd9ff]">
      {Icon && <Icon aria-hidden className="h-4 w-4 shrink-0" style={{ color }} />}
      {name}
    </span>
  );
};

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Tools & Tech.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 max-w-3xl text-[15px] leading-[26px] text-secondary sm:text-[17px] sm:leading-[30px]"
    >
      The platforms, data tools and languages behind my work, grouped by how I use them.
    </motion.p>

    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
      {TOOL_CATEGORIES.map((category, index) => (
        <motion.section
          key={category.title}
          variants={fadeIn("up", "spring", 0.05 * index, 0.6)}
          className="rounded-2xl border border-white/[0.08] bg-tertiary/60 p-4 sm:p-5"
        >
          <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c4b5fd]">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <ToolChip key={tool} name={tool} />
            ))}
          </div>
          {category.note && (
            <p className="mt-3 text-[11.5px] leading-[18px] text-white/45">{category.note}</p>
          )}
        </motion.section>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "tech-stack");
