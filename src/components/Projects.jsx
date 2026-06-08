// ─────────────────────────────────────────────────────────────────────────────
// Projects.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { PROJECTS_DATA } from "../data";
import { Reveal, SectionHead, Chip } from "./utils";

export default function Projects({ T }) {
  return (
    <section id="projects" style={{
      padding: "7rem clamp(1.5rem,8vw,7rem)",
      borderTop: `1px solid ${T.border}`,
      background: T.bg,
    }}>
      <SectionHead index="05 /" title="Featured Projects" T={T} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "1.6rem" }}>
        {PROJECTS_DATA.map((p, i) => (
          <Reveal key={i} delay={i * .1}>
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 16, overflow: "hidden",
              boxShadow: T.isDark
                ? "0 4px 32px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.05)"
                : "0 4px 24px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.9)",
              transition: "transform .35s,box-shadow .35s",
              display: "flex", flexDirection: "column",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = T.isDark ? "0 20px 60px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.07)" : "0 20px 50px rgba(0,0,0,.14),inset 0 1px 0 rgba(255,255,255,.95)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = T.isDark ? "0 4px 32px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.05)" : "0 4px 24px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.9)"; }}
            >
              {/* Banner */}
              <div style={{
                height: 180,
                background: T.isDark
                  ? "linear-gradient(135deg,#0E1422 0%,#141824 40%,#1A2030 100%)"
                  : "linear-gradient(135deg,#E8EDF4 0%,#F0F4FA 40%,#E4EAF2 100%)",
                borderBottom: `1px solid ${T.border}`,
                position: "relative", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Grid pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: T.isDark
                    ? "linear-gradient(rgba(160,180,210,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(160,180,210,.04) 1px,transparent 1px)"
                    : "linear-gradient(rgba(80,100,150,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(80,100,150,.04) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }} />
                {/* Centre badge */}
                <div style={{
                  position: "relative", width: 72, height: 72, borderRadius: 18,
                  background: T.chrome, border: `1px solid ${T.borderMd}`,
                  boxShadow: T.isDark
                    ? "0 8px 32px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.25)"
                    : "0 8px 28px rgba(0,0,0,.12),inset 0 1px 0 rgba(255,255,255,.7)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                  fontSize: "2rem", color: T.isDark ? "#08090E" : "#fff",
                }}>{p.title.charAt(0)}</div>
                {/* Tech previews */}
                <div style={{ position: "absolute", bottom: 12, left: 12, display: "flex", gap: ".35rem", flexWrap: "wrap" }}>
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: ".58rem",
                      color: T.isDark ? "rgba(200,215,235,.7)" : "rgba(60,80,130,.7)",
                      background: T.isDark ? "rgba(10,14,22,.7)" : "rgba(230,236,248,.85)",
                      backdropFilter: "blur(6px)", border: `1px solid ${T.border}`,
                      borderRadius: 4, padding: ".15rem .45rem",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.7rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                  fontSize: "1.25rem", color: T.heading, margin: "0 0 .3rem", lineHeight: 1.25,
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: "'DM Mono', monospace", fontStyle: "italic",
                  fontSize: ".7rem", color: T.muted, margin: "0 0 .9rem", letterSpacing: ".04em",
                }}>{p.subtitle}</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
                  color: T.body, lineHeight: 1.7, margin: "0 0 1rem", flex: 1,
                }}>{p.desc}</p>

                {/* All tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.4rem" }}>
                  {p.tech.map(t => <Chip key={t} label={t} T={T} />)}
                </div>

                {/* Action buttons */}{/*}
                <div style={{ display: "flex", gap: ".7rem" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'DM Mono', monospace", fontWeight: 500,
                    fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase",
                    color: T.chromeTxt, textDecoration: "none",
                    background: T.isDark
                      ? "linear-gradient(135deg,rgba(20,24,34,.9),rgba(28,32,44,.9))"
                      : "linear-gradient(135deg,rgba(240,244,250,.9),rgba(232,238,248,.9))",
                    border: `1px solid ${T.borderMd}`,
                    borderRadius: 8, padding: ".5rem 1rem", transition: "all .2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHi}
                    onMouseLeave={e => e.currentTarget.style.borderColor = T.borderMd}
                  >⬡ GitHub</a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'DM Mono', monospace", fontWeight: 500,
                    fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase",
                    color: T.isDark ? "#08090E" : "#fff", textDecoration: "none",
                    background: T.chrome, border: `1px solid ${T.borderMd}`,
                    boxShadow: T.isDark
                      ? "0 2px 10px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.2)"
                      : "0 2px 8px rgba(0,0,0,.12),inset 0 1px 0 rgba(255,255,255,.6)",
                    borderRadius: 8, padding: ".5rem 1rem", transition: "all .2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
                  >↗ Live Demo</a>
                </div>*/}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
