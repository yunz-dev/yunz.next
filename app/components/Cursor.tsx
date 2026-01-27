import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 650, damping: 50 });
  const springY = useSpring(y, { stiffness: 650, damping: 50 });

  const scale = useMotionValue(1);
  const background = useTransform(scale, [1, 2], ["#fff", "#fff"]);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error older Safari
        navigator.msMaxTouchPoints > 0);

    const isSmallScreen =
      typeof window !== "undefined" &&
      window.matchMedia?.("(max-width: 768px)").matches;

    if (isTouch || isSmallScreen) {
      document.body.style.cursor = "auto";
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const handleMouseEnter = () => scale.set(2);
    const handleMouseLeave = () => scale.set(1);

    window.addEventListener("mousemove", handleMouseMove);

    const targets = Array.from(document.querySelectorAll("a, button"));
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.style.cursor = "auto";
    };
  }, [x, y, scale]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        scale,
        background,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;
