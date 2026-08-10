# Portal Page SEO launch and operating guide

Technical SEO creates the conditions for discovery; it does not guarantee rankings. Sustainable visibility depends on useful original work, a credible product and legitimate references from other sites.

## Before launch

- Replace `portalpage.example` with the final HTTPS origin through `PUBLIC_SITE_URL`.
- Confirm `PUBLIC_BASE_PATH` and test every primary navigation route on the deployed URL.
- Run `pnpm run build` and resolve every validator failure.
- Review unique titles, descriptions, H1s and canonical URLs on all important pages.
- Confirm the generated `sitemap-index.xml`, `robots.txt` and `rss.xml` return HTTP 200.
- Verify Open Graph and X previews use the local 1200×630 image.
- Keep draft legal pages `noindex` until approved; reconsider indexing after professional review.
- Replace organisation placeholders with verified facts only.
- Confirm no private portal content can be crawled or appear in public search.

## Search Console setup

1. Create a domain property in Google Search Console using DNS verification.
2. Submit `/sitemap-index.xml`.
3. Use URL Inspection for `/`, `/platform/`, `/principles/`, `/data-ownership/`, `/solutions/government/` and one Insight.
4. Request indexing only after the canonical host, redirects and content are final.
5. Review Page indexing, HTTPS, Core Web Vitals and structured-data reports.

Set up Bing Webmaster Tools separately or import the verified property, then submit the same sitemap.

## Canonical host and redirects

- Redirect HTTP to HTTPS.
- Choose `www` or apex and redirect the other with a permanent 301.
- Preserve trailing slashes consistently with the Astro build.
- Redirect any replaced campaign or legacy URL to the closest genuine successor.
- Avoid redirecting unrelated expired content to the homepage.
- Check canonical tags after every domain or base-path change.

## Content clusters

The site launches with four linked clusters:

- **Community portal:** `/platform/`, definition article, complete software guide, selection guide and feature pages.
- **Privacy and ownership:** `/principles/`, `/data-ownership/`, `/privacy-by-design/`, privacy guide and portability articles.
- **Government:** government and local-government solutions, government platform guide, trusted communities article and governance material.
- **Property:** property and strata solution, residential article, announcements, documents and governance.

Maintain one canonical page for each main search intent. Update the pillar page and internal links before creating a near-duplicate page.

## Structured data

The build outputs Organization data where visible, BreadcrumbList on appropriate pages and Article data for editorial entries. Validate representative deployed URLs with Google's Rich Results Test and Schema.org validator.

Do not add customer, Person, Review, Product rating or certification structured data unless the visible, verified content supports it.

## Performance and accessibility

- Test Core Web Vitals with field data after sufficient traffic exists.
- Run Lighthouse on representative mobile and desktop pages.
- Check large editorial headings at 320px, 200% zoom and text-only zoom.
- Test keyboard navigation, mobile menu, form labels, focus, reduced motion and long-article headings.
- Keep JavaScript minimal and avoid third-party scripts without a clear purpose.
- Optimise future images with dimensions, responsive sources and modern formats.

## Editorial operating rhythm

- Give every article a verified author or accountable editorial team.
- Add methodology and sources to original research.
- Show updated dates only when a substantive review occurs.
- Refresh pillar pages when product capability, law or customer questions change.
- Check internal links and remove orphan pages quarterly.
- Monitor branded and non-branded queries for genuine content gaps.
- Earn links through useful research, tools and expert contributions—not purchased link schemes.

## Measurement decision

Do not add analytics by default. First define the decisions Portal Page needs to make. Evaluate aggregate, privacy-respecting measurement and document its purpose, fields, retention and access. Update the privacy and cookie notices before activation.

Useful search measures include impressions, clicks, query themes, indexed URLs, crawl problems and Core Web Vitals. Search Console can provide much of this without adding behavioural scripts to the public site.

## Monthly checks

- Search Console indexing and enhancement reports
- sitemap freshness and unexpected exclusions
- canonical and redirect behaviour
- broken internal and external links
- top landing-page relevance and search intent
- articles approaching a factual review date
- accessibility and performance regressions
- unverified or outdated product claims

## Quarterly review

Review cluster coverage, content quality, author information, sources, internal linking, competitor search results and legitimate outreach opportunities. Consolidate weak overlapping pages instead of mass-producing superficial content.
