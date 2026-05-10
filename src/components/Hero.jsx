import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto pt-[120px] pb-10`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#F540AD]'>Ausie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-70`}>
             An AI product builder, consultant, and venture enthusiast.  <br className='sm:block hidden' />
             I deliver products end-to-end, evaluate what's worth building, and stay close to the startup and tech community. <br className='sm:block hidden' />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;