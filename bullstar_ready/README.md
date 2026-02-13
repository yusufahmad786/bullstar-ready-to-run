# Bullstar Realty Website (Next.js + Tailwind)

## Requirements
- Node.js (you already have it)
- Windows users: if `npm` fails in PowerShell due to Execution Policy, either:
  - Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
  - OR use **Command Prompt (cmd)** instead of PowerShell.

## Install
```bash
npm install
```

## Run (dev)
```bash
npm run dev
```
Open: http://localhost:3000

## Assets
These files are expected (already included in `/public` in this package):
- `/public/images/logo.jpg`
- `/public/images/hero.jpg`
- `/public/images/founder.jpg`
- `/public/images/projects/gygy-fiveo.png`
- `/public/images/projects/dholera-global.jpg`
- `/public/images/projects/dholera-uae-india.jpg`
- `/public/brochures/expressway-retreat.pdf`

If you replace images, keep the same filenames or update `lib/projects.ts`.
