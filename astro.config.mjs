import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://portalpage.example';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !['/404', '/privacy/', '/terms/', '/acceptable-use/', '/cookies/'].some((part) => page.includes(part))
  })],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  },
  build: { format: 'directory' }
});
