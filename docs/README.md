# Floating Component Library - README

This repository contains the `floating` component library, built with Next.js, TypeScript, and shadcn/ui.

## Project Setup

1.  **Prerequisites:** Node.js (v18+ recommended), npm (or yarn/pnpm).
2.  **Clone:** `git clone <repository-url>`
3.  **Navigate:** `cd floating/app` (Note: The Next.js app resides within the `app/` subdirectory).
4.  **Install Dependencies:** `npm install`
5.  **Run Development Server:** `npm run dev` (App will be available at `http://localhost:3000`)

## Folder Structure

```
floating/
├── .cursor/         # Cursor AI configuration
├── memoryBank/      # Project documentation (Cline's Memory Bank)
│   ├── projectbrief.md
│   ├── ... (other core files)
├── app/             # Next.js application
│   ├── public/
│   ├── src/
│   │   ├── app/         # Next.js App Router pages
│   │   ├── components/  # Reusable UI components
│   │   │   ├── PageLayout/
│   │   │   │   └── PageLayout.tsx
│   │   │   ├── FloatingLayer/
│   │   │   │   ├── FloatingLayer.tsx
│   │   │   │   └── FloatingLayer.stories.tsx (TODO)
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── lib/         # Utility functions (e.g., shadcn utils)
│   │   └── views/       # Page-level views combining components
│   │       └── ExamplePage.tsx
│   ├── .env.local
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── components.json # shadcn/ui config
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── docs/            # Project Documentation (MDX)
│   ├── README.md      # This file
│   └── components/
│       ├── PageLayout.mdx
│       ├── FloatingLayer.mdx
│       └── ExamplePage.mdx
└── ... (other config files)
```

## Available Scripts (run from `app/` directory)

-   `npm run dev`: Starts the Next.js development server.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts the production server (requires `build` first).
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run storybook`: (TODO) Runs Storybook.
-   `npm run docs:dev`: (TODO) Runs the MDX documentation preview. 