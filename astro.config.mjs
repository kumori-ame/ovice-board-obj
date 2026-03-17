import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ouj-hokkaido-fes.io/fes-2026',
  base: '/fes-2026',
  outDir: './docs',
  integrations: [mdx()], // ← これ追加
});