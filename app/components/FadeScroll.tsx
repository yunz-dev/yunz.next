"use client";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect, useRef } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  duration?: number;
}

export default function FadeInOnScroll({ children, duration = 1 }: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the element is in view
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      { threshold: 0.1 } // 10% of the element needs to be visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
