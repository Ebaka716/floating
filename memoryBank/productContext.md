# Product Context

## Why?

This project initiates the development of a reusable component library, likely intended for future projects or as a standalone package. The initial components (`PageLayout`, `FloatingLayer`) suggest a need for common UI structures found in web applications, particularly those requiring persistent navigation and contextual overlays.

## Problem Solved

Provides foundational UI elements (layout, floating panel) adhering to modern web standards (Next.js, shadcn/ui) to accelerate future development by offering pre-built, documented, and testable components.

## How it Should Work

-   The `PageLayout` should provide a consistent frame with a header for navigation/branding and a main content area.
-   The `FloatingLayer` should act as an overlay, anchored to the right side of the viewport. It needs:
    -   A clear header section.
    -   A close mechanism (× button) to dismiss the layer.
    -   A menu mechanism (≡ button) to reveal additional options/settings specific to that layer within a collapsible panel.
-   Styling should be minimal ("wireframe-y") initially, leveraging `shadcn/ui` defaults.

## User Experience Goals

-   **Developers:** Provide clear documentation (MDX) and visualization tools (Storybook) for easy adoption and understanding of the components.
-   **End-Users (of apps using these components):** Offer intuitive interactions (clear close/menu buttons, smooth panel toggle) for the `FloatingLayer`. 