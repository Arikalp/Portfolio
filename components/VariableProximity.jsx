"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./VariableProximity.module.css";

export default function VariableProximity({
  text,
  className = "",
  radius = 120,
  fromWeight = 380,
  toWeight = 760,
  color = "#ffffff",
  activeColor = "#79ecab",
}) {
  const containerRef = useRef(null);
  const charRefs = useRef([]);
  const [pointer, setPointer] = useState({ x: -9999, y: -9999 });

  const chars = useMemo(() => Array.from(text || ""), [text]);

  useEffect(() => {
    const handleMove = (event) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const handleLeave = () => {
      setPointer({ x: -9999, y: -9999 });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const refs = charRefs.current;
    if (!refs.length) return;

    refs.forEach((node) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = pointer.x - cx;
      const dy = pointer.y - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - distance / radius);

      const weight = Math.round(fromWeight + (toWeight - fromWeight) * influence);
      node.style.fontVariationSettings = `'wght' ${weight}`;
      node.style.fontWeight = String(weight);
      node.style.color = influence > 0.02 ? activeColor : color;
      node.style.transform = influence > 0.02 ? "translateY(-1px)" : "translateY(0px)";
    });
  }, [pointer, radius, fromWeight, toWeight, color, activeColor]);

  return (
    <span ref={containerRef} className={`${styles.container} ${className}`.trim()}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          ref={(node) => {
            charRefs.current[index] = node;
          }}
          className={styles.char}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
