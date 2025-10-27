# Overview

Crossafrique Hydrogen is a Next.js-based web platform dedicated to developing sustainable hydrogen and integrated clean energy solutions across the African continent. The project showcases the company's mission to build scalable, bankable energy hubs combining hydrogen, solar, battery storage, and smart control systems. The website features project portfolios, blog publications, solution offerings, and contact capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework

**Problem**: Need for a modern, performant web application with SEO capabilities and server-side rendering.

**Solution**: Next.js 15.2.3 with App Router architecture, leveraging React 19 for UI components.

**Rationale**: Next.js provides excellent SEO through server-side rendering, automatic code splitting, and optimal performance. The App Router enables modern routing patterns with layouts and nested routes.

**Alternatives Considered**: Traditional React SPA would lack SEO benefits; other meta-frameworks like Remix or SvelteKit weren't chosen due to Next.js's ecosystem maturity.

**Pros**: 
- Excellent SEO and performance
- Rich ecosystem and community support
- Built-in image optimization
- TypeScript support

**Cons**: 
- Steeper learning curve for App Router
- Vendor lock-in to Vercel ecosystem (though deployment-agnostic)

## Styling and UI Components

**Problem**: Need for consistent, accessible UI components with a professional design system.

**Solution**: Tailwind CSS 4.0 for utility-first styling combined with shadcn/ui component library (New York style variant).

**Rationale**: Tailwind provides rapid development with utility classes while maintaining design consistency. shadcn/ui offers pre-built, accessible components that can be customized and are not npm dependencies.

**Pros**:
- Rapid UI development
- Highly customizable components
- Built-in dark mode support
- Accessible by default (Radix UI primitives)

**Cons**:
- Larger HTML output due to utility classes
- Learning curve for utility-first approach

## Animation System

**Problem**: Need for smooth, engaging animations to enhance user experience.

**Solution**: Framer Motion (motion/react) for declarative animations and transitions.

**Rationale**: Provides powerful animation capabilities with simple API, particularly useful for scroll-triggered animations and page transitions.

**Pros**:
- Declarative syntax
- Excellent performance
- Rich animation features

**Cons**:
- Adds bundle size
- Can be complex for advanced animations

## Code Quality and Formatting

**Problem**: Need to maintain consistent code style and catch errors early.

**Solution**: Biome.js for linting and formatting instead of ESLint/Prettier.

**Rationale**: Biome provides faster performance and simpler configuration than traditional ESLint/Prettier setup.

**Pros**:
- Single tool for linting and formatting
- Faster than ESLint/Prettier
- Minimal configuration

**Cons**:
- Less mature ecosystem than ESLint
- Fewer plugin options

## Form Handling and Validation

**Problem**: Need robust form handling with client-side validation for contact forms.

**Solution**: React Hook Form with Zod schema validation and @hookform/resolvers for integration.

**Rationale**: React Hook Form provides performant, uncontrolled form inputs with minimal re-renders. Zod offers TypeScript-first schema validation.

**Pros**:
- Excellent performance
- Type-safe validation
- Small bundle size
- Great DX with TypeScript

**Cons**:
- Additional learning curve for Zod schemas

## Content Management Pattern

**Problem**: Need to display blog content without managing a database.

**Solution**: Server Actions fetching from WordPress REST API with client-side rendering for dynamic content.

**Rationale**: Leverages existing WordPress infrastructure for content management while keeping the Next.js frontend decoupled. Server Actions provide a clean API for data fetching.

**Pros**:
- Separation of concerns
- Non-technical users can manage content
- No database needed in Next.js app

**Cons**:
- Dependency on external WordPress instance
- Additional network latency

## Static Assets and Images

**Problem**: Need optimized image delivery with proper types.

**Solution**: Next.js Image component with custom TypeScript declarations for image imports (.png, .jpg, .svg).

**Rationale**: Next.js Image provides automatic optimization, lazy loading, and proper sizing without external image CDN.

**Pros**:
- Automatic optimization
- Built-in lazy loading
- Responsive images

**Cons**:
- Larger build times for many images
- Requires proper sizing configuration

## Development and Deployment Configuration

**Problem**: Need consistent development environment and deployment settings.

**Solution**: Custom Next.js configuration with Replit-specific allowed origins and ESLint disabled during builds.

**Rationale**: Allows development on Replit platform while avoiding build failures from linting issues (relying on Biome instead).

**Pros**:
- Platform flexibility
- Faster builds (no ESLint during build)

**Cons**:
- Less safety net during deployment
- Platform-specific configuration

# External Dependencies

## WordPress REST API

- **Purpose**: Content management system for blog posts and publications
- **Integration**: Server-side fetching via `/wp-json/wp/v2/` endpoints
- **Base URL**: Configurable via `WORDPRESS_API_BASE_URL` environment variable (default: https://mx5.88c.myftpupload.com/wp-json/wp/v2/)
- **Data**: Posts, authors, categories, featured media
- **Caching**: 1-hour cache time for API responses

## Email Service (Nodemailer)

- **Purpose**: Contact form email delivery
- **Integration**: API route at `/api/contact` using nodemailer SMTP transport
- **Configuration**: Requires `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` environment variables
- **Default**: Gmail SMTP (smtp.gmail.com:587)

## Package Manager

- **Tool**: pnpm 10.x
- **Rationale**: Faster installs and better disk space efficiency than npm
- **Note**: Lockfile format indicates pnpm@9.x or pnpm@10.x compatibility

## Deployment Platform

- **Primary**: Replit (current hosting)
- **Alternative**: Vercel or any Node.js hosting platform
- **Configuration**: Port 5000, bind to 0.0.0.0 for Replit compatibility
- **Dev Server**: `pnpm run dev` (binds to port 5000)
- **Production**: `pnpm run build && pnpm run start`
- **Deployment Type**: Autoscale (stateless web application)

## Third-Party UI Libraries

- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **Lucide React**: Icon library (lucide-react)
- **Class Variance Authority**: Component variant styling helper

## HTML Processing

- **html-react-parser**: Converts WordPress HTML content to React elements
- **sanitize-html**: Sanitizes WordPress HTML to prevent XSS vulnerabilities