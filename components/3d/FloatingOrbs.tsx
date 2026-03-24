"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, CircleDashed, Diamond, Hexagon, Leaf, TrendingUp } from "lucide-react";
import { useState } from "react";

const shapes = [
  { Icon: CircleDashed, className: "left-[10%] top-[28%] h-20 w-20 bg-pastel-blue", factor: 12, rotate: -10 },
  { Icon: BarChart3, className: "left-[22%] top-[56%] h-24 w-24 bg-pastel-green", factor: 20, rotate: -6 },
  { Icon: Hexagon, className: "left-[44%] top-[20%] h-24 w-24 bg-pastel-gold", factor: 26, rotate: 8 },
  { Icon: TrendingUp, className: "right-[22%] top-[26%] h-24 w-24 bg-pastel-warm", factor: 14, rotate: 10 },
  { Icon: Diamond, className: "right-[10%] top-[52%] h-20 w-20 bg-pastel-purple", factor: 22, rotate: 0 },
  { Icon: Leaf, className: "left-[52%] top-[60%] h-28 w-28 bg-accent-light", factor: 18, rotate: 14 }
];

export function FloatingOrbs() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const groupX = useTransform(springX, [-100, 100], [-10, 10]);
  const groupY = useTransform(springY, [-100, 100], [-10, 10]);

  return (
    <div
      className="relative h-[360px] w-full md:h-[560px]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
        setPointer({ x, y });
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
        setPointer({ x: 0, y: 0 });
      }}
    >
      {shapes.map(({ Icon, className, rotate }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.84, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 0.45, delay: 0.5 + index * 0.08 },
            scale: { duration: 0.45, delay: 0.5 + index * 0.08 },
            y: { duration: 3.5 + index * 0.35, delay: index * 0.18, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            x: groupX,
            y: groupY,
            rotate,
            marginLeft: pointer.x / shapes[index].factor,
            marginTop: pointer.y / shapes[index].factor
          }}
          className={`consulting-shape absolute flex items-center justify-center rounded-[28px] border border-white/60 shadow-soft ${className} max-md:static max-md:mx-auto max-md:mb-4`}
        >
          <Icon className="h-10 w-10 text-accent" strokeWidth={1.7} />
        </motion.div>
      ))}
    </div>
  );
}
