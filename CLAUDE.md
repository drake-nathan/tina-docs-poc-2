# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses Bun as the package manager. Key commands:

- `bun run dev` - Start development server in local mode (no auth required, uses local filesystem)
- `bun run dev:prod` - Start development server in production mode (uses Vercel KV and GitHub auth)
- `bun run build` - Build for production (includes TinaCMS build with partial reindex + Next.js build)
- `bun run start` - Start production server
- `bun run lint` - Run ESLint with max 0 warnings
- `bun run lint:fix` - Run ESLint with auto-fix
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check formatting with Prettier

## Architecture Overview

This is a **TinaCMS design system documentation POC** built with Next.js 14, designed to demonstrate how TinaCMS can power a comprehensive design system documentation site. The application runs on Vercel with content stored in GitHub and data layer backed by Vercel KV (Redis) or optionally MongoDB.

### Key Components

**TinaCMS Configuration** (`tina/`):

- `config.tsx` - Main Tina config with auth providers and collections
- `database.ts` - Database adapter setup (Redis/local)
- `collections/` - Content model definitions:
  - `component.ts` - React component documentation with props, variants, usage examples
  - `design-token.ts` - Design tokens with CSS variables, Figma tokens, usage notes
  - `guideline.ts` - Design guidelines with principles, do's/don'ts, related resources
- `__generated__/` - Auto-generated GraphQL schema, types, and client

**Authentication**:

- **Local Mode**: `TINA_PUBLIC_IS_LOCAL=true` uses LocalAuthProvider (no auth)
- **Production Mode**: Uses AuthJS with username/password stored in Vercel KV
- **Alternative**: Can use Tina Cloud auth with `NEXT_PUBLIC_TINA_CLIENT_ID`

**Data Flow**:

- Content stored as Markdown files in structured directories:
  - `content/components/` - Component documentation
  - `content/design-tokens/` - Design token specifications
  - `content/guidelines/` - Design guidelines and principles
- Database layer uses Vercel KV (Redis) or MongoDB for metadata/auth
- GitHub integration for content versioning via `tinacms-gitprovider-github`
- API routes in `pages/api/tina/[...routes].ts` handle GraphQL operations

**Frontend**:

- Next.js App Router (`app/` directory) with dedicated routes:
  - `/components/[slug]` - Individual component pages
  - `/design-tokens/[slug]` - Individual design token pages
  - `/guidelines/[slug]` - Individual guideline pages
- Server/client component architecture for TinaCMS editing
- TailwindCSS for styling with design system patterns
- Global navigation with breadcrumbs
- TinaCMS admin at `/admin/index.html`

### Environment Modes

The application has two distinct modes controlled by `TINA_PUBLIC_IS_LOCAL`:

1. **Local Development** (`TINA_PUBLIC_IS_LOCAL=true`):
   - No authentication required
   - Content changes saved to local filesystem
   - Uses `createLocalDatabase()`

2. **Production/Hosted** (`TINA_PUBLIC_IS_LOCAL=false`):
   - Requires authentication (AuthJS or Tina Cloud)
   - Content changes committed to GitHub
   - Uses Vercel KV or MongoDB for data layer

### Content Structure

This design system documentation includes three main content types:

- **Components** (`content/components/`): React component documentation with:
  - Component name, description, category
  - Props table with types, default values, descriptions
  - Variants and states
  - Usage examples and code snippets
  - Related components and design tokens

- **Design Tokens** (`content/design-tokens/`): Design system values with:
  - Token name, description, type, category
  - CSS variable name and value
  - Figma token reference
  - Usage examples and related components

- **Guidelines** (`content/guidelines/`): Design principles and best practices with:
  - Guideline name, description, type
  - Do's and don'ts with examples
  - Related components and design tokens
  - External resources and references

### Required Environment Variables

**Development**:

```env
GITHUB_OWNER=***
GITHUB_REPO=***
GITHUB_BRANCH=***
GITHUB_PERSONAL_ACCESS_TOKEN=***
NEXTAUTH_SECRET=***
```

**Production (additional)**:

```env
KV_REST_API_URL=***
KV_REST_API_TOKEN=***
```

**Optional (Tina Cloud auth)**:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=***
```

### Development Workflow

1. Run `bun run dev` for local development (filesystem-based)
2. Run `bun run dev:prod` to test with Vercel KV integration
3. Access TinaCMS admin at `http://localhost:3000/admin/index.html`
4. Content changes in local mode saved directly to `content/` directory
5. Production mode commits changes to GitHub repository

### Key Files to Understand

**TinaCMS Configuration**:

- `tina/config.tsx` - TinaCMS configuration with design system collections
- `tina/database.ts` - Database adapter configuration
- `pages/api/tina/[...routes].ts` - TinaCMS API endpoint
- `tina/collections/component.ts` - React component schema
- `tina/collections/design-token.ts` - Design token schema
- `tina/collections/guideline.ts` - Design guideline schema

**Frontend Components**:

- `app/page.tsx` - Design system homepage with stats and features
- `components/navigation.tsx` - Global navigation with active states
- `components/breadcrumb.tsx` - Breadcrumb navigation for content pages
- `app/layout.tsx` - Root layout with navigation integration

**Content Display**:

- `app/components/[slug]/page-client.tsx` - Component documentation pages
- `app/design-tokens/[slug]/page-client.tsx` - Design token pages
- `app/guidelines/[slug]/page-client.tsx` - Guideline pages

**Authentication**:

- `content/users/index.json` - Default auth credentials for development
