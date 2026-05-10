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

      <div className="mt-4 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[20px] leading-[30px] flex-1"
        >
          I'm an <span className="font-semibold">AI product manager and strategy consultant</span>, and a graduate of the <span className="font-semibold">INSEAD</span> Master in Management programme. I ship enterprise AI platforms, drive digital transformation, and think commercially — from pricing strategy to deal evaluation.<br /><br />
          I own products end-to-end. From requirements to UAT to stakeholder management, I turn complex business problems into systems that work.<br /><br />
          Beyond my day job, I run <a href="https://www.linkedin.com/company/friendswhoshare/posts/" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:opacity-75 transition-opacity">Friends Who Share</a>, an AI and tech startup community connecting builders, thinkers, and investors in Singapore.<br /><br />
          I'm currently open to opportunities in <span className="font-semibold">product management, strategy consulting, and venture capital</span> or investment adjacent roles.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="shrink-0 mx-auto md:mx-0"
        >
          <Tilt options={{ max: 10, scale: 1.02, speed: 400 }}>
            <div style={{ position: "relative", width: "210px", height: "255px", marginRight: "18px", marginBottom: "18px" }}>

              {/* Back slab — pink/purple, rotate right */}
              <motion.div
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 120 }}
                style={{
                  position: "absolute", inset: 0, borderRadius: "18px",
                  background: "linear-gradient(135deg, #ff6ec7, #915eff)",
                  opacity: 0.55,
                  transform: "rotate(6deg) translateY(6px)",
                  boxShadow: "0 12px 40px rgba(255,110,199,0.25)",
                }}
              />

              {/* Mid slab — purple/blue, rotate left */}
              <motion.div
                initial={{ rotate: -3.5 }}
                whileHover={{ rotate: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                style={{
                  position: "absolute", inset: 0, borderRadius: "18px",
                  background: "linear-gradient(135deg, #915eff, #60a5fa)",
                  opacity: 0.4,
                  transform: "rotate(-3.5deg) translateY(3px)",
                }}
              />

              {/* Main photo card */}
              <div style={{
                position: "relative", borderRadius: "16px", padding: "2px",
                background: "linear-gradient(135deg, #ff6ec7, #915eff, #60a5fa)",
                boxShadow: "0 20px 60px rgba(145,94,255,0.35), 0 8px 24px rgba(255,110,199,0.2)",
              }}>
                <div style={{ borderRadius: "14px", overflow: "hidden", width: "206px", height: "251px" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}ausie-white-bg.svg`}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")