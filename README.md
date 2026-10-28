# Syed Muhammad Ziyan Hussain — AI Engineer Portfolio

Personal portfolio website showcasing my work in LLM applications, agentic AI automation, and computer vision.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- Self-hosted fonts: Inter and JetBrains Mono (via Fontsource)
- Oxlint for linting
- Deployed on [Vercel](https://vercel.com/)

No backend, no API keys, and no tracking.

## Features

- Responsive layout for mobile, tablet, and desktop
- Accessible: skip link, keyboard navigation, visible focus styles, semantic HTML
- Respects reduced-motion settings
- All content stored in `src/data/`, so updates do not require touching components

## Project structure

```
src/
├── components/   # UI sections (Hero, About, Skills, Projects, ...)
├── data/         # All site content (profile, skills, projects, experience, ...)
├── App.jsx       # Page layout
├── index.css     # Design tokens (colors, fonts) and base styles
└── main.jsx      # Entry point
public/           # Favicon and 404 page
```

## Run locally

Requirements: [Node.js](https://nodejs.org/) LTS and Git.

```powershell
git clone https://github.com/smziyanhussain/ziyan-portfolio.git
cd ziyan-portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with Oxlint |

## Updating content

Edit the files in `src/data/`:

- `site.js`: name, headline, About text, contact message, links
- `skills.js`: skill groups
- `projects.js`: featured and other projects (`status: 'completed'` or `'in-progress'`)
- `experience.js`, `education.js`, `github.js`

## Deployment

The site deploys automatically to Vercel on every push to `main`.
Vercel settings: Framework preset **Vite**, build command `npm run build`, output directory `dist`.