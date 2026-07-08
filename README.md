# Satish Dynamics — Marketing Website

A React + Vite marketing site for a Dynamics 365 / Dataverse / Power
Platform / Azure / AI transformation consultancy.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build at http://localhost:4173
```

> Open the site through the local Vite server rather than by double-clicking the generated dist file. Browsers block module scripts and stylesheets from file:// URLs because of CORS and origin restrictions.

## Project structure

```
src/
  assets/
    icons/tech/        Tech-stack icons (sourced from dashboardicons.com,
                        with a small number of hand-built icons for
                        Microsoft products not yet in that collection)
  components/
    layout/             Navbar, Footer — used once, app-wide
    common/             Button, SectionHeading, Reveal, TechMarquee,
                        CapabilityIcon — reusable across sections
  sections/             One folder per homepage section, each with its
                        own .jsx and .module.css (Hero, Capabilities,
                        Transformation, ProcessFlow, Roadmap, AI,
                        Architecture, CTA)
  data/                 Static content, separated from presentation
                        (navigation, capabilities, techStack, roadmap,
                        aiPillars, processFlow)
  hooks/                useReveal — scroll-triggered reveal animation
  utils/                cn — small classnames helper
  styles/                globals.css (reset + base rules) and
                        variables.css (design tokens)
  App.jsx               Composes the page from sections
  main.jsx               React entry point
```

## Notes

- Theme: light, single typeface (Poppins) loaded via Google Fonts in
  `index.html`.
- Static copy is always selectable; `cursor: pointer` and focus styles
  are reserved for genuinely interactive elements (see the rules at the
  top of `src/styles/globals.css`).
- Motion respects `prefers-reduced-motion`.
- No stats, testimonials or project-count content, per the brief.
