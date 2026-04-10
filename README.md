# 🚀 Abhi Jain — Portfolio

Modern, animated **3D portfolio** built with **React**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Motion** — showcasing projects, skills, and a working contact form.

## ✨ Features

- **3D hero scene** using React Three Fiber + Drei
- **Smooth UI animations** using Motion (`motion/react`)
- **Tech stack orbit** + skills list
- **Projects section** with hover preview + “Read more” modal + external links
- **Working contact form** via **Web3Forms** (free tier, no paid domain allowlist)

## 🛠 Tech Stack

| Tech | Use |
|---|---|
| React + Vite | App + build tooling |
| Tailwind CSS | Styling |
| Three.js + @react-three/fiber + @react-three/drei | 3D rendering |
| Motion (`motion/react`) | Animations |
| Web3Forms | Contact form email delivery |

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images, textures, models
│   ├── models/             # 3D Astronaut model
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   ├── constants/          # Reusable datas
│   ├── sections/           # Portfolio sections (Hero, About, etc.)
│   ├── App.jsx             # Main app file
│   ├── index.css           # Tailwind css
│   └── main.jsx            # Entry point
└── vite.config.js
```

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📬 Contact form (Web3Forms)

1. Create an access key at `https://web3forms.com/`
2. Copy `.env.example` → `.env`
3. Set:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

4. Restart `npm run dev`

More details: see `contact-form-setup.txt`.

## ☁️ Deploy to Vercel

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** add `VITE_WEB3FORMS_ACCESS_KEY`, then redeploy
