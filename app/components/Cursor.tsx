import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 500, damping: 50 });
  const springY = useSpring(y, { stiffness: 500, damping: 50 });

  const scale = useMotionValue(1);
  const background = useTransform(scale, [1, 2], ["#fff", "#fff"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor size (24px / 2 = 12px)
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const handleMouseEnter = () => scale.set(2);
    const handleMouseLeave = () => scale.set(1);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.style.cursor = "auto";
    };
  }, [x, y, scale]);

  return (
    <motion.div
      className="fixed top-0 cursor-none left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
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
