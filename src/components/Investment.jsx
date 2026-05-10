import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { investmentProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const InvestmentCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="investment_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => source_code_link !== "#" && window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="link" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Investment = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Where analytical rigor meets market intuition.</p>
        <h2 className={`${styles.sectionHeadText}`}>Investment Thinking.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My investment interest sits at the overlap of AI infrastructure, climate tech, and emerging market enterprise software — sectors I've worked in directly. I approach deal analysis the way I approach product: structured, evidence-based, and skeptical of surface-level narratives. The models and memos here reflect that.
          <br /><br />
          These are working files — financial models, sector analyses, and investment memos I've built to sharpen my deal evaluation skills. They cover themes including enterprise AI, climate resilience, and development finance. Nothing polished for the sake of it; everything built to actually think through a thesis.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {investmentProjects.map((project, index) => (
          <InvestmentCard key={`investment-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Investment, "investment");
