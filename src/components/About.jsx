import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt className="xs:w-[280px] w-full" options={{ max: 20, scale: 1.02, speed: 400 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="relative p-[1px] rounded-2xl card-glow cursor-default"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #915EFF, #e879f9, #38bdf8)"
            : "linear-gradient(135deg, #915EFF44, #e879f922)",
          transition: "background 0.4s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="bg-[#0f0a1e] rounded-2xl px-8 py-7 min-h-[180px] flex flex-col justify-between gap-4 overflow-hidden relative">
          {/* Subtle inner glow when hovered */}
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-400"
            style={{
              background: "radial-gradient(ellipse at top left, #915EFF18 0%, transparent 70%)",
              opacity: hovered ? 1 : 0,
            }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <div className="p-2.5 rounded-xl bg-[#915EFF15] border border-[#915EFF30]">
              <img src={icon} alt={title} className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-white text-[18px] font-semibold leading-tight">{title}</h3>
          </div>

          <motion.p
            className="text-white/55 text-[13px] leading-relaxed relative z-10"
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-3xl space-y-4 text-white/70 text-[17px] leading-[30px]"
      >
        <p>
          I'm an{" "}
          <span className="text-white font-semibold">AI product manager and strategy consultant</span>,
          and a graduate of the{" "}
          <span className="text-white font-semibold">INSEAD</span> Master in Management programme.
          I ship enterprise AI platforms, drive digital transformation, and think commercially —
          from pricing strategy to deal evaluation.
        </p>
        <p>
          I own products end-to-end. From requirements to UAT to stakeholder management, I turn
          complex business problems into systems that work.
        </p>
        <p>
          Beyond my day job, I run{" "}
          <a
            href="https://www.linkedin.com/company/friendswhoshare/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c084fc] font-semibold underline underline-offset-2 hover:text-[#e879f9] transition-colors"
          >
            Friends Who Share
          </a>
          , an AI and tech startup community connecting builders, thinkers, and investors in Singapore.
        </p>
        <p>
          I'm currently open to opportunities in{" "}
          <span className="text-white font-semibold">
            product management, strategy consulting, and venture capital
          </span>{" "}
          or investment-adjacent roles.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
