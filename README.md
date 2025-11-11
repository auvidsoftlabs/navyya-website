# 🌐 Navyya Website

This repository contains the source code for **Navyya’s official website**, built with **React + Vite** and deployed via **GitHub Pages**.

---

## 🧰 Tech Stack

- **Framework:** React (with SWC)
- **Bundler:** Vite
- **Deployment:** GitHub Pages
- **Hosting Domain:** [www.navyya.com](https://www.navyya.com)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/auvidsoftlabs/navyya-website.git
cd navyya-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
Start the local development server:
```bash
npm run dev
```
Then open your browser at:
```
http://localhost:3000
```

The app automatically reloads on code changes.

---

## 🧱 Building for Production

To generate the production build (output inside `/docs` folder):
```bash
npm run build
```

You can test the production build locally with:
```bash
npx vite preview
```
Preview runs typically at:
```
http://localhost:4173
```

---

## 🌍 Deployment to GitHub Pages

### 1. Commit the latest build
After making changes and running `npm run build`, commit and push the generated files:
```bash
git add .
git commit -m "update: latest build"
git push
```

### 2. GitHub Pages Settings
- **Branch:** `main`
- **Folder:** `/docs`
- **Custom domain:** `www.navyya.com`

> The file `docs/CNAME` should contain:
> ```
> www.navyya.com
> ```

### 3. DNS Configuration (GoDaddy)
Add the following **A records**:
| Type | Name | Value |
|------|------|--------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Add **CNAME record**:
| Type | Name | Value |
|------|------|--------|
| CNAME | www | auvidsoftlabs.github.io |

Once DNS propagation completes, GitHub Pages will automatically issue an SSL certificate.

---

## ⚡ Quick Commands

| Action | Command |
|--------|----------|
| Run locally | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npx vite preview` |
| Deploy (manual push) | `git add . && git commit -m "update" && git push` |

---

## 🧩 Project Structure

```
navyya-website/
├── docs/               # Production build output (served by GitHub Pages)
├── src/                # Source files (components, assets, etc.)
├── vite.config.js      # Vite configuration
├── package.json
└── README.md
```

---

## 🛠 Notes

- Keep the `base` in `vite.config.js` as `'/'` for production.
- Ensure `homepage` in `package.json` is set to `"https://www.navyya.com"`.
- The site is deployed automatically whenever you build and push to the `main` branch.

---

### 💡 Troubleshooting
- If you see a **blank page** on deploy, check that:
  - The `base` in `vite.config.js` is `'/'`.
  - The `CNAME` file exists in `docs/`.
  - Browser cache is cleared or use incognito mode.
- If **HTTPS** is not available yet, wait a few hours after DNS propagation.

---

🧡 Maintained by **Auvid Soft Labs**
