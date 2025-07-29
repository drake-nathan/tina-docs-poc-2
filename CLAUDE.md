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

This is a **TinaCMS self-hosted demo** built with Next.js 14, designed to run entirely on Vercel with content stored in GitHub and data layer backed by Vercel KV (Redis) or optionally MongoDB.

### Key Components

**TinaCMS Configuration** (`tina/`):
- `config.tsx` - Main Tina config with auth providers and collections
- `database.ts` - Database adapter setup (Redis/local)
- `collections/page.ts` - Content model definitions
- `__generated__/` - Auto-generated GraphQL schema, types, and client

**Authentication**:
- **Local Mode**: `TINA_PUBLIC_IS_LOCAL=true` uses LocalAuthProvider (no auth)
- **Production Mode**: Uses AuthJS with username/password stored in Vercel KV
- **Alternative**: Can use Tina Cloud auth with `NEXT_PUBLIC_TINA_CLIENT_ID`

**Data Flow**:
- Content stored as Markdown files in `content/pages/`
- Database layer uses Vercel KV (Redis) or MongoDB for metadata/auth
- GitHub integration for content versioning via `tinacms-gitprovider-github`
- API routes in `pages/api/tina/[...routes].ts` handle GraphQL operations

**Frontend**:
- Next.js App Router (`app/` directory)
- TailwindCSS for styling
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

- **Pages**: Markdown files in `content/pages/` with frontmatter
- **Schema**: Defined in `tina/collections/page.ts` with fields:
  - `header` (string)
  - `logo` (object with url/alt)
  - `links` (array of objects with header/description/url)

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

- `tina/config.tsx` - TinaCMS configuration and auth setup
- `tina/database.ts` - Database adapter configuration
- `pages/api/tina/[...routes].ts` - TinaCMS API endpoint
- `tina/collections/page.ts` - Content schema definitions
- `content/users/index.json` - Default auth credentials for development