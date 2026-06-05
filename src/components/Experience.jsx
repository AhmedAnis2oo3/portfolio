// ─────────────────────────────────────────────────────────────────────────────
// Experience.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { EXPERIENCE_DATA } from "../data";
import { Reveal, SectionHead } from "./utils";

export default function Experience({ T }) {
  return (
    <section id="experience" style={{
      padding: "7rem clamp(1.5rem,8vw,7rem)",
      borderTop: `1px solid ${T.border}`,
      background: T.bg,
    }}>
      <SectionHead index="03 /" title="Work Experience" T={T} />

      <div style={{ position: "relative", maxWidth: 760 }}>
        {/* Vertical timeline rule */}
        <div style={{
          position: "absolute", left: 14, top: 0, bottom: 0, width: 1,
          background: `linear-gradient(180deg,${T.isDark ? "rgba(160,180,210,.3)" : "rgba(80,100,150,.2)"},transparent)`,
        }} />

        {EXPERIENCE_DATA.map((exp, i) => (
          <Reveal key={i} delay={i * .1}>
            <div style={{ display: "flex", gap: "1.4rem", marginBottom: "2rem" }}>
              {/* Timeline node */}
              <div style={{
                flexShrink: 0, width: 30, height: 30, borderRadius: "50%", marginTop: 4,
                background: T.chrome, border: `1px solid ${T.borderMd}`, zIndex: 1,
                boxShadow: T.isDark
                  ? `0 0 0 5px ${T.bg},0 0 0 6px rgba(160,180,210,.2)`
                  : `0 0 0 5px ${T.bg},0 0 0 6px rgba(80,100,150,.15)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Mono', monospace", fontSize: ".6rem",
                color: T.isDark ? "#08090E" : "#fff",
              }}>✦</div>

              {/* Card */}
              <div style={{
                flex: 1, background: T.surface,
                border: `1px solid ${T.border}`,
                borderLeft: `2px solid ${T.isDark ? "rgba(160,180,210,.35)" : "rgba(80,100,150,.3)"}`,
                borderRadius: 12, padding: "1.5rem 1.7rem",
                boxShadow: T.isDark
                  ? "0 2px 16px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.04)"
                  : "0 2px 12px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.9)",
                transition: "transform .3s,box-shadow .3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = T.isDark ? "0 6px 28px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.05)" : "0 6px 24px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.95)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = T.isDark ? "0 2px 16px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.04)" : "0 2px 12px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.9)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".25rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.2rem", color: T.heading }}>{exp.role}</span>
                  {exp.current && (
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: ".6rem",
                      color: T.green, background: T.isDark ? "rgba(76,175,135,.1)" : "rgba(26,122,80,.08)",
                      border: `1px solid ${T.isDark ? "rgba(76,175,135,.25)" : "rgba(26,122,80,.2)"}`,
                      borderRadius: 4, padding: ".12rem .5rem", letterSpacing: ".06em",
                    }}>ACTIVE</span>
                  )}
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".75rem",
                  letterSpacing: ".06em",
                  background: T.chrome, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: ".2rem",
                }}>{exp.company}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: ".65rem",
                  color: T.dim, marginBottom: "1.1rem", letterSpacing: ".04em",
                }}>{exp.period} · {exp.location}</div>
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
                      color: T.body, marginBottom: ".35rem", lineHeight: 1.6,
                    }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
