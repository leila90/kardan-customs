# Kardan Customs

Kardan Customs is a bilingual Persian/English website built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and next-intl.

> This project follows the repository guidance in `AGENTS.md`. Next.js APIs and conventions should be checked against the installed version before making framework-level changes.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production server after a successful build:

```bash
npm run start
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl for `fa` / `en` localization
- next-themes for theme support
- Framer Motion and GSAP for animation
- Lucide React for icons

## Project structure

```text
src/
├── app/                 # Next.js App Router and localized routes
├── components/          # Shared UI and page sections
├── i18n/                # Routing and request configuration
├── lib/                 # Site configuration, fonts, blog data, utilities
└── styles/              # Theme and typography styles

messages/                # Persian and English translations
public/                  # Static assets
```

## Internationalization

The application currently supports:

- `fa` — Persian (default)
- `en` — English

Localized pages live under `src/app/[locale]` and translations are stored in `messages/`.

## Environment variables

Local environment files are intentionally ignored by Git. If the project requires environment variables, create a local `.env.local` file and keep secrets out of the repository.

## Repository guidance

Before changing framework-specific code, read `AGENTS.md` and verify the relevant APIs against the installed Next.js version. Keep changes focused, run the available quality checks, and avoid committing local IDE metadata or secrets.
