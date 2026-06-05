// ─────────────────────────────────────────────────────────────────────────────
// Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { NAV_ITEMS, RESUME_URL } from "../data";

export default function Navbar({ T, setDark, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mopen,   setMopen]   = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navBg = scrolled
    ? (T.isDark ? "rgba(8,9,14,.93)" : "rgba(244,245,247,.93)")
    : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300, height: 64,
        background: navBg,
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "none",
        boxShadow: scrolled
          ? (T.isDark ? "0 4px 32px rgba(0,0,0,.5)" : "0 4px 24px rgba(0,0,0,.07)")
          : "none",
        transition: "all .4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.2rem,5vw,4.5rem)",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: T.chrome,
            border: `1px solid ${T.borderMd}`,
            boxShadow: T.isDark
              ? "0 2px 12px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.18)"
              : "0 2px 10px rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255,.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
            fontSize: "1.15rem", color: T.isDark ? "#08090E" : "#fff",
          }}>A</div>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
              fontSize: "1rem", color: T.heading, lineHeight: 1.1, letterSpacing: ".02em",
            }}>Ahmed Anis</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: ".55rem",
              color: T.muted, letterSpacing: ".1em",
            }}>SOFTWARE ENGINEER</div>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.2rem" }} className="desk-nav">
          {NAV_ITEMS.map(n => {
            const isA = active === n.toLowerCase();
            return (
              <a key={n} href={`#${n.toLowerCase()}`} style={{
                fontFamily: "'DM Mono', monospace", fontWeight: 500,
                fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase",
                color: isA ? T.chromeTxt : T.muted,
                textDecoration: "none", transition: "color .2s",
                position: "relative", paddingBottom: 3,
              }}
                onMouseEnter={e => e.currentTarget.style.color = T.heading}
                onMouseLeave={e => e.currentTarget.style.color = isA ? T.chromeTxt : T.muted}
              >
                {n}
                {isA && (
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: T.chrome, borderRadius: 1,
                    boxShadow: T.isDark ? "0 0 6px rgba(180,200,220,.4)" : "none",
                  }} />
                )}
              </a>
            );
          })}

          {/* CV download */}
          <a href={RESUME_URL} download="Ahmed_Anis_CV.pdf" style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase",
            color: T.isDark ? "#08090E" : "#fff",
            background: T.chrome, border: `1px solid ${T.borderMd}`,
            boxShadow: T.isDark
              ? "0 2px 12px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.2)"
              : "0 2px 10px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.6)",
            padding: ".44rem 1.1rem", borderRadius: 7, textDecoration: "none",
            transition: "transform .2s, box-shadow .2s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = T.isDark
                ? "0 5px 20px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.25)"
                : "0 5px 18px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = T.isDark
                ? "0 2px 12px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.2)"
                : "0 2px 10px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.6)";
            }}
          >↓ CV</a>

          {/* Theme toggle */}
          <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" style={{
            width: 42, height: 24, borderRadius: 12,
            background: T.isDark
              ? "linear-gradient(135deg, #1A2030, #252D3D)"
              : "linear-gradient(135deg, #D0D8E8, #E4EAF4)",
            border: `1px solid ${T.borderMd}`,
            boxShadow: T.isDark
              ? "inset 0 1px 3px rgba(0,0,0,.6), 0 1px 0 rgba(255,255,255,.06)"
              : "inset 0 1px 3px rgba(0,0,0,.12), 0 1px 0 rgba(255,255,255,.9)",
            cursor: "pointer", position: "relative", transition: "all .3s", flexShrink: 0,
          }}>
            <span style={{
              position: "absolute", top: 3, left: T.isDark ? 21 : 3,
              width: 16, height: 16, borderRadius: "50%", background: T.chrome,
              boxShadow: "0 1px 4px rgba(0,0,0,.35)",
              transition: "left .3s cubic-bezier(.34,1.2,.64,1)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem",
            }}>{T.isDark ? "◗" : "◑"}</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMopen(!mopen)} className="mob-btn" aria-label="Menu" style={{
          background: "none", border: `1px solid ${T.borderMd}`,
          color: T.heading, padding: ".4rem .7rem",
          borderRadius: 7, cursor: "pointer",
          fontFamily: "'DM Mono', monospace", fontSize: ".85rem",
        }}>☰</button>
      </nav>

      {/* Mobile drawer */}
      {mopen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 299,
          background: T.isDark ? "rgba(8,9,14,.97)" : "rgba(244,245,247,.97)",
          backdropFilter: "blur(24px)", borderBottom: `1px solid ${T.border}`,
          padding: "1.5rem 2rem",
          display: "flex", flexDirection: "column", gap: "1.2rem",
        }}>
          {NAV_ITEMS.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMopen(false)} style={{
              fontFamily: "'DM Mono', monospace", fontWeight: 500,
              fontSize: ".85rem", letterSpacing: ".12em", textTransform: "uppercase",
              color: T.heading, textDecoration: "none",
            }}>{n}</a>
          ))}
          <a href={RESUME_URL} download="Ahmed_Anis_CV.pdf" style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".8rem",
            color: T.isDark ? "#08090E" : "#fff",
            background: T.chrome, padding: ".6rem 1.2rem",
            borderRadius: 8, textDecoration: "none", textAlign: "center",
          }}>↓ Download CV</a>
          <button onClick={() => setDark(d => !d)} style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".75rem",
            letterSpacing: ".1em", textTransform: "uppercase",
            color: T.chromeTxt, background: "transparent",
            border: `1px solid ${T.borderMd}`, borderRadius: 8,
            padding: ".5rem 1rem", cursor: "pointer", textAlign: "left",
          }}>
            {T.isDark ? "◑ Light Mode" : "◗ Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
}
