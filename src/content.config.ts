import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Which language this post is written in. English posts do not need this line.
			lang: z.enum(['en', 'es']).default('en'),
			// Translations of the same post live in files named `name.en.md` / `name.es.md`,
			// so they share an explicit `url` to line up. (Not `slug` — that key is the
			// collection's own id and must stay unique per file.)
			url: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };