# Practical 3: Router Types (Unit 4)

## Aim
Create a React application demonstrating the working of **HashRouter**, **MemoryRouter**, and **StaticRouter**, and explain where each type of router can be used.

## GitHub Repository
`https://github.com/mayuri2907/u4-prac3.git`

## Router Types Explained

1. **HashRouter**:
   - Uses the URL hash (`#`) to keep UI in sync with the URL.
   - The portion after `#` is client-side only and never sent in HTTP requests.
   - *Use Case*: Static file hosting like **GitHub Pages** or Electron desktop apps where server URL rewrite rules cannot be configured.

2. **MemoryRouter**:
   - Maintains its routing history internally in a memory array without touching the browser address bar.
   - *Use Case*: Automated tests (Jest/Vitest/React Testing Library), **React Native** apps, and embeddable third-party widgets.

3. **StaticRouter**:
   - Renders a single location passed explicitly (e.g. `location={req.url}`). It does not listen to browser navigation.
   - *Use Case*: **Server-Side Rendering (SSR)** on Node.js / Next.js to generate static HTML for SEO and initial page loads.

## How to Run Locally
```bash
npm install
npm run dev
```

## Push to GitHub
```bash
git remote add origin https://github.com/mayuri2907/u4-prac3.git
git branch -M main
git push -u origin main
```
