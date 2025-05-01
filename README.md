# Finx Code - Next.js Project

Welcome to Finx Code, a modern web application built with **Next.js**, **TypeScript**, **shadcn/ui**, and **Tailwind CSS**. This project features a responsive banner slider component and is deployed live at [https://finx-code.vercel.app/](https://finx-code.vercel.app/).

This README provides detailed instructions to set up, run, and deploy the project locally or to Vercel. Whether you're a developer contributing to the project or just exploring, this guide will help you get started.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Building the Project](#building-the-project)
- [Testing](#testing)
- [Deploying to Vercel](#deploying-to-vercel)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Banner Slider**: A dynamic, touch-friendly slider showcasing images with navigation controls and auto-slide functionality.
- **Mobile-First Design**: Optimized for mobile, tablet, and desktop devices, with only the main image shown on smaller screens.
- **Modern UI**: Built with `shadcn/ui` components and styled with Tailwind CSS for a sleek, customizable interface.
- **Type Safety**: Leverages TypeScript for robust type checking and improved developer experience.
- **SEO-Friendly**: Utilizes Next.js for server-side rendering and static site generation to enhance performance and SEO.

---

## Technologies Used

- **Next.js**: A React framework for server-side rendering, static site generation, and API routes (version 14.2.0 or later).
- **TypeScript**: Adds static types to JavaScript for better code reliability and maintainability.
- **shadcn/ui**: A collection of accessible, customizable UI components built with Radix UI and Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapid, responsive styling.
- **Vercel**: Hosting platform for deployment with automatic scaling and Git integration.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 18 or later. Verify with:
  ```bash
  node -v
  ```
  Download from [nodejs.org](https://nodejs.org/) if needed.

- **npm or yarn**: Package manager for installing dependencies. Verify with:
  ```bash
  npm -v
  ```
  Alternatively, install `yarn`:
  ```bash
  npm install -g yarn
  ```

- **Git**: For cloning the repository. Verify with:
  ```bash
  git --version
  ```
  Install from [git-scm.com](https://git-scm.com/) if needed.

- **Vercel Account**: Required for deployment. Sign up at [vercel.com](https://vercel.com/) (free tier available).

- **Vercel CLI (optional)**: For CLI-based deployment. Install globally:
  ```bash
  npm install -g vercel
  ```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adilrion/j-1.git
   cd finx-code
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install --legacy-peer-deps
   ```
   Or using yarn:
   ```bash
   yarn install
   ```


---

## Running the Project Locally

1. **Start the Development Server**:
   Using npm:
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```
   This starts the Next.js development server at [http://localhost:3000](http://localhost:3000).

2. **Hot Reloading**:
   Next.js supports hot reloading. Edit files (e.g., `components/BannerSlider.tsx`) and changes will reflect instantly in the browser.

---

## Building the Project

1. **Create a Production-Ready Build**:
   Using npm:
   ```bash
   npm run build
   ```
   Or with yarn:
   ```bash
   yarn build
   ```

2. **Test the Production Build Locally**:
   Using npm:
   ```bash
   npm run start
   ```
   Or with yarn:
   ```bash
   yarn start
   ```

3. **Verify Build Output**:
   - Ensure no errors appear in the terminal.
   - Verify image paths (e.g., `/public/g1.jpg`) are correct, as Next.js serves public folder files at the root.

---

## Testing

1. **Manual Testing**:
   - Test the banner slider on various devices using browser dev tools.
   - Verify navigation (next/prev buttons, dot indicators) and auto-slide functionality.
   - Confirm responsive behavior.

2. **Linting**:
   Run the linter:
   ```bash
   npm run lint
   ```
   Fix any issues reported by ESLint or TypeScript.

3. **Unit Testing (Optional)**:
   Install testing dependencies:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```
   Run tests:
   ```bash
   npm test
   ```

---

## Deploying to Vercel

### Method 1: Deploy via Git Integration (Recommended)

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```

2. Create a new Vercel project and link it to your GitHub repository.

3. Configure settings:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`

4. Deploy and get a live URL.

### Method 2: Deploy via Vercel CLI

1. Install and log in:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

---

## Project Structure

```plaintext
finx-code/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles
│   └── lib/               # Utilities or shadcn/ui setup
├── .env.local             # Environment variables
├── .gitignore             # Git ignore file
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request on GitHub.

---
