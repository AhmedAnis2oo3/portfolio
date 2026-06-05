// ─────────────────────────────────────────────────────────────────────────────
// Skills.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { SKILLS_DATA, COURSEWORK } from "../data";
import { Reveal, SectionHead, SkillBar } from "./utils";

export default function Skills({ T }) {
  return (
    <section id="skills" style={{
      padding: "7rem clamp(1.5rem,8vw,7rem)",
      borderTop: `1px solid ${T.border}`,
      background: T.bg2,
    }}>
      <SectionHead index="02 /" title="Skills & Technologies" T={T} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.4rem" }}>
        {SKILLS_DATA.map((cat, ci) => (
          <Reveal key={cat.cat} delay={ci * .08}>
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 14, padding: "1.8rem",
              boxShadow: T.isDark
                ? "0 2px 20px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05)"
                : "0 2px 16px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.9)",
              transition: "transform .3s,box-shadow .3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = T.isDark ? "0 10px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.07)" : "0 10px 36px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.95)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = T.isDark ? "0 2px 20px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05)" : "0 2px 16px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.9)"; }}
            >
              {/* Card header */}
              <div style={{
                display: "flex", alignItems: "center", gap: ".65rem",
                marginBottom: "1.6rem", paddingBottom: "1rem",
                borderBottom: `1px solid ${T.border}`,
              }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: T.isDark
                    ? "linear-gradient(135deg,rgba(160,175,200,.12),rgba(200,215,235,.06))"
                    : "linear-gradient(135deg,rgba(80,100,150,.1),rgba(100,120,180,.06))",
                  border: `1px solid ${T.borderMd}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Mono', monospace", fontSize: ".85rem", color: T.chromeTxt,
                }}>{cat.icon}</span>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontWeight: 500,
                  fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase",
                  color: T.chromeTxt,
                }}>{cat.cat}</span>
              </div>

              {cat.skills.map((sk, si) => (
                <SkillBar key={sk.n} name={sk.n} pct={sk.p} delay={ci * .08 + si * .05} T={T} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Coursework strip */}
      <Reveal delay={.35}>
        <div style={{
          marginTop: "2rem", background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 12, padding: "1.2rem 1.6rem",
          boxShadow: T.isDark
            ? "inset 0 1px 0 rgba(255,255,255,.05),0 2px 12px rgba(0,0,0,.2)"
            : "inset 0 1px 0 rgba(255,255,255,.9),0 2px 10px rgba(0,0,0,.05)",
          display: "flex", flexWrap: "wrap", gap: ".6rem 1.4rem", alignItems: "center",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".6rem", color: T.dim,
            letterSpacing: ".2em", textTransform: "uppercase", flexShrink: 0,
          }}>Coursework</span>
          {COURSEWORK.map(c => (
            <span key={c} style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: ".98rem", color: T.body,
              borderBottom: `1px solid ${T.isDark ? "rgba(200,168,108,.3)" : "rgba(140,106,48,.25)"}`,
              paddingBottom: 1,
            }}>{c}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
