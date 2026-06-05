<div align="center">

# Ahmed Anis — Portfolio

**Software Engineer · SZABIST University, Karachi**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![EmailJS](https://img.shields.io/badge/EmailJS-integrated-orange?style=flat-square)](https://emailjs.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Preview

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark mode hero — metallic particle canvas, large serif name, typewriter role, chrome stat bar](https://placehold.co/600x340/08090E/A8B4C4?text=Dark+Mode+%E2%80%94+Hero+%2B+Particles) | ![Light mode hero — same layout on a light grey surface](https://placehold.co/600x340/F4F5F7/4A5878?text=Light+Mode+%E2%80%94+Hero+%2B+Particles) |
| ![Skills section — four animated skill-bar cards](https://placehold.co/600x340/0D0F16/8898AA?text=Skills+%E2%80%94+Animated+Bars+%2B+Coursework) | ![Projects section — two accent-border project cards](https://placehold.co/600x340/ECEEF2/607090?text=Projects+%E2%80%94+Cards+%2B+Tech+Chips) |

> **Live demo:** _deploy to Vercel and paste your URL here_

---

## About This Project

A fully hand-coded personal portfolio for **Ahmed Anis**, a Software Engineering student at SZABIST Karachi. Built from scratch in React with zero UI libraries — every component, animation and interaction is written in plain JSX with inline styles using design tokens.

### Design language

- **Typography** — Cormorant Garamond (serif headings) + DM Mono (code / labels)
- **Palette** — Chrome/silver metallic gradients on a near-black surface (`#08090E`)
- **Motion** — `IntersectionObserver`-powered reveal animations and animated skill bars
- **Particles** — canvas-based metallic constellation background in the hero
- **Typewriter** — custom hook cycles through role titles with realistic typing rhythm

---

## Sections

| # | Section | What's inside |
|---|---------|---------------|
| 01 | **Hero** | Name, animated typewriter role, bio, stat counters, CTA buttons, social links, particle canvas |
| 02 | **Skills** | Four skill-category cards with animated progress bars; coursework strip |
| 03 | **Experience & Education** | Work timeline with dot-trail; education timeline; certification cards |
| 04 | **Projects** | Two featured project cards with tech chips, bullet points, GitHub/live links |
| 05 | **Contact** | Info cards + EmailJS-powered contact form with real delivery to Gmail |

---

## Features

- **Dark / Light toggle** — smooth theme transition, persists within the session; toggle in the navbar
- **Scroll progress bar** — thin chrome gradient line at the very top of the viewport
- **Active section tracking** — navbar link highlights as you scroll through each section
- **CV download** — both the navbar button and the hero CTA download `public/Ahmed_Anis_CV.pdf`
- **EmailJS contact form** — sends email directly to `Ahmed007bakhai@gmail.com`; shows success/error state
- **Responsive** — desktop nav collapses to a hamburger drawer on ≤ 720 px
- **Reveal animations** — every card/section fades and slides in on scroll via `IntersectionObserver`

---

## File Structure

```
ahmed-portfolio/
│
├── public/
│   └── Ahmed_Anis_CV.pdf          ← drop your CV here
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             logo, nav links, resume button, theme toggle
│   │   ├── Hero.jsx               particle canvas, typewriter, stats, CTA
│   │   ├── Skills.jsx             animated skill-bar cards, coursework strip
│   │   ├── Experience.jsx         work timeline, education, certifications
│   │   ├── Projects.jsx           project cards with tech chips & links
│   │   ├── Contact.jsx            contact info + EmailJS form
│   │   ├── Footer.jsx             nav links, copyright
│   │   └── ui.jsx                 shared: SectionHead, Chip, SkillBar
│   │
│   ├── constants/
│   │   ├── index.js               ← all portfolio data lives here
│   │   └── themes.js              dark / light theme token objects
│   │
│   ├── hooks.jsx                  useInView, Reveal wrapper
│   ├── App.jsx                    root — theme state, scroll tracker, layout
│   └── main.jsx                   React entry point
│
├── index.html                     loads EmailJS SDK from CDN
├── vite.config.js
└── package.json
```

---

## Customising Content

Everything editable is in **`src/constants/index.js`** — no need to touch any component file.

| Constant | Controls |
|----------|----------|
| `PROFILE` | name, bio, email, phone, GitHub, LinkedIn, location |
| `RESUME_URL` | path to the CV file served from `/public` |
| `TITLES` | the typewriter strings in the hero |
| `STATS` | the four hero stat counters |
| `SKILLS_DATA` | skill categories, skill names, percentage values |
| `COURSEWORK` | the italic chips in the skills section |
| `EXPERIENCE_DATA` | role, company, period, bullets |
| `EDUCATION_DATA` | institution, degree, period, note badge |
| `CERTS_DATA` | certification name, organisation, year |
| `PROJECTS_DATA` | title, subtitle, description, tech chips, GitHub/live links, accent colour |
| `EMAILJS_*` | service ID, template ID, public key |

---

## EmailJS Setup (5 minutes)

1. Sign up free at [emailjs.com](https://www.emailjs.com) — 200 emails/month included.
2. **Add a service** → connect Gmail → copy the **Service ID**.
3. **Create a template** using these variable names:

   | Variable | Value |
   |----------|-------|
   | `{{from_name}}` | sender's name |
   | `{{from_email}}` | sender's email |
   | `{{subject}}` | subject line |
   | `{{message}}` | message body |

4. Copy the **Template ID** and your **Public Key** (Account → API Keys).
5. Paste all three into `src/constants/index.js`:

```js
export const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
export const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
export const EMAILJS_PUBLIC_KEY  = "xxxxxxxxxxxxxxxxxxxx";
```

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Inline styles with design tokens (no CSS framework) |
| Fonts | Google Fonts — Cormorant Garamond + DM Mono |
| Email | EmailJS browser SDK (CDN) |
| Animation | CSS transitions + IntersectionObserver |
| Canvas | Native 2D API (particle hero) |
| Deployment | Vercel (recommended) |

---

## License

MIT — use freely for personal portfolios.
