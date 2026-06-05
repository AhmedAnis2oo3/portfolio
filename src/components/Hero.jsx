// ─────────────────────────────────────────────────────────────────────────────
// Hero.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";
import { PROFILE, STATS, TITLES, RESUME_URL } from "../data";

// ── Particle canvas ───────────────────────────────────────────────────────────
function MetalParticles({ T }) {
  const cvs = useRef(null);
  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, pts, raf;
    const N = 55;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    const init = () => {
      resize();
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.5 + .6, bright: Math.random(),
      }));
    };
    const col = T.isDark ? "180,195,215" : "80,100,140";
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const a = T.isDark ? (0.3 + p.bright * .4) : (0.15 + p.bright * .25);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${a})`;
        ctx.fill();
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${col},${T.isDark ? 0.12 : 0.08} * (1 - ${d}/130))`;
            ctx.strokeStyle = `rgba(${col},${(T.isDark ? 0.12 : 0.08) * (1 - d / 130)})`;
            ctx.lineWidth = .7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, [T]);
  return <canvas ref={cvs} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

// ── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ T }) {
  const [ti, setTi]   = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const target = TITLES[ti];
    const id = setTimeout(() => {
      if (!del && txt.length < target.length)        setTxt(target.slice(0, txt.length + 1));
      else if (!del && txt.length === target.length) setDel(true);
      else if (del && txt.length > 0)                setTxt(txt.slice(0, -1));
      else { setDel(false); setTi((ti + 1) % TITLES.length); }
    }, del ? 35 : txt.length === TITLES[ti].length ? 2200 : 75);
    return () => clearTimeout(id);
  }, [txt, del, ti]);
  return (
    <span style={{
      fontFamily: "'DM Mono', monospace", fontStyle: "italic",
      fontSize: "clamp(.9rem,2vw,1.15rem)",
      background: T.chrome, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      letterSpacing: ".04em",
    }}>
      {txt}
      <span style={{
        display: "inline-block", width: 2, height: "1.1em",
        background: T.chromeTxt, marginLeft: 2, verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }} />
    </span>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero({ T }) {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 100); }, []);
  const enter = d => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(24px)",
    transition: `all .75s cubic-bezier(.4,0,.2,1) ${d}s`,
  });

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 clamp(1.5rem,8vw,7rem)",
      position: "relative", overflow: "hidden",
    }}>
      <MetalParticles T={T} />

      {/* Ambient glows */}
      {[
        { top: "5%",  right: "-8%", bottom: "auto", left: "auto",  size: 700 },
        { top: "auto",right: "auto",bottom: "-5%",  left: "-8%",   size: 600 },
      ].map((g, i) => (
        <div key={i} style={{
          position: "absolute",
          top: g.top, right: g.right, bottom: g.bottom, left: g.left,
          width: g.size, height: g.size, borderRadius: "50%",
          background: T.isDark
            ? `radial-gradient(circle, rgba(160,180,210,.0${i === 0 ? 6 : 5}) 0%, transparent 65%)`
            : `radial-gradient(circle, rgba(80,100,160,.0${i === 0 ? 6 : 4}) 0%, transparent 65%)`,
          filter: `blur(${i === 0 ? 60 : 80}px)`, pointerEvents: "none",
        }} />
      ))}

      {/* Fine grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: T.isDark
          ? "linear-gradient(rgba(180,190,210,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(180,190,210,.03) 1px,transparent 1px)"
          : "linear-gradient(rgba(90,100,140,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(90,100,140,.04) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%,black 20%,transparent 75%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", paddingTop: 80, maxWidth: 900, width: "100%" }}>

        {/* Availability badge */}
        <div style={{ ...enter(0.06), marginBottom: "1.8rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".68rem", letterSpacing: ".1em", color: T.green,
            background: T.isDark ? "rgba(76,175,135,.08)" : "rgba(26,122,80,.07)",
            border: `1px solid ${T.isDark ? "rgba(76,175,135,.22)" : "rgba(26,122,80,.18)"}`,
            borderRadius: 100, padding: ".35rem 1rem",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: T.green,
              boxShadow: `0 0 6px ${T.green}, 0 0 12px ${T.green}60`,
            }} />
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          ...enter(0.14),
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
          fontSize: "clamp(3.5rem,10vw,8rem)", lineHeight: .93,
          margin: "0 0 .12em", letterSpacing: "-.025em",
        }}>
          <span style={{ color: T.heading }}>Ahmed</span><br />
          <span style={{
            background: T.chrome,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: T.isDark ? "drop-shadow(0 2px 2px rgba(0,0,0,.5))" : "none",
          }}>Anis</span>
        </h1>

        {/* Typewriter */}
        <div style={{ ...enter(0.24), marginBottom: "1.3rem" }}>
          <Typewriter T={T} />
        </div>

        {/* University */}
        <div style={{ ...enter(0.3), marginBottom: "1.4rem", display: "flex", alignItems: "center", gap: ".6rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: ".68rem", color: T.gold, letterSpacing: ".12em" }}>◈</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: ".72rem", color: T.muted, letterSpacing: ".08em" }}>{PROFILE.university}</span>
        </div>

        {/* Bio */}
        <p style={{
          ...enter(0.36),
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
          fontSize: "clamp(1rem,2vw,1.18rem)", color: T.body,
          maxWidth: 560, lineHeight: 1.82, margin: "0 0 2.8rem",
        }}>{PROFILE.bio}</p>

        {/* Stats */}
        <div style={{
          ...enter(0.44),
          display: "flex", marginBottom: "2.8rem", flexWrap: "wrap",
          background: T.isDark
            ? "linear-gradient(135deg,rgba(20,24,34,.8),rgba(28,32,44,.8))"
            : "linear-gradient(135deg,rgba(255,255,255,.9),rgba(240,244,250,.9))",
          border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden",
          boxShadow: T.isDark
            ? "inset 0 1px 0 rgba(255,255,255,.06),0 4px 24px rgba(0,0,0,.3)"
            : "inset 0 1px 0 rgba(255,255,255,.9),0 4px 20px rgba(0,0,0,.07)",
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: ".9rem 1.8rem",
              borderRight: i < STATS.length - 1 ? `1px solid ${T.border}` : "none",
              flex: "1 1 auto", transition: "background .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = T.isDark ? "rgba(180,190,210,.04)" : "rgba(80,100,140,.04)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                fontSize: "1.9rem", lineHeight: 1,
                background: T.chrome, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.val}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: ".6rem",
                color: T.muted, textTransform: "uppercase", letterSpacing: ".14em", marginTop: 3,
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ ...enter(0.52), display: "flex", gap: ".9rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {/* Get in touch */}
          <a href="#contact" style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".75rem", letterSpacing: ".12em", textTransform: "uppercase",
            color: T.isDark ? "#08090E" : "#fff", background: T.chrome,
            border: `1px solid ${T.borderMd}`,
            boxShadow: T.isDark
              ? "0 4px 20px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.22)"
              : "0 4px 16px rgba(0,0,0,.15),inset 0 1px 0 rgba(255,255,255,.6)",
            padding: ".85rem 2rem", borderRadius: 8, textDecoration: "none", transition: "transform .2s,box-shadow .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
          >Get In Touch →</a>

          {/* View projects */}
          <a href="#projects" style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".75rem", letterSpacing: ".12em", textTransform: "uppercase",
            color: T.chromeTxt, background: "transparent",
            border: `1px solid ${T.borderMd}`,
            padding: ".85rem 2rem", borderRadius: 8, textDecoration: "none", transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.background = T.isDark ? "rgba(180,190,210,.06)" : "rgba(80,100,140,.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.borderMd; e.currentTarget.style.background = "transparent"; }}
          >View Projects</a>

          {/* Download CV */}
          <a href={RESUME_URL} download="Ahmed_Anis_CV.pdf" style={{
            fontFamily: "'DM Mono', monospace", fontWeight: 500,
            fontSize: ".75rem", letterSpacing: ".12em", textTransform: "uppercase",
            color: T.gold, background: "transparent",
            border: `1px solid ${T.isDark ? "rgba(200,168,108,.25)" : "rgba(140,106,48,.2)"}`,
            padding: ".85rem 2rem", borderRadius: 8, textDecoration: "none", transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = T.isDark ? "rgba(200,168,108,.08)" : "rgba(140,106,48,.07)"; e.currentTarget.style.borderColor = T.isDark ? "rgba(200,168,108,.45)" : "rgba(140,106,48,.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = T.isDark ? "rgba(200,168,108,.25)" : "rgba(140,106,48,.2)"; }}
          >↓ Download CV</a>
        </div>

        {/* Social links */}
        <div style={{ ...enter(0.58), display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
          {[
            { label: "GitHub",   icon: "⬡", href: PROFILE.github },
            { label: "LinkedIn", icon: "◧", href: PROFILE.linkedin },
            { label: "Email",    icon: "✉", href: `mailto:${PROFILE.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: ".4rem",
              fontFamily: "'DM Mono', monospace", fontWeight: 500,
              fontSize: ".68rem", letterSpacing: ".08em", color: T.muted,
              textDecoration: "none", border: `1px solid ${T.border}`,
              background: T.isDark ? "rgba(180,190,210,.03)" : "rgba(80,100,140,.03)",
              borderRadius: 8, padding: ".38rem .85rem", transition: "all .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = T.chromeTxt; e.currentTarget.style.borderColor = T.borderMd; e.currentTarget.style.background = T.isDark ? "rgba(180,190,210,.07)" : "rgba(80,100,140,.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.isDark ? "rgba(180,190,210,.03)" : "rgba(80,100,140,.03)"; }}
            ><span>{s.icon}</span>{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
