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
            Hi, I'm <span className='text-[#915EFF]'>Ausie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-70`}>
             An aspiring developer and a tech enthusiast <br className='sm:block hidden' />
             who is so glad to see you here, have a look around my <b><i>3D</i></b> portfolio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;