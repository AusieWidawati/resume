import { useState } from "react";

import { BallCanvas } from "./canvas"
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant } from "../utils/motion";


import { styles } from "../styles";

const Tech = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have worked with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className="flex flex-col w-full justify-center text-center" >
              <motion.p animate={show ? { opacity: 100 } : { opacity: 0 }}>
                {technology.name}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")