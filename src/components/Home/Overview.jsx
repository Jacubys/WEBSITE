import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion"

import { SectionWrapper } from "../../HighOrderComponents"
import "./Overview.css"

const Overview = () => {
    return (
        <>
           <motion.div variants={textVariant()}>
           </motion.div> 

           <motion.p>
           </motion.p>
        </>
    )
}

export default SectionWrapper(Overview, "overview")