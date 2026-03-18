import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kumori-ame.github.io/ovice-board-obj',
  base: '/ovice-board-obj',
  outDir: './docs',
  integrations: [mdx()], // ← これ追加
});