# Portal Page website

Production-ready static website for **Portal Page**, a privacy-first digital community infrastructure company.

The site is built with Astro 5 and TypeScript. It generates plain HTML, CSS and a very small navigation script. There is no client framework, advertising code, analytics, session replay or cookie banner in the default build.

## What is included

- 50+ crawlable routes across platform, solutions, trust, company, resources and legal content
- 16 original Insights articles and 7 long-form guides in Astro Content Collections
- unique metadata, canonical URLs, Open Graph and X cards, JSON-LD, sitemap, RSS and robots.txt
- responsive editorial design, keyboard navigation, visible focus and reduced-motion handling
- configuration-driven contact details and form endpoint
- draft legal pages clearly marked for professional review and excluded from indexing
- GitHub Actions deployment for GitHub Pages
- automated build validation for routes, metadata, required files and article counts

## Requirements

- Node.js 22 or a current supported LTS release
- pnpm 11 (Corepack can provide it)

## Local development

```bash
corepack enable
pnpm install
cp .env.example .env
pnpm run dev
```

Astro prints the local URL. Changes to pages, components, styles and Markdown update during development.

## Build and check

```bash
pnpm run check
pnpm run build
pnpm run preview
```

`pnpm run build` runs Astro's TypeScript/content check, generates the static site and validates internal page links, required SEO files, metadata uniqueness and content counts. Output is written to `dist/`.

## Configuration before launch

Set these values through `.env` locally and GitHub repository **Settings → Secrets and variables → Actions → Variables** for deployment:

| Variable | Required | Purpose |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Yes | Final absolute origin, such as `https://portalpage.com.au` or `https://OWNER.github.io` |
| `PUBLIC_BASE_PATH` | Yes | `/` for a custom domain or user Pages site; `/repository-name` for a project Pages site |
| `PUBLIC_CONTACT_EMAIL` | Yes | Verified public enquiry email |
| `PUBLIC_FORM_ENDPOINT` | Yes for form | HTTPS endpoint for the static contact form |
| `PUBLIC_LINKEDIN_URL` | Optional | Verified company profile |
| `PUBLIC_GITHUB_URL` | Optional | Verified public organisation profile |

The contact form stays disabled until a form endpoint is supplied. Assess the provider, update the draft privacy/cookie notices and test delivery before enabling launch traffic.

Corporate facts such as company address, team profiles and approved communities are deliberately empty. Update:

- `src/data/site.ts` for central company configuration
- `src/data/team.ts` for verified people
- `src/data/communities.ts` for approved customer stories

Do not publish invented customer, security, certification or corporate information.

## Publishing Insights and guides

Articles live in `src/content/insights/`; guides live in `src/content/resources/`. Copy an existing Markdown file and set:

```yaml
title: "Unique page title"
description: "Unique search and social description"
publishedDate: 2026-08-10
updatedDate: 2026-08-10
author: "Verified author or Portal Page editorial team"
category: "Community"
tags: ["topic one", "topic two"]
featured: false
draft: false
```

Long articles automatically receive a table of contents, reading time, breadcrumbs, related articles and Article structured data. `draft: true` excludes an item from public routes and feeds.

## GitHub deployment — exact steps

1. Create a new empty GitHub repository.
2. Add this project and push it to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open **Settings → Secrets and variables → Actions → Variables** and add `PUBLIC_SITE_URL`, `PUBLIC_BASE_PATH`, `PUBLIC_CONTACT_EMAIL` and `PUBLIC_FORM_ENDPOINT`.
6. For a project site at `https://OWNER.github.io/REPOSITORY/`, set `PUBLIC_SITE_URL` to `https://OWNER.github.io` and `PUBLIC_BASE_PATH` to `/REPOSITORY`.
7. For a custom domain, set `PUBLIC_SITE_URL` to the HTTPS origin and `PUBLIC_BASE_PATH` to `/`.
8. Push to `main` or run **Actions → Deploy Portal Page to GitHub Pages → Run workflow**.
9. Wait for both build and deploy jobs to pass, then open the Pages URL shown by GitHub.

### Custom domain and DNS

1. In **Settings → Pages → Custom domain**, enter the verified domain.
2. Follow GitHub's current DNS instructions for an apex domain or subdomain.
3. Add a `public/CNAME` file containing only the domain if the repository workflow requires it.
4. Enable **Enforce HTTPS** after DNS resolves.
5. Set `PUBLIC_SITE_URL` to the custom HTTPS origin and `PUBLIC_BASE_PATH` to `/`, then redeploy.
6. Check canonical URLs, sitemap URLs, form delivery and redirects on the deployed site.

### Search launch

1. Verify the final domain in Google Search Console.
2. Submit `https://YOUR-DOMAIN/sitemap-index.xml`.
3. Inspect the homepage and key pillar pages.
4. Verify the domain in Bing Webmaster Tools and submit the sitemap.
5. Follow [SEO.md](./SEO.md) for the complete launch checklist.

## Privacy and legal launch gates

- commission professional review of Privacy, Terms, Acceptable Use and Cookies drafts;
- insert the legal entity, contact and jurisdiction details;
- verify production hosting, processor, form and security information;
- reassess cookies after deployment and whenever a third-party script changes;
- document Portal Page product data flows, retention, export, deletion and AI moderation;
- ensure customer agreements match public principles and implemented controls.

## Quality commands

```bash
pnpm run check       # Astro/TypeScript/content validation
pnpm run build       # production build plus repository validator
pnpm run validate    # validate an existing dist/ build
```

The validator checks generated page count, article and resource counts, required H1/title/description/canonical metadata, duplicate titles/descriptions, internal links, forbidden design-reference mentions, lorem ipsum, robots, RSS, sitemap, 404 and the local social image.

## Licence

No open-source licence has been selected. See [LICENSE](./LICENSE) and replace it with an approved licence before public reuse or distribution.
