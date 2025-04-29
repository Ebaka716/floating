# Active Context

## Current Work Focus

Finalizing initial deployment and documentation after resolving build/deployment issues.

## Recent Changes Summary

*   ... (previous component refinements: layout, state, styling, width, padding)
*   **Troubleshooting Vercel Deployment:**
    *   Initial deployments failed, getting stuck or resulting in 404s/default pages.
    *   Checked/Corrected Vercel Settings: Set Framework Preset to `Next.js`, set Root Directory to `app`.
    *   Identified and fixed local build errors caused by leftover Storybook files (`src/stories/` removed).
    *   Identified Vercel build error caused by leftover `vitest.config.ts`.
    *   Added `.vercelignore` file to root directory to explicitly ignore `vitest.config.ts` and other potential leftovers.
*   **Code State:** All intended component code and configuration fixes have been pushed to GitHub (`main` branch).

## Next Steps

1.  **Verify Vercel Deployment:** Confirm that the latest push (with `.vercelignore`) deploys successfully on Vercel and shows the correct application.
2.  **Update Documentation:** Review `docs/README.md`, `docs/components/PageLayout.mdx`, and `docs/components/FloatingLayer.mdx` to ensure they fully match the final state of the components and Vercel deployment setup.
3.  Address any remaining minor TODOs or refinements for the wireframe demo.

## Active Decisions & Considerations

*   Repository structure uses `floating/` as the Git root, with the Next.js project located in `app/`.
*   Vercel configured with Framework Preset=`Next.js`, Root Directory=`app`.
*   `.vercelignore` is used to prevent specific files/folders from interfering with the Vercel build.
*   Skipping Storybook setup.
*   Dragging and resizing features are postponed.
*   `FloatingLayer` uses fixed positioning and slide-in options panel.
*   `FloatingLayer` width is 450px.

## Important Patterns & Preferences

*   ... (previous patterns)
*   Ensure Vercel build settings (Framework Preset, Root Directory) match the project structure.
*   Use `.vercelignore` to explicitly exclude files that might cause deployment issues.

## Learnings & Project Insights

*   ... (previous learnings)
*   Vercel deployment issues with nested projects often stem from incorrect Root Directory or Framework Preset settings.
*   Leftover files from previous installations (like Storybook examples or config files) can cause build failures even if not actively used.
*   `.vercelignore` provides an explicit way to control files included in the Vercel deployment. 