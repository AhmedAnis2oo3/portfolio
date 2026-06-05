// ─────────────────────────────────────────────────────────────────────────────
// App.jsx
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "./theme";
import { NAV_ITEMS } from "./data";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Education  from "./components/Education";
import Projects   from "./components/Projects";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  const [dark,       setDark]       = useState(true);
  const [active,     setActive]     = useState("about");
  const [scrollProg, setScrollProg] = useState(0);

  const T = dark ? DARK_THEME : LIGHT_THEME;

  // Active section detection
  useEffect(() => {
    const ids = [...NAV_ITEMS.map(n => n.toLowerCase()), "education"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.22 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const h = () => {
      const scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProg(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${T.bg}; transition: background .35s; }
        ::selection { background: rgba(160,180,210,.2); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb {
          background: ${T.isDark ? "rgba(160,180,210,.25)" : "rgba(80,100,150,.2)"};
          border-radius: 4px;
        }
        input, textarea { font-family: 'DM Mono', monospace; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .desk-nav { display: flex !important; }
        .mob-btn  { display: none  !important; }
        @media (max-width: 720px) {
          .desk-nav { display: none  !important; }
          .mob-btn  { display: block !important; }
        }
      `}</style>

      {/* Chrome scroll progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, zIndex: 500,
        height: 2, width: `${scrollProg}%`,
        background: T.chrome,
        boxShadow: T.isDark ? "0 0 8px rgba(180,200,220,.35)" : "none",
        transition: "width .12s linear",
      }} />

      <div style={{ background: T.bg, color: T.heading, minHeight: "100vh", transition: "background .35s,color .35s" }}>
        <Navbar     T={T} setDark={setDark} active={active} />
        <Hero       T={T} />
        <Skills     T={T} />
        <Experience T={T} />
        <Education  T={T} />
        <Projects   T={T} />
        <Contact    T={T} />
        <Footer     T={T} />
      </div>
    </>
  );
}
