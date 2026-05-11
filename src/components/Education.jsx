import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { inseadLogo, ntu } from "../assets";

/** Inline citation link — opens in new tab, subtle icon for “this is external”. */
const EduLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/edulink inline-flex items-center gap-0.5 font-medium text-[#e8dfff] underline decoration-[#915EFF]/55 underline-offset-[3px] transition-colors hover:text-white hover:decoration-[#e879f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915EFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
  >
    <span>{children}</span>
    <FiExternalLink
      aria-hidden
      className="inline-block h-3 w-3 shrink-0 opacity-60 transition-opacity group-hover/edulink:opacity-100"
    />
  </a>
);

const EDUCATION = [
  {
    logo: inseadLogo,
    school: "INSEAD",
    degree: "Master in Management",
    meta: "Class of 2024",
    date: "2023 – 2024",
    accent: "from-[#915EFF] via-[#e879f9] to-[#00cea8]",
    coursework: [
      "Strategy",
      "Marketing",
      "Managerial Accounting",
      "Financial Accounting",
      "Economics",
      "Fintech",
      "Agile Project Management",
      "Machine Learning & Optimisation",
      "Data Science & AI",
      "Private Equity & VC",
      "Finance & Valuation",
    ],
    highlights: [
      {
        title: "BBB Deals & Valuing Innovation Bootcamp",
        desc: (
          <>
            Applied capital budgeting, DCF, EVA, multiples, and LBO modelling —
            built a buy-side pitch deck for a{" "}
            <strong className="font-semibold text-white">US$6M</strong> EV
            battery-recycling target.
          </>
        ),
      },
      {
        title: "INSEAD MIM Scholarship",
        desc: (
          <>
            Recipient of the INSEAD scholarship worth{" "}
            <strong className="font-semibold text-white">€18,000</strong>.
          </>
        ),
      },
      {
        title: "Women's Day Ambassador",
        desc: (
          <>
            Selected as an{" "}
            <EduLink href="https://intheknow.insead.edu/article/focusing-opportunities">
              INSEAD International Women&apos;s Day Ambassador
            </EduLink>
            ; featured in a{" "}
            <EduLink href="https://studyinternational.com/news/insead-mim-indonesia/">
              Study International
            </EduLink>{" "}
            profile on pivoting from STEM to business at INSEAD.
          </>
        ),
      },
      {
        title: "INSEAD Consulting Club",
        desc: (
          <>
            Member and organiser of case-interview preparation sessions for
            classmates pursuing consulting.
          </>
        ),
      },
    ],
  },
  {
    logo: ntu,
    school: "Nanyang Technological University",
    degree: "B.Sc. in Mathematical Sciences (Honours with Distinction)",
    meta: "Minor in Entrepreneurship · GPA 4.00 / 5.00",
    date: "2019 – 2023",
    accent: "from-[#00cea8] via-[#915EFF] to-[#e879f9]",
    highlights: [
      {
        title: "CN Yang Scholars Programme",
        desc: (
          <>
            Granted to{" "}
            <strong className="font-semibold text-white">43</strong> outstanding
            freshmen per cohort of{" "}
            <strong className="font-semibold text-white">5,700+</strong> — NTU's
            flagship research and leadership track.
          </>
        ),
      },
      {
        title: "ASEAN Undergraduate Merit Scholarship",
        desc: (
          <>
            Full-tuition merit scholarship worth{" "}
            <strong className="font-semibold text-white">SG$72,200</strong>{" "}
            awarded across four years of study.
          </>
        ),
      },
      {
        title: "Schneider Electric Go Green Innovation Challenge 2022",
        desc: (
          <>
            <strong className="font-semibold text-white">Top 4</strong> of{" "}
            <strong className="font-semibold text-white">520</strong> teams —
            built a GTM strategy, business model, and financial forecast (IRR +
            NPV) for a residential solar adoption platform in Singapore.
          </>
        ),
      },
    ],
  },
];

const Eyebrow = ({ children }) => (
  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c4b5fd]/85">
    {children}
  </p>
);

const EducationEntry = ({ entry, index, isLast }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeIn("up", "spring", 0.15 + 0.1 * index, 0.7)}
      className={`relative ${isLast ? "" : "pb-12 sm:pb-14"}`}
    >
      {/* HEADER */}
      <div className="flex flex-wrap items-start gap-4 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] p-1.5 ring-1 ring-white/10 sm:h-14 sm:w-14">
          <img
            src={entry.logo}
            alt={entry.school}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[24px] md:text-[26px]">
            {entry.school}
          </h3>
          <p
            className={`mt-1 inline-block bg-gradient-to-r ${entry.accent} bg-clip-text text-[14px] font-semibold text-transparent sm:text-[15px]`}
          >
            {entry.degree}
          </p>
          {entry.meta && (
            <p className="mt-0.5 text-[12.5px] text-[#dfd9ff]/70 sm:text-[13.5px]">
              {entry.meta}
            </p>
          )}
        </div>

        <p className="shrink-0 self-start pt-1 text-right text-[12.5px] font-medium italic text-[#dfd9ff]/65 sm:text-[14px]">
          {entry.date}
        </p>
      </div>

      {/* Thin gradient hairline under the header */}
      <span
        aria-hidden
        className={`mt-5 block h-px w-24 bg-gradient-to-r ${entry.accent} opacity-70`}
      />

      {/* COURSEWORK */}
      {entry.coursework && entry.coursework.length > 0 && (
        <div className="mt-6">
          <Eyebrow>Coursework</Eyebrow>
          <motion.div
            className="mt-3 flex flex-wrap gap-x-2 gap-y-2"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.03 } },
            }}
          >
            {entry.coursework.map((course) => (
              <motion.span
                key={course}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 22 },
                  },
                }}
                className="inline-block rounded-md border border-white/10 px-2.5 py-[3px] text-[12.5px] font-medium text-[#dfd9ff]/90 transition-colors hover:border-[#915EFF]/60 hover:text-white"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </div>
      )}

      {/* HIGHLIGHTS */}
      {entry.highlights && entry.highlights.length > 0 && (
        <div className="mt-7">
          <Eyebrow>Highlights &amp; Recognition</Eyebrow>
          <ul className="m-0 mt-4 list-none space-y-4 p-0">
            {entry.highlights.map((item) => (
              <li
                key={item.title}
                className="group border-l border-white/10 pl-4 transition-colors hover:border-[#915EFF]/60"
              >
                <p className="text-[14px] font-semibold leading-snug text-white sm:text-[14.5px]">
                  {item.title}
                </p>
                <p className="mt-1 text-[13px] leading-[20px] text-[#dfd9ff]/75 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Soft separator between schools — not a card border, just a hairline */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}
    </motion.article>
  );
};

const EducationPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Studies</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 sm:mt-12">
        {EDUCATION.map((entry, index) => (
          <EducationEntry
            key={entry.school}
            entry={entry}
            index={index}
            isLast={index === EDUCATION.length - 1}
          />
        ))}
      </div>
    </>
  );
};

const Education = SectionWrapper(EducationPage, "education");

export default Education;
