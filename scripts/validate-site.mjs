import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const dist = join(root, 'dist');
const configuredBase = (process.env.PUBLIC_BASE_PATH || '/').replace(/\/$/, '');
if (!existsSync(dist)) throw new Error('dist/ does not exist. Run the production build first.');

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const titles = new Map();
const descriptions = new Map();
const issues = [];
const pagePaths = new Set(htmlFiles.map((file) => {
  const rel = relative(dist, file).replaceAll('\\', '/');
  return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
}));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(dist, file);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!title) issues.push(`${rel}: missing title`);
  if (!description) issues.push(`${rel}: missing meta description`);
  if (!canonical) issues.push(`${rel}: missing canonical URL`);
  if (!html.includes('<h1')) issues.push(`${rel}: missing H1`);
  if (title) titles.set(title, [...(titles.get(title) || []), rel]);
  if (description) descriptions.set(description, [...(descriptions.get(description) || []), rel]);
  if (/lorem ipsum/i.test(html)) issues.push(`${rel}: contains lorem ipsum`);
  if (/blackbird/i.test(html)) issues.push(`${rel}: contains forbidden design-reference name`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split(/[?#]/)[0];
    if (!path || /\.(svg|png|jpg|jpeg|webp|css|js|xml|txt|webmanifest)$/.test(path)) continue;
    const localPath = configuredBase && (path === configuredBase || path.startsWith(`${configuredBase}/`)) ? (path.slice(configuredBase.length) || '/') : path;
    const normalised = localPath.endsWith('/') ? localPath : `${localPath}/`;
    if (!pagePaths.has(normalised) && path !== '/rss.xml') issues.push(`${rel}: broken internal link ${href}`);
  }
}

for (const [title, locations] of titles) if (locations.length > 1) issues.push(`Duplicate title "${title}" in ${locations.join(', ')}`);
for (const [, locations] of descriptions) if (locations.length > 1) issues.push(`Duplicate description in ${locations.join(', ')}`);

for (const required of ['robots.txt', 'rss.xml', 'sitemap-index.xml', 'site.webmanifest', '404.html', 'images/og-default.png']) {
  if (!existsSync(join(dist, required))) issues.push(`Missing ${required}`);
}

const insightCount = files.filter((file) => /dist\/insights\/[^/]+\/index\.html$/.test(file)).length;
const resourceCount = files.filter((file) => /dist\/resources\/[^/]+\/index\.html$/.test(file)).length;
if (insightCount < 15) issues.push(`Expected at least 15 insights, found ${insightCount}`);
if (resourceCount < 7) issues.push(`Expected 7 resources, found ${resourceCount}`);

if (issues.length) {
  console.error(`Validation failed with ${issues.length} issue(s):\n- ${issues.join('\n- ')}`);
  process.exit(1);
}

console.log(`Validation passed: ${htmlFiles.length} HTML pages, ${insightCount} insights, ${resourceCount} guides, unique metadata and no broken internal page links.`);
