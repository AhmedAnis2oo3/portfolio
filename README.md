# Ahmed Anis — Portfolio

Dark-chrome metallic portfolio built with React + Vite.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle → dist/
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed top nav, mobile drawer, theme toggle
│   ├── Hero.jsx         # Particle canvas, typewriter, CTA buttons
│   ├── Skills.jsx       # Animated skill bars + coursework strip
│   ├── Experience.jsx   # Timeline of work experience
│   ├── Education.jsx    # Education timeline + certifications
│   ├── Projects.jsx     # Project cards with tech chips
│   ├── Contact.jsx      # EmailJS contact form
│   ├── Footer.jsx       # Footer with nav links
│   └── utils.jsx        # Shared hooks, Reveal, SectionHead, Chip, SkillBar
│
├── data/
│   └── index.js         # ← ALL site content lives here (edit this!)
│
├── theme/
│   └── index.js         # Dark + light colour tokens
│
├── App.jsx              # Root layout, scroll progress, section detection
└── main.jsx             # React entry point
```

---

## How to Edit Content

**Everything is in `src/data/index.js`** — no need to touch components.

| What you want to change       | Variable in data/index.js  |
|-------------------------------|----------------------------|
| Your name, bio, email, links  | `PROFILE`                  |
| Hero stats (3+, 10+, …)       | `STATS`                    |
| Typewriter job titles         | `TITLES`                   |
| Skill bars                    | `SKILLS_DATA`              |
| Work experience               | `EXPERIENCE_DATA`          |
| Education entries             | `EDUCATION_DATA`           |
| Certifications                | `CERTS_DATA`               |
| Projects                      | `PROJECTS_DATA`            |
| Coursework tags               | `COURSEWORK`               |

---

## CV / Resume Download

1. Export your CV as a PDF.
2. Rename it `cv.pdf` and place it in the `/public` folder.
3. The download buttons in the Navbar and Hero will work automatically.

---

## EmailJS Setup (contact form → ahmed007bakhai@gmail.com)

Free plan allows **200 emails/month** — plenty for a portfolio.

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and **sign up** (use your Gmail).
2. **Add an Email Service** → choose Gmail → connect `ahmed007bakhai@gmail.com` → copy the **Service ID**.
3. **Create an Email Template**:
   - Subject: `New message from {{from_name}}`
   - Body example:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}

     {{message}}
     ```
   - Copy the **Template ID**.
4. Go to **Account → API Keys** → copy your **Public Key**.
5. Open `src/data/index.js` and paste the three values:

```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  "service_xxxxxxx",
  TEMPLATE_ID: "template_xxxxxxx",
  PUBLIC_KEY:  "xxxxxxxxxxxxxx",
};
```

The form will now deliver messages directly to your inbox.

---

## Deployment (Vercel — recommended, free)

```bash
npm run build
# then drag the dist/ folder to vercel.com/new
# or use the Vercel CLI:
npx vercel --prod
```

---

## Colours & Theming

Edit `src/theme/index.js` to change the dark/light colour palette site-wide.
