// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mtmartinvelez.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		// Send visitors to the English page rather than serving the same content twice.
		fallback: { es: 'en' },
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'redirect',
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Geist',
			cssVariable: '--font-body',
			weights: [400, 500, 700],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Geist Mono',
			cssVariable: '--font-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['monospace'],
		},
	],
});
