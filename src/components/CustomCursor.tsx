"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#F4F4F0",
      mixBlendMode: "difference" as const,
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "transparent",
      border: "1px solid #F4F4F0",
      mixBlendMode: "difference" as const,
      transition: { type: "tween", ease: "backOut", duration: 0.2 }
    },
    explore: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(244, 244, 240, 0.1)",
      border: "1px solid #F4F4F0",
      backdropFilter: "blur(4px)",
      transition: { type: "tween", ease: "backOut", duration: 0.2 }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        variants={variants as any}
        animate={cursorVariant}
      >
        {cursorVariant === "explore" && (
          <span className="text-[10px] font-mono tracking-widest text-offwhite uppercase">
            Explore
          </span>
        )}
      </motion.div>
    </>
  );
}
