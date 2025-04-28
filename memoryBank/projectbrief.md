# Project Brief

This project, internally referred to as `floating`, aims to bootstrap a Next.js component library.

## Core Requirements & Goals

1.  **Foundation:** Establish a Next.js application using TypeScript, Tailwind CSS, ESLint, App Router, and `src/` directory structure.
2.  **UI Library:** Integrate and configure `shadcn/ui` as the component library base.
3.  **Core Components:**
    *   Develop a reusable `PageLayout` component with a fixed header and content area.
    *   Develop a reusable `FloatingLayer` component designed as a right-aligned, fixed-position overlay with its own header (Title, Close button, Menu button) and a toggleable options panel.
4.  **Demonstration:** Create an `ExamplePage` view showcasing the integration of `PageLayout` and `FloatingLayer`.
5.  **Developer Experience:**
    *   Set up Storybook for component visualization and testing.
    *   Provide basic MDX documentation for setup, components, and usage.
    *   Configure `package.json` scripts for development, building, Storybook, and documentation preview.

## Initial Scope

The initial focus is on scaffolding the project structure and creating wireframe-level implementations of the `PageLayout` and `FloatingLayer` components with minimal styling, primarily using `shadcn/ui` defaults. 