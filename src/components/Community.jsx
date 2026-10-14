import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Community = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Community.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.08, 1)} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 max-w-3xl">
        <p className="text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] text-white/70">
          I co-founded{" "}
          <span className="text-white/90 font-medium">Friends Who Share</span>, a tech-sharing community where people swap ideas,
          tools, and experiments — built around curiosity rather than credentials.
        </p>
        <p className="text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] text-white/70">
          I volunteer at tech events, help out behind the scenes where it counts, and regularly join startup, AI, and VC gatherings to
          stay close to builders and capital allocators alike.
        </p>
        <p className="text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] text-white/70">
          Off-screen, I perform{" "}
          <span className="text-white/90 font-medium">Balinese dance</span> as part of an ensemble — culture and discipline from a
          different stage.
        </p>
        <p className="text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] text-white/70">
          I also serve as an active alumni representative for{" "}
          <span className="text-white/90 font-medium">INSEAD MIM</span> and{" "}
          <span className="text-white/90 font-medium">NTU CN Yang Scholars Programme</span>, staying engaged with peers and incoming
          cohorts.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Community, "community");
