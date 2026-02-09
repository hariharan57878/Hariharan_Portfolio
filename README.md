# Hariharan P - AI-Focused Portfolio

A modern, high-performance personal portfolio website built with **Vite**, **TypeScript**, and **Vanilla CSS**. This portfolio features a premium "Editorial" design theme characterized by warm concrete tones, deep charcoal contrasts, and subtle ambient animations, reflecting a professional and AI-forward aesthetic.

![Portfolio Preview](public/IMG_STYLE.jpg)
*(Note: Replace this placeholder with a screenshot of your actual site if desired)*

## 🚀 Features

*   **Modern "Editorial" Theme**: A sophisticated color palette using Warm Concrete (`#fafaf9`), Stone (`#f5f5f4`), and Deep Charcoal (`#1c1917`).
*   **Performance First**: Built with Vite for instant server start and lightning-fast HMR (Hot Module Replacement).
*   **Fully Responsive**: Optimized for all devices, from large desktop monitors to mobile screens.
*   **Interactive Elements**:
    *   Smooth scroll-reveal animations.
    *   Ambient floating background blobs for visual depth.
    *   Hover effects on cards and buttons.
*   **Component-Based Architecture**: Modular TypeScript components for easy maintenance and scalability.

## 🛠️ Technology Stack

*   **Framework**: [Vite](https://vitejs.dev/) (Vanilla TypeScript template)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
*   **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 📂 Project Structure

```bash
Hariharan_Portfolio/
├── public/              # Static assets (images, icons)
│   └── IMG_STYLE.jpg    # Profile photo
├── src/
│   ├── components/      # UI Sections (Hero, About, Projects, etc.)
│   ├── blob-styles.css  # CSS for abstract background shapes
│   ├── style.css        # Global styles and theme variables
│   ├── main.ts          # Application entry point
│   └── vite-env.d.ts    # Type definitions
├── index.html           # Main HTML entry
├── package.json         # Project metadata and dependencies
└── tsconfig.json        # TypeScript configuration
```

## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js** (v14 or higher) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/hariharan57878/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Production Build

To build the project for deployment:

```bash
npm run build
```

The output files will be in the `dist/` directory. You can preview the build locally with:

```bash
npm run preview
```

## 🎨 Customization

### Profile Photo
To update your profile picture, simply replace the file `public/IMG_STYLE.jpg` with your own image. Ensure the filename matches (`IMG_STYLE.jpg`), or update the reference in `src/components/Hero.ts`.

### Content
Edit the files in `src/components/` to update text, projects, skills, and experience data. Each section is a separate TypeScript function returning an HTML string.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Designed & Built by **Hariharan P**.
