// ─────────────────────────────────────────────────────────────────────────────
// Footer.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { NAV_ITEMS, PROFILE } from "../data";

export default function Footer({ T }) {
  return (
    <footer style={{
      borderTop: `1px solid ${T.border}`,
      background: T.bg2,
      padding: "2rem clamp(1.5rem,8vw,7rem)",
    }}>
      {/* Chrome rule */}
      <div style={{ height: 1, marginBottom: "1.8rem", background: T.chrome, opacity: .22, borderRadius: 1 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1rem", color: T.heading, letterSpacing: ".03em" }}>
            Ahmed Anis
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".58rem", color: T.dim, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 2 }}>
            Software Engineer · Karachi, Pakistan
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {NAV_ITEMS.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{
              fontFamily: "'DM Mono', monospace", fontWeight: 500,
              fontSize: ".62rem", letterSpacing: ".12em", textTransform: "uppercase",
              color: T.dim, textDecoration: "none", transition: "color .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = T.chromeTxt}
              onMouseLeave={e => e.currentTarget.style.color = T.dim}
            >{n}</a>
          ))}
        </div>

        {/* Credit */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".6rem", color: T.dim, letterSpacing: ".08em" }}>
          © {new Date().getFullYear()} · Built with React
        </div>
      </div>
    </footer>
  );
}
