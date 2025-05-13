import {  motion } from "framer-motion";
import { variants } from "./variants";
import { useState } from "react";



const BoxVariants = () => {

  const [isVisible, setIsVisible] = useState(true);
    return (
       <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "Visible" : "hidden"}
        exit="exit"
        transition={{ duration: 1 }}
        onClick={() => setIsVisible(!isVisible)}
      ></motion.div> 

    )
}

export default BoxVariants