// ─────────────────────────────────────────────────────────────────────────────
// Education.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { EDUCATION_DATA, CERTS_DATA } from "../data";
import { Reveal, SectionHead } from "./utils";

export default function Education({ T }) {
  return (
    <section id="education" style={{
      padding: "7rem clamp(1.5rem,8vw,7rem)",
      borderTop: `1px solid ${T.border}`,
      background: T.bg2,
    }}>
      <SectionHead index="04 /" title="Education & Certifications" T={T} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "4rem" }}>

        {/* Education timeline */}
        <div>
          <Reveal>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".62rem",
              color: T.dim, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1.8rem",
            }}>Academic Background</p>
          </Reveal>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: 14, top: 0, bottom: 0, width: 1,
              background: `linear-gradient(180deg,${T.isDark ? "rgba(200,168,108,.25)" : "rgba(140,106,48,.2)"},transparent)`,
            }} />
            {EDUCATION_DATA.map((e, i) => (
              <Reveal key={i} delay={.1 + i * .07}>
                <div style={{ display: "flex", gap: "1.4rem", marginBottom: "1.4rem" }}>
                  <div style={{
                    flexShrink: 0, width: 30, height: 30, borderRadius: "50%", marginTop: 4,
                    background: T.surface2, border: `1px solid ${T.borderMd}`,
                    boxShadow: `0 0 0 5px ${T.bg2}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'DM Mono', monospace", fontSize: ".62rem",
                    color: T.gold, fontWeight: 700, zIndex: 1,
                  }}>{i + 1}</div>
                  <div style={{
                    flex: 1, background: T.surface, border: `1px solid ${T.border}`,
                    borderRadius: 10, padding: "1rem 1.3rem",
                    boxShadow: T.isDark
                      ? "0 1px 10px rgba(0,0,0,.2)"
                      : "0 1px 8px rgba(0,0,0,.05),inset 0 1px 0 rgba(255,255,255,.9)",
                    transition: "transform .25s,border-color .25s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.borderColor = T.borderMd; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = T.border; }}
                  >
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.05rem", color: T.heading, marginBottom: ".15rem" }}>{e.degree}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".7rem", background: T.chrome, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: ".1rem" }}>{e.inst}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".62rem", color: T.dim, display: "flex", gap: ".6rem" }}>
                      <span>{e.period}</span>
                      {e.note && <span style={{ color: T.gold }}>· {e.note}</span>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <Reveal delay={.06}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".62rem",
              color: T.dim, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1.8rem",
            }}>Certifications</p>
          </Reveal>
          <Reveal delay={.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
              {CERTS_DATA.map((c, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: T.surface, border: `1px solid ${T.border}`,
                  borderRadius: 10, padding: ".85rem 1.2rem",
                  boxShadow: T.isDark ? "0 1px 8px rgba(0,0,0,.2)" : "0 1px 6px rgba(0,0,0,.04),inset 0 1px 0 rgba(255,255,255,.8)",
                  transition: "border-color .2s,transform .2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.transform = "translateX(3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                      background: T.isDark ? "linear-gradient(135deg,#C8A86C,#E8C88C)" : "linear-gradient(135deg,#8C6A30,#C8A060)",
                      boxShadow: T.isDark ? "0 0 5px rgba(200,168,108,.5)" : "none",
                    }} />
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: ".78rem", color: T.heading }}>{c.name}</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".62rem", color: T.dim }}>{c.org}</div>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: ".62rem", color: T.gold,
                    background: T.isDark ? "rgba(200,168,108,.1)" : "rgba(140,106,48,.08)",
                    border: `1px solid ${T.isDark ? "rgba(200,168,108,.2)" : "rgba(140,106,48,.15)"}`,
                    borderRadius: 5, padding: ".1rem .45rem",
                  }}>{c.year}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
