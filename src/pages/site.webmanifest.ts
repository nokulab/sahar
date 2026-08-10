export function GET() {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return new Response(JSON.stringify({
    name: 'Portal Page',
    short_name: 'Portal Page',
    description: 'Privacy-first digital community infrastructure for organisations.',
    start_url: `${base}/`,
    display: 'standalone',
    background_color: '#f3f0e8',
    theme_color: '#f3f0e8',
    icons: [{ src: `${base}/favicon.svg`, sizes: 'any', type: 'image/svg+xml' }]
  }), { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
}
