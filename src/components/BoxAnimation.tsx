import {  motion } from "framer-motion";



const BoxAnimation = () => {


    return (
        <div >
        <motion.div className="box"
        whileHover={{scale:1.2 , rotate:10}} transition={{type:"spring", stiffness:300}}
        />
           <motion.div className="box"
        whileTap={{scale:0.8 , backgroundColor:"crimson"}} transition={{type:"spring", stiffness:300}}
        />
           <motion.div className="box"
        drag="x" dragConstraints={{top:-50, left:-50, bottom:50 , right:50}}
        />
</div>
    

    )
}

export default BoxAnimation