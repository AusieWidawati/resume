import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { inseadLogo, ntu } from "../assets";

const EducationPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Studies</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      {/* INSEAD */}
      <motion.div className="mt-10 flex items-center gap-4" variants={fadeIn("left", "spring", 0.4, 0.75)}>
        <img src={inseadLogo} alt="INSEAD" className="h-10 object-contain" />
        <p className="text-3xl font-semibold text-white">INSEAD</p>
      </motion.div>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p className="grow">Master in Management (Class of 2024)</p>
        <p className="not-italic">2023 - 2024</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <li>
          <span className="font-semibold">Relevant Coursework:</span> Strategy, Marketing, Managerial and Financial Accounting, Economics, Fintech, Agile Project Management, Machine Learning and Optimisation, Data Science & AI, Private Equity & Venture Capital, Finance & Valuation.
        </li>
        <li>
          <span className="font-semibold">BBB Deals & Valuing Innovation Bootcamp:</span> Applied capital budgeting, DCF, EVA, multiples approach, and LBO modelling; created a pitch deck for a buy-side mandate of a US$6M EV battery recycling company.
        </li>
        <li>
          <span className="font-semibold">Scholarships & Awards:</span> Awarded the INSEAD Scholarship (€18,000); Member of INSEAD Consulting Club and organiser of case interview preparation sessions.
        </li>
        <li>
          <span className="font-semibold">Leadership:</span> Chosen as INSEAD International Women's Day Ambassador; featured in a Study International article.
        </li>
      </motion.ul>

      {/* NTU */}
      <motion.div className="mt-10 flex items-center gap-4" variants={fadeIn("left", "spring", 0.8, 0.75)}>
        <img src={ntu} alt="NTU" className="h-10 object-contain" />
        <p className="text-3xl font-semibold text-white">Nanyang Technological University (NTU)</p>
      </motion.div>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <p className="grow">Bachelor of Science in Mathematical Sciences (Honours with Distinction)</p>
        <p className="not-italic">2019 - 2023</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <li>
          <span className="font-semibold">GPA:</span> 4.00/5.00; Pursued a Minor in Entrepreneurship.
        </li>
        <li>
          <span className="font-semibold">Scholarships:</span> Awarded the CN Yang Scholars Programme (CNYSP), granted to 43 outstanding freshmen per cohort of 5,700+, and the ASEAN Undergraduate Merit Scholarship (SG$72,200).
        </li>
        <li>
          <span className="font-semibold">Case Competition:</span> Top 4 among 520 teams at the Schneider Electric Go Green Innovation Challenge 2022 — formulated a GTM strategy, business model, and financial forecast including IRR and NPV analysis for a residential solar adoption platform in Singapore.
        </li>
      </motion.ul>
    </>
  )
}

const Education = SectionWrapper(EducationPage, "education");

export default Education;