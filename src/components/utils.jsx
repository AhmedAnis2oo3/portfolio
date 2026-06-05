// ─────────────────────────────────────────────────────────────────────────────
// SHARED UTILITIES
// Hooks, animation wrappers, and small reusable UI atoms.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

// ── useInView ─────────────────────────────────────────────────────────────────
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Reveal — fade + slide in on scroll ───────────────────────────────────────
export function Reveal({ children, delay = 0, fromY = 28, fromX = 0 }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{
      opacity:    v ? 1 : 0,
      transform:  v ? "none" : `translate(${fromX}px, ${fromY}px)`,
      transition: `opacity .7s cubic-bezier(.4,0,.2,1) ${delay}s,
                   transform .7s cubic-bezier(.34,1.2,.64,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ── SectionHead — numbered heading with chrome rule ──────────────────────────
export function SectionHead({ index, title, T }) {
  return (
    <Reveal>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".5rem" }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: ".65rem",
            color: T.gold, letterSpacing: ".2em", opacity: .8,
          }}>{index}</span>
          <div style={{
            flex: 1, height: 1,
            background: `linear-gradient(90deg,
              ${T.isDark ? "rgba(180,190,210,.2)" : "rgba(90,100,130,.15)"},
              transparent)`,
          }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
          fontSize: "clamp(2rem,4.5vw,3rem)", lineHeight: 1.05,
          color: T.heading, margin: 0, letterSpacing: "-.015em",
        }}>{title}</h2>
      </div>
    </Reveal>
  );
}

// ── Chip — tech badge ─────────────────────────────────────────────────────────
export function Chip({ label, T }) {
  return (
    <span style={{
      display: "inline-block",
      fontFamily: "'DM Mono', monospace", fontWeight: 500,
      fontSize: ".68rem", letterSpacing: ".06em", color: T.chromeTxt,
      background: T.isDark
        ? "linear-gradient(135deg, rgba(160,175,195,.12), rgba(200,215,230,.07))"
        : "linear-gradient(135deg, rgba(80,100,140,.10), rgba(100,120,160,.06))",
      border: `1px solid ${T.borderMd}`,
      boxShadow: T.isDark
        ? "0 1px 0 rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.04)"
        : "0 1px 3px rgba(0,0,0,.07),    inset 0 1px 0 rgba(255,255,255,.8)",
      padding: ".28rem .72rem", borderRadius: 5,
    }}>{label}</span>
  );
}

// ── SkillBar ──────────────────────────────────────────────────────────────────
export function SkillBar({ name, pct, delay, T }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".35rem" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: ".74rem", color: T.body, letterSpacing: ".04em" }}>
          {name}
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: ".68rem", color: T.muted, letterSpacing: ".06em" }}>
          {pct}%
        </span>
      </div>
      <div style={{
        height: 3, borderRadius: 3,
        background: T.isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
        overflow: "hidden",
        boxShadow: T.isDark ? "inset 0 1px 2px rgba(0,0,0,.5)" : "inset 0 1px 2px rgba(0,0,0,.1)",
      }}>
        <div style={{
          height: "100%", borderRadius: 3,
          background: T.chrome,
          width: v ? `${pct}%` : "0%",
          transition: `width 1s cubic-bezier(.4,0,.2,1) ${delay}s`,
          boxShadow: T.isDark ? "0 0 8px rgba(180,200,220,.25)" : "none",
        }} />
      </div>
    </div>
  );
}
