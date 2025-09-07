# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Turborepo monorepo using pnpm as the package manager. Commands should be run from the root directory.

### Core Commands

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Lint all apps and packages
- `turbo check-types` - TypeScript type checking for all packages
- `pnpm format` - Format code with Prettier

### App-Specific Commands

Run these from the root using Turbo's filtering:

- `pnpm --filter frontend dev` - Start frontend dev server only
- `pnpm --filter studio dev` - Start Sanity Studio dev server only
- `pnpm --filter frontend build` - Build frontend only
- `pnpm --filter studio build` - Build studio only

### Quality Checks

- Linting is handled by ESLint with shared configs in `packages/eslint-config/`
- TypeScript checking is available via `turbo check-types` (defined in turbo.json)
- Husky pre-commit hooks run lint-staged and commitlint
- Conventional commits are enforced via commitlint

## Architecture Overview

### Monorepo Structure

- `apps/frontend/` - Next.js 15 frontend application
- `apps/studio/` - Sanity Studio CMS
- `packages/eslint-config/` - Shared ESLint configurations
- `packages/typescript-config/` - Shared TypeScript configurations
- `packages/ui/` - Shared React component library (currently minimal)
- `packages/sanity-config/` - Shared Sanity configurations and utilities

### Frontend App (Next.js)

- **Framework**: Next.js 15 with App Router and Turbopack for dev
- **Styling**: Tailwind CSS v4 with custom design system
- **CMS Integration**: Sanity CMS with next-sanity and SanityLive for real-time preview updates
- **Components**: Modular component architecture with component builders
- **Email**: Resend for transactional emails via `/api/send` route
- **Analytics**: Google Analytics and Vercel Speed Insights

#### Key Frontend Patterns

- **PageBuilder**: Content rendered via `PageBuilder.tsx` in `/src/components/builders/` which maps Sanity block types to React components
- **Component Structure**: Each component has index.ts, component file, and query.ts for Sanity data fetching
- **Sanity Integration**: Uses typed queries with sanity-typegen, SanityLive for real-time preview updates
- **Live Preview**: SanityLive integration provides real-time content updates without page refresh
- **Fonts**: Custom font loading with multiple typefaces (Cinzel, Cormorant, Belle Aurore, Inter)

### Studio App (Sanity CMS)

- **Multi-workspace**: Production and development datasets configured
- **Custom Schema**: Structured content types for pages, testimonials, settings, blog
- **Plugins**: Includes Vision tool, Assist, Vercel Deploy, and custom singleton plugin
- **Structure**: Custom studio structure with grouped content types

#### Sanity Schema Development Best Practices

- **Schema Types**: Always use `defineType`, `defineField`, and `defineArrayMember` helper functions
- **File Organization**: Write schema types to their own files with named exports matching filename
- **Content Modeling**: Model what things are, not what they look like (e.g., `status` not `color`)
- **Field Configuration**:
  - Only use `name` attribute unless `title` needs to differ from title-case name
  - String fields with <5 options must use `options.layout: "radio"`
  - Image fields must include `options.hotspot: true`
  - Include brief `description` values for non-obvious fields
  - Use `rule.warning()` for length recommendations
  - Avoid `boolean` fields, use `string` with `options.list` instead
  - Never write single `reference` fields, always use arrays
- **Schema Decoration**: Every document/object should have:
  - `icon` property from `@sanity/icons`
  - Customized `preview` with rich contextual details
  - `groups` for schemas with many fields
  - `fieldsets` with `options: {columns: 2}` for related fields

### Environment Variables

Required environment variables (from turbo.json globalEnv):

- `RESEND_API_KEY` - For email functionality
- `SANITY_API_READ_TOKEN` - For Sanity API access
- Frontend also requires: `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_STUDIO_URL`

### Content Types & Data Flow

- Content is managed in Sanity Studio with structured schema types
- Frontend fetches data using typed Sanity queries with proper error handling
- Real-time updates via SanityLive integration
- PageBuilder pattern allows flexible content composition

#### GROQ Query Best Practices

- Use SCREAMING_SNAKE_CASE for variable names
- Write queries to their own variables, never inline as function parameters
- Always import and use `defineQuery` function from `groq` or `next-sanity`
- Write every required attribute explicitly in projections
- Put each filter segment and attribute on its own line
- Always use parameters for variables, never string interpolation
- Example format:
  ```ts
  export const POST_QUERY = defineQuery(`*[
    _type == "post"
    && slug.current == $slug
  ][0]{
    _id,
    title,
    image,
    author->{
      _id,
      name
    }
  }`);
  ```

#### TypeScript Generation

- **Schema Changes**: Run `npx sanity@latest schema extract` after schema modifications
- **Type Generation**: Run `npx sanity@latest typegen generate` after GROQ query changes
- **Configuration**: Uses `sanity-typegen.json` for type generation config
- **Monorepo Setup**: Schema extracted to frontend folder, types generated to `sanity/types.ts`

#### Content Creation & Import

- Write content as `.ndjson` files at project root
- Import using `npx sanity dataset import <filename.ndjson>`
- Never include `.` in `_id` fields unless document needs to be private
- Use placeholder images: `{"_type":"image","_sanityAsset":"image@https://picsum.photos/seed/[DOC_ID]/1920/1080"}`

## Testing

No specific test framework is configured. Check with the user before implementing tests.
