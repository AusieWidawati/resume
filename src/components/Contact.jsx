import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, linkedin } from "../assets";

const ContactPage = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mb-5">
          Feel free to contact me via any of the means below!
        </p>
        <a className="cursor-pointer p-2 hover:bg-secondary hover:bg-opacity-50 rounded-lg flex items-center w-fit" href="https://www.linkedin.com/in/Ausie-a-sharma-2b8a49248/">
          <img src={linkedin} alt="" className=" w-5 h-5 object-contain mr-2"/>
          Ausie Sharma
        </a>
        <a className="cursor-pointer p-2 hover:bg-secondary hover:bg-opacity-50 rounded-lg flex items-center w-fit" href="mailto:Ausieasharma13@gmail.com">
          <img src={gmail} alt="" className=" w-5 h-5 object-contain mr-2"/>
          Ausieasharma13@gmail.com
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[600px] h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const Contact = SectionWrapper(ContactPage, "contact");

export default Contact;