import {
  SiCss,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiR,
  SiReact,
  SiRedux,
} from 'react-icons/si';
import { TbChartDots3 } from 'react-icons/tb';

import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { SkillsShowcasePortable } from './SkillsShowcasePortable';

/** Maps portfolio `technologies` names to react-icons + Tailwind color classes */
const TECH_ICON_MAP = {
  'HTML 5': { icon: SiHtml5, color: 'text-orange-500' },
  'CSS 3': { icon: SiCss, color: 'text-blue-400' },
  'React JS': { icon: SiReact, color: 'text-cyan-400' },
  'Redux Toolkit': { icon: SiRedux, color: 'text-purple-400' },
  MongoDB: { icon: SiMongodb, color: 'text-green-500' },
  git: { icon: SiGit, color: 'text-orange-500' },
  MySQL: { icon: SiMysql, color: 'text-blue-500' },
  R: { icon: SiR, color: 'text-blue-300' },
  Tableau: { icon: TbChartDots3, color: 'text-sky-400' },
};

const Tech = () => {
  const skillNames = technologies.map((t) => t.name);

  const customSkills = technologies
    .map((t) => {
      const row = TECH_ICON_MAP[t.name];
      if (!row) return null;
      return { name: t.name, icon: row.icon, color: row.color };
    })
    .filter(Boolean);

  return (
    <SkillsShowcasePortable
      skills={skillNames}
      customSkills={customSkills}
      title="Tech Stack."
      subtitle="What I have worked with — languages, frameworks, and tools from recent projects."
      showHeader
      className="!py-10 sm:!py-14"
    />
  );
};

export default SectionWrapper(Tech, 'tech-stack');
