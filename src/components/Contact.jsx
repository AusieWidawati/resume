import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, linkedin } from "../assets";
import { useIsTouch } from "../utils/device";

const ContactPage = () => {
  const isTouch = useIsTouch();

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-6 sm:gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-5 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] mb-5">
          Whether it's a product build, a partnership, or a role where you need someone who ships end-to-end and thinks in impact — I'm
          excited to hear what you're working on and how I can add value. Reach out and we'll make the next step concrete.
        </p>
        <a
          className="cursor-pointer -mx-2 px-2 min-h-[48px] hover:bg-secondary hover:bg-opacity-50 active:bg-white/10 rounded-lg flex items-center w-fit max-w-full text-[15px] sm:text-[16px]"
          href="https://www.linkedin.com/in/ausie-widawati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="" className="w-5 h-5 object-contain mr-2" />
          Ausie Widawati
        </a>
        <a
          className="cursor-pointer -mx-2 px-2 min-h-[48px] hover:bg-secondary hover:bg-opacity-50 active:bg-white/10 rounded-lg flex items-center w-fit max-w-full text-[15px] sm:text-[16px]"
          href="mailto:ausie.widawati@gmail.com"
        >
          <img src={gmail} alt="" className="w-5 h-5 object-contain mr-2" />
          ausie.widawati@gmail.com
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[600px] h-[300px]"
      >
        {/* On phones the canvas must not swallow vertical swipes; it still auto-rotates */}
        <div className={`h-full w-full ${isTouch ? "pointer-events-none" : ""}`}>
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  )
}

const Contact = SectionWrapper(ContactPage, "contact");

export default Contact;