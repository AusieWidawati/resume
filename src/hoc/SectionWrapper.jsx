import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
function HOC() {
    const ref = useRef(null);
    // Drive the reveal from state rather than the whileInView gesture: children that
    // re-mount after the section has revealed (hot reload, route changes) still receive
    // "show" instead of getting stuck at opacity 0.
    const inView = useInView(ref, { once: true, amount: 0, margin: "0px 0px -10% 0px" });

    return (
        <motion.section
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper;
