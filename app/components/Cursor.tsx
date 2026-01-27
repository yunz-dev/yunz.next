import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function useDisableFancyCursor() {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia?.("(pointer: coarse)");
    const noHover = window.matchMedia?.("(hover: none)");
    const small = window.matchMedia?.("(max-width: 768px)");

    const compute = () => {
      const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setDisabled(
        touch ||
        !!coarse?.matches ||
        !!noHover?.matches ||
        !!small?.matches
      );
    };

    compute();

    const mqs = [coarse, noHover, small].filter(Boolean) as MediaQueryList[];
    mqs.forEach((m) =>
      m.addEventListener ? m.addEventListener("change", compute) : m.addListener(compute)
    );
    window.addEventListener("resize", compute);

    return () => {
      mqs.forEach((m) =>
        m.removeEventListener ? m.removeEventListener("change", compute) : m.removeListener(compute)
      );
      window.removeEventListener("resize", compute);
    };
  }, []);

  return disabled;
}

const Cursor = () => {
  const disabled = useDisableFancyCursor();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 650, damping: 50 });
  const springY = useSpring(y, { stiffness: 650, damping: 50 });

  const scale = useMotionValue(1);
  const background = useTransform(scale, [1, 2], ["#fff", "#fff"]);

  useEffect(() => {
    if (disabled) {
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
  }, [disabled, x, y, scale]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        scale,
        background,
        mixBlendMode: "difference",
        display: disabled ? "none" : "block",
      }}
    />
  );
};

export default Cursor;
