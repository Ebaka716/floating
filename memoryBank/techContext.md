# Tech Context

## Technologies Used

-   **Framework:** Next.js (App Router)
-   **Language:** TypeScript
-   **UI Components:** shadcn/ui
-   **Styling:** Tailwind CSS
-   **Linting:** ESLint
-   **Component Preview:** Storybook (to be installed)
-   **Documentation:** MDX (setup TBD)

## Development Setup

-   Standard Next.js project structure (`src/` directory, `@/*` import alias).
-   `shadcn/ui` initialized with default settings (Style: Default, Base Color: Slate).
-   Requires Node.js and npm/yarn/pnpm.

## Technical Constraints

-   Must use React Server Components where appropriate (default for Next.js App Router).
-   Rely heavily on `shadcn/ui` components for building blocks.

## Dependencies

-   `next`, `react`, `react-dom`, `typescript`
-   `tailwindcss`, `postcss`, `autoprefixer`
-   `eslint`, `eslint-config-next`
-   `shadcn-ui`, `lucide-react` (icons)
-   `@storybook/*` (to be added)
-   MDX-related packages (to be added)

## Tool Usage Patterns

-   `npm run dev` / `yarn dev`: Start Next.js development server.
-   `npm run build` / `yarn build`: Build for production.
-   `npm run storybook` / `yarn storybook`: Run Storybook (once configured).
-   `npm run docs:dev` / `yarn docs:dev`: Run documentation server (once configured).
-   `npx shadcn-ui@latest add [component]` : Add new shadcn/ui components. 