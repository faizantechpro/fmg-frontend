import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5 },
  },

  hidden: { opacity: 0, scale: 1 },
};

const ViewPortAnimation = ({ children }) => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      control.x = 100;
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      // initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default ViewPortAnimation;
