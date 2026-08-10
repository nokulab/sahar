import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const editorial = z.object({
  title: z.string(),
  description: z.string(),
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('Portal Page editorial team'),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  image: z.string().default('/images/og-default.png'),
  imageAlt: z.string().default('Portal Page editorial graphic'),
  draft: z.boolean().default(false)
});

export const collections = {
  insights: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }), schema: editorial }),
  resources: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }), schema: editorial })
};
