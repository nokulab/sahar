import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.PUBLIC_BASE_PATH || '/').replace(/\/$/, '');
if (!base) process.exit(0);
const dist = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(dist)) throw new Error('dist/ does not exist');
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name); return statSync(path).isDirectory() ? walk(path) : [path];
});
for (const file of walk(dist).filter(file => file.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8').replace(/\b(href|src)="(\/(?!\/)[^\"]*)"/g, (full, attribute, value) => {
    if (value === base || value.startsWith(`${base}/`)) return full;
    return `${attribute}="${base}${value}"`;
  });
  writeFileSync(file, html);
}
console.log(`Prefixed root-relative HTML asset and navigation URLs with ${base}/`);
