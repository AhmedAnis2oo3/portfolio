// ─────────────────────────────────────────────────────────────────────────────
// Contact.jsx
// EmailJS integration — messages go directly to ahmed007bakhai@gmail.com
//
// SETUP (one-time, free):
//  1. Go to https://www.emailjs.com → sign up with ahmed007bakhai@gmail.com
//  2. Add Email Service → connect your Gmail account → copy the Service ID
//  3. Create Email Template with these variables:
//       {{from_name}}   {{from_email}}   {{subject}}   {{message}}
//     Copy the Template ID.
//  4. Go to Account → API Keys → copy your Public Key.
//  5. Paste all three values into src/data/index.js → EMAILJS_CONFIG
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { PROFILE, EMAILJS_CONFIG } from "../data";
import { Reveal, SectionHead } from "./utils";

export default function Contact({ T }) {
  const [form,   setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [ejsReady, setEjsReady] = useState(false);

  // Dynamically load EmailJS SDK once
  useEffect(() => {
    if (window.emailjs) { setEjsReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
      setEjsReady(true);
    };
    document.head.appendChild(script);
  }, []);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Guard: if EmailJS IDs aren't configured yet, show friendly error
    if (
      EMAILJS_CONFIG.SERVICE_ID  === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_CONFIG.PUBLIC_KEY  === "YOUR_PUBLIC_KEY"
    ) {
      console.warn("EmailJS not configured — see src/data/index.js → EMAILJS_CONFIG");
      setTimeout(() => setStatus("not_configured"), 600);
      return;
    }

    try {
      await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || "(no subject)",
          message:    form.message,
          to_email:   PROFILE.email,
        }
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    fontFamily: "'DM Mono', monospace", fontWeight: 400,
    fontSize: ".82rem", letterSpacing: ".03em", color: T.heading,
    background: T.isDark
      ? "linear-gradient(135deg,rgba(14,18,28,.9),rgba(20,24,34,.9))"
      : "linear-gradient(135deg,rgba(255,255,255,.95),rgba(248,250,254,.95))",
    border: `1px solid ${T.borderMd}`,
    boxShadow: T.isDark
      ? "inset 0 2px 4px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.04)"
      : "inset 0 2px 4px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.9)",
    borderRadius: 10, padding: ".82rem 1.1rem",
    width: "100%", outline: "none", transition: "border-color .2s,box-shadow .2s",
  };

  const focusStyle = e => {
    e.target.style.borderColor = T.borderHi;
    e.target.style.boxShadow = T.isDark
      ? "inset 0 2px 4px rgba(0,0,0,.4),0 0 0 3px rgba(160,180,210,.06)"
      : "inset 0 2px 4px rgba(0,0,0,.05),0 0 0 3px rgba(80,100,150,.06)";
  };
  const blurStyle = e => {
    e.target.style.borderColor = T.borderMd;
    e.target.style.boxShadow = T.isDark
      ? "inset 0 2px 4px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.04)"
      : "inset 0 2px 4px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.9)";
  };

  // ── Status screens ──────────────────────────────────────────────────────────
  const StatusScreen = () => {
    if (status === "sent") return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.5rem", color: T.heading, marginBottom: ".5rem" }}>Message Sent!</h3>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: ".78rem", color: T.body, letterSpacing: ".04em", lineHeight: 1.6 }}>
          Thank you for reaching out.<br />I'll get back to you as soon as possible.
        </p>
        <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }} style={{
          marginTop: "1.5rem", fontFamily: "'DM Mono', monospace", fontWeight: 500,
          fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase",
          color: T.chromeTxt, background: "transparent",
          border: `1px solid ${T.borderMd}`, borderRadius: 8, padding: ".5rem 1.2rem", cursor: "pointer",
        }}>Send Another →</button>
      </div>
    );

    if (status === "error") return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.4rem", color: T.heading, marginBottom: ".5rem" }}>Something went wrong</h3>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: ".75rem", color: T.body, lineHeight: 1.6 }}>
          Please try again or email me directly at<br />
          <a href={`mailto:${PROFILE.email}`} style={{ color: T.chromeTxt }}>{PROFILE.email}</a>
        </p>
        <button onClick={() => setStatus("idle")} style={{
          marginTop: "1.5rem", fontFamily: "'DM Mono', monospace", fontWeight: 500,
          fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase",
          color: T.chromeTxt, background: "transparent",
          border: `1px solid ${T.borderMd}`, borderRadius: 8, padding: ".5rem 1.2rem", cursor: "pointer",
        }}>Try Again</button>
      </div>
    );

    if (status === "not_configured") return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚙</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.4rem", color: T.heading, marginBottom: ".5rem" }}>EmailJS Not Configured</h3>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: ".72rem", color: T.body, lineHeight: 1.8 }}>
          Open <code style={{ color: T.chromeTxt }}>src/data/index.js</code><br />
          and fill in <code style={{ color: T.chromeTxt }}>EMAILJS_CONFIG</code><br />
          with your Service ID, Template ID, and Public Key.
        </p>
        <button onClick={() => setStatus("idle")} style={{
          marginTop: "1.5rem", fontFamily: "'DM Mono', monospace", fontWeight: 500,
          fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase",
          color: T.chromeTxt, background: "transparent",
          border: `1px solid ${T.borderMd}`, borderRadius: 8, padding: ".5rem 1.2rem", cursor: "pointer",
        }}>Back</button>
      </div>
    );

    return null;
  };

  return (
    <section id="contact" style={{
      padding: "7rem clamp(1.5rem,8vw,7rem)",
      borderTop: `1px solid ${T.border}`,
      background: T.bg,
    }}>
      <SectionHead index="06 /" title="Get In Touch" T={T} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "4rem" }}>

        {/* Contact info column */}
        <div>
          <Reveal>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "1.12rem",
              color: T.body, lineHeight: 1.8, maxWidth: 420, marginBottom: "2.5rem",
            }}>
              Open to internship opportunities, project collaborations, and meaningful conversations about software engineering.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
            {[
              { icon: "✉", label: "Email",    val: PROFILE.email,    href: `mailto:${PROFILE.email}` },
              { icon: "☎", label: "Phone",    val: PROFILE.phone,    href: `tel:${PROFILE.phone}` },
              { icon: "◧", label: "LinkedIn", val: "ahmedanis2003",  href: PROFILE.linkedin },
              { icon: "◎", label: "Location", val: PROFILE.location, href: null },
            ].map((item, i) => {
              const inner = (
                <div style={{
                  display: "flex", alignItems: "center", gap: ".9rem",
                  background: T.surface, border: `1px solid ${T.border}`,
                  borderRadius: 12, padding: "1rem 1.3rem",
                  boxShadow: T.isDark
                    ? "0 1px 10px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.04)"
                    : "0 1px 8px rgba(0,0,0,.05),inset 0 1px 0 rgba(255,255,255,.9)",
                  transition: "all .22s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                    background: T.chrome, border: `1px solid ${T.borderMd}`,
                    boxShadow: T.isDark
                      ? "0 2px 8px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.2)"
                      : "0 2px 8px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.7)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: T.isDark ? "#08090E" : "#fff", fontSize: ".9rem",
                  }}>{item.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace", fontWeight: 500,
                      fontSize: ".58rem", color: T.dim,
                      letterSpacing: ".18em", textTransform: "uppercase", marginBottom: ".15rem",
                    }}>{item.label}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".78rem", color: T.heading }}>{item.val}</div>
                  </div>
                </div>
              );
              return (
                <Reveal key={i} delay={i * .06}>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{inner}</a>
                    : inner}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Form column */}
        <Reveal delay={.15}>
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`,
            borderRadius: 16, padding: "2.2rem",
            boxShadow: T.isDark
              ? "0 4px 32px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05)"
              : "0 4px 28px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.9)",
          }}>
            {status !== "idle" && status !== "sending" ? (
              <StatusScreen />
            ) : (
              <>
                <div style={{ marginBottom: "1.6rem", paddingBottom: "1rem", borderBottom: `1px solid ${T.border}` }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.3rem", color: T.heading, margin: 0 }}>
                    Send a Message
                  </h3>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: ".62rem", color: T.dim, letterSpacing: ".08em", marginTop: ".3rem" }}>
                    Fields marked * are required · Delivered to {PROFILE.email}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { key: "name",    label: "Full Name *",     placeholder: "John Doe",                               type: "text"  },
                    { key: "email",   label: "Email Address *", placeholder: "john@company.com",                       type: "email" },
                    { key: "subject", label: "Subject",         placeholder: "Internship opportunity / Collaboration", type: "text"  },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{
                        fontFamily: "'DM Mono', monospace", fontWeight: 500,
                        fontSize: ".6rem", color: T.dim,
                        letterSpacing: ".16em", textTransform: "uppercase",
                        display: "block", marginBottom: ".38rem",
                      }}>{f.label}</label>
                      <input
                        value={form[f.key]}
                        onChange={e => update(f.key, e.target.value)}
                        placeholder={f.placeholder}
                        type={f.type}
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{
                      fontFamily: "'DM Mono', monospace", fontWeight: 500,
                      fontSize: ".6rem", color: T.dim,
                      letterSpacing: ".16em", textTransform: "uppercase",
                      display: "block", marginBottom: ".38rem",
                    }}>Message *</label>
                    <textarea
                      value={form.message}
                      onChange={e => update("message", e.target.value)}
                      placeholder="Write your message here…"
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>

                  <button
                    onClick={submit}
                    disabled={status === "sending" || !ejsReady}
                    style={{
                      fontFamily: "'DM Mono', monospace", fontWeight: 500,
                      fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase",
                      color: T.isDark ? "#08090E" : "#fff",
                      background: (status === "sending" || !ejsReady) ? T.dim : T.chrome,
                      border: `1px solid ${T.borderMd}`,
                      boxShadow: status === "sending" ? "none" : T.isDark
                        ? "0 4px 20px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.22)"
                        : "0 4px 16px rgba(0,0,0,.14),inset 0 1px 0 rgba(255,255,255,.6)",
                      borderRadius: 10, padding: ".9rem",
                      cursor: (status === "sending" || !ejsReady) ? "not-allowed" : "pointer",
                      transition: "all .2s",
                    }}
                    onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
