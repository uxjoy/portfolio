# AI Copilot Instructions for Portfolio Codebase

This is a **Next.js 15 portfolio website** for a product designer. Focus on delivering pixel-perfect UI with smooth animations and seamless data integration.

## Architecture Overview

### Core Stack
- **Framework**: Next.js 15 with App Router (React 18.2)
- **Styling**: Tailwind CSS 3.3 with custom theme (`tailwind.config.ts`)
- **Dark Mode**: `next-themes` (selector-based, default dark mode)
- **Animations**: `motion` (Framer Motion alternative)
- **Analytics**: Vercel Analytics + Microsoft Clarity

### Project Structure
```
src/app/              # Next.js App Router pages
├── page.tsx          # Homepage (composes all sections)
├── layout.tsx        # Root layout with metadata, fonts, Analytics
├── globals.css       # Global Tailwind layers and custom utilities
├── providers.tsx     # ThemeProvider wrapper
└── case-studies/     # Dynamic case study pages with [caseStudyId]

components/           # Reusable UI components
├── [name]*.tsx       # Section components (HeroSection, SelectedWork, etc.)
├── navbar/           # Navigation components (Header, BottomNav)
├── svg/              # Icon SVG components (Logo, Figma, etc.)
└── [section]/        # Feature-specific subdirectories

src/utils/
├── getDribbbleShots.ts  # Dribbble API integration (typed interface)
└── data/                # Static content data exported as constants
    ├── projectListData.ts    # featuredProjects, selectedWorks arrays
    ├── aboutTextsData.ts     # workHistoryList, educationHistory
    ├── clientData.ts         # clientFeedbackList
    └── [otherData].ts        # recentExploreData, appScreenData, etc.
```

## Key Conventions

### Component Patterns
- **Page-level components** (HeroSection, SelectedWork): Can use `"use client"` for interactivity
- **Layout components** (MainLayout, Heading): Typically server-side, use props composition
- **Data import**: Import static data from `@/utils/data/*` (path alias configured in tsconfig.json)
- **Naming**: Components can be `.tsx` or `.jsx` (both supported, prefer `.tsx` for new files)

### Styling Approach
- **Tailwind-first**: All styling via utility classes (see [globals.css](src/app/globals.css) for `@layer` patterns)
- **Theme colors**: Custom palette in `tailwind.config.ts` (brand0-4, primary, social colors)
- **Responsive**: Mobile-first with `md:`, `lg:`, `xl:` breakpoints
- **Dark mode**: Use `dark:` prefix; theme toggled via `next-themes` in layout
- **Typography**: Custom `@layer components` for `.hero`, `.title`, `.h1`, `.h2`, etc. (defined in globals.css)

### Animations
- Use `motion` (motion/react-client) with `animate`, `initial`, `transition` props
- Example: `<motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} />`
- CSS animations in globals.css for decorative elements (e.g., `.lights-container`)

### Data Management
- **Static data**: Export as constants from `src/utils/data/*.ts`
- **External APIs**: 
  - Dribbble API (`getDribbbleShots.ts`) - requires `ACCESS_TOKEN` env var
  - Use axios for HTTP requests (installed)
- **Case study data**: Array of objects in `case-studies/[caseStudyId]/data.ts` (overviewData, problemsData, solutionsData, designProcess)

## Critical Integration Points

### Image Handling
- **Remote images**: Configured in `next.config.js` for `cdn.dribbble.com` and `placehold.co`
- **Local images**: Store in `public/assets/` (subdirs: app-screens/, case-study/, featured/, selectedwork/)
- **Next.js Image**: Use `<Image>` with `layout="fill"` for dynamic sizing or explicit width/height

### SEO & Metadata
- Set in `src/app/layout.tsx` (Metadata export)
- Base URL: Production `https://uxjoy.dev/`, Dev `http://localhost:3000/`
- Sitemaps: Generated automatically via `next-sitemap` postbuild hook

### Analytics
- Clarity project ID hardcoded in layout.tsx (v058hsuwuu)
- Analytics collected automatically via Vercel Analytics

## Development Workflow

**Key Commands:**
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build + sitemap generation
npm run lint      # Next.js ESLint check
npm start         # Start production server
```

**Node Version**: 22.x (specified in package.json)

## Common Task Patterns

### Adding a New Section Component
1. Create `components/[sectionName]/[Component].tsx`
2. Import static data from `@/utils/data/[dataFile].ts`
3. Use Tailwind utilities + `@layer components` classes from globals.css
4. Add motion animations if interactive
5. Import into `src/app/page.tsx` and compose in Home component

### Adding a New Case Study
1. Create route folder `src/app/case-studies/[newStudyId]`
2. Copy data shape from `case-studies/[caseStudyId]/data.ts` (overviewData, problemsData, solutionsData arrays)
3. Create `page.tsx` with same structure as existing case study page
4. Reference in project data files if needed

### Theming/Dark Mode
- All dark variants already configured in tailwind.config.ts
- Use `dark:` prefix (e.g., `text-gray-900 dark:text-white`)
- Theme provider in `providers.tsx` handles class-based switching

## Important Notes

- **TypeScript strict mode** enabled - all files must be properly typed
- **Path alias**: `@/*` maps to `src/*` - use for imports
- **Mixed component types**: JSX files coexist with TSX; both are valid
- **Accessibility**: Remix Icon library (`@remixicon/react`) used for SVG icons
- **No hardcoded content**: Keep text in data files, not components
