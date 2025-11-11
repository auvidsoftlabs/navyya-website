# Navyya Website

This project is built using **Vite + React** and deployed to **GitHub Pages** with a custom domain.

---

## 🚀 Run Locally

### 1. Clone the repository
```bash
git clone git@github.com:auvidsoftlabs/navyya-website.git
cd navyya-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The site will be available at **http://localhost:3000**

---

## 🏗️ Build for Production

### 4. Create production build
```bash
npm run build
```

This will generate the optimized build inside the **docs/** folder (configured in `vite.config.js`).

---

## 🌐 Deploy to GitHub Pages

### 5. Deploy the site
```bash
npm run deploy
```

This will:
- Build the latest version
- Push the `docs` folder to the `main` branch (as GitHub Pages source)
- Update your live site automatically

---

## 🌍 Custom Domain Configuration

The site uses **www.navyya.com** as its custom domain.

### DNS Settings (in GoDaddy or your DNS provider)
| Type | Name | Value |
|------|------|--------|
| CNAME | www | auvidsoftlabs.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### GitHub Pages Settings
- **Branch:** `main`
- **Folder:** `/docs`
- **Custom Domain:** `www.navyya.com`
- Enable **Enforce HTTPS** once SSL is issued.

---

## ⚙️ Commands Summary

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server |
| `npm run build` | Build static production files |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 📂 Folder Structure
```
navyya-website/
├── docs/              # Built static site (for GitHub Pages)
├── src/               # React source code
├── public/            # Static assets
├── vite.config.js     # Vite configuration
├── package.json
└── README.md
```

---

## 🧩 Notes
- Always **test locally** using `npm run dev` before deploying.
- If your build doesn’t reflect on the live site, clear browser cache or wait a few minutes for GitHub Pages cache refresh.
- Ensure `CNAME` file exists in `/docs` with content:
  ```
  www.navyya.com
  ```

---

✅ You’re all set! Modify your site, test locally, and deploy updates using:
```bash
npm run deploy
```
