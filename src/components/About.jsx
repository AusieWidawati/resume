import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useState } from "react";

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  const [show, setShow] = useState(false);

  return (
    <Tilt className="xs:w-[250px]">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        <div
          options={{
            max: 45,
            scale: 0.5,
            speed: 450,
          }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[140px] flex justify-evenly items-center flex-col">
          {!show && <img src={icon} alt={title} className= "w-16 h-16 object-contain" />}
          <h3 className={!show ? "text-white text-[20px] font-bp;d text-center" : "text-[0px]"}>{title}</h3>
          {show &&
            <div className="object-contain w-full" >
              <motion.p animate={show ? { opacity: 100 } : { opacity: 0 }}>
                <div className="text-white text-[15px] font-bp;d text-center">
                  {description}
                </div>
              </motion.p>
            </div>
          }
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
      I'm an <span className="font-semibold">AI product manager and strategy consultant</span>, and a graduate of the <span className="font-semibold">INSEAD</span> Master in Management programme. I ship enterprise AI platforms, drive digital transformation, and think commercially — from pricing strategy to deal evaluation.<br></br><br></br>
      I own products end-to-end. From requirements to UAT to stakeholder management, I turn complex business problems into systems that work.<br></br><br></br>
      Beyond my day job, I run  <a href="https://www.linkedin.com/company/friendswhoshare/posts/" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:opacity-75 transition-opacity">Friends Who Share</a>, an AI and tech startup community connecting builders, thinkers, and investors in Singapore.<br></br><br></br>
      I'm currently open to opportunities in <span className="font-semibold">product management, strategy consulting, and venture capital</span> or investment adjacent roles.<br></br><br></br>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")