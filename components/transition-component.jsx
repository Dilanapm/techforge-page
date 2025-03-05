"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transitions";

export function MotionTransition({ children, className, position }) {
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    );
}
