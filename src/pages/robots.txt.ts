import { site } from '@/data/site';
export function GET() {
  const base = import.meta.env.BASE_URL || '/';
  const sitemap = new URL(`${base.replace(/\/$/, '')}/sitemap-index.xml`, site.url);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
