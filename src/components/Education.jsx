import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Studies</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 0.4, 0.75)}>National University of Singapore</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p className="grow">Bachelor of Computing in Information System (Hons)</p>
        <p className=" not-italic">Aug 2021 - May 2025</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <li>
          <span className="font-semibold">Relevant Course Work:</span> Enterprise Interface Development, Enterprise Architecture & Server-side development, Object-Oriented Programming and Data Structures and Algorithms.
        </li>
      </motion.ul>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 0.8, 0.75)}>International Baccalaureate (IB)</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <p className="grow">Final grade: 43 out of 45</p>
        <p className=" not-italic">Aug 2019 - May 2021</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <li>
        <span className="font-semibold">Subjects:</span> HL Business, HL Economics, HL English, SL Chemistry, SL Spanish, SL Math AA
        </li>
      </motion.ul>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 1.2, 0.75)}>International General Certificate of Secondary Education (IGCSE)</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 1.3, 0.75)}>
        <p className="grow">A* in Maths and A's in remaining subjects</p>
        <p className=" not-italic">Aug 2017 - May 2019</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 1.3, 0.75)}>
        <li>
        <span className="font-semibold">Subjects:</span> Mathematics, English, Double Sciences, Business
        </li>
      </motion.ul>
    </>
  )
}

const Education = SectionWrapper(EducationPage, "education");

export default Education;