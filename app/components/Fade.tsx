"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  duration?: number; // Optional duration prop
}

export default function FadeInMotion({ children, duration = 1.5 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
