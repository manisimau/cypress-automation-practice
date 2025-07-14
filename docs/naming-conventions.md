# Naming Conventions for Pages and Components

This document outlines the naming conventions to be followed for all pages and components in this application. Adhering to these conventions ensures consistency, readability, and maintainability across the codebase.

## General Principles
- Use **PascalCase** for all component and page names.
- Use **kebab-case** for file and folder names.
- Names should be descriptive and concise.
- Avoid abbreviations unless they are well-known and unambiguous.

## Pages
- Page components should be placed in the `pages/` directory (or equivalent).
- File names for pages should use **kebab-case** (e.g., `user-profile.tsx`).
- The default export of a page file should use **PascalCase** matching the page's purpose (e.g., `UserProfile`).
- If a page has sub-pages, use nested folders (e.g., `settings/profile.tsx`).

## Components
- Reusable UI components should be placed in the `components/` directory (or equivalent).
- Component file names should use **kebab-case** (e.g., `button-primary.tsx`).
- The default export of a component file should use **PascalCase** (e.g., `ButtonPrimary`).
- For compound components, use a folder with **kebab-case** and an `index.tsx` file inside (e.g., `modal-dialog/index.tsx` exporting `ModalDialog`).

## Examples

### Pages
- File: `pages/user-profile.tsx`
  - Export: `UserProfile`
- File: `pages/settings/profile.tsx`
  - Export: `Profile`

### Components
- File: `components/button-primary.tsx`
  - Export: `ButtonPrimary`
- Folder: `components/modal-dialog/index.tsx`
  - Export: `ModalDialog`

## Do's and Don'ts

| Do                        | Don't                |
|--------------------------|----------------------|
| `user-profile.tsx`       | `UserProfile.tsx`    |
| `ButtonPrimary`          | `buttonPrimary`      |
| `modal-dialog/index.tsx` | `ModalDialog/index.tsx` |

## Rationale
- **PascalCase** for exports aligns with JavaScript/TypeScript class and component conventions.
- **kebab-case** for files and folders improves readability and avoids case-sensitivity issues on different operating systems.

---

Please follow these conventions for all new pages and components. For legacy code, consider refactoring when making significant changes. 