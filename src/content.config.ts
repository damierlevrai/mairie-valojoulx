import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    categorie: z.string(),
    image: z.string().optional(),
    resume: z.string().optional(),
    epingle: z.boolean().optional().default(false),
  }),
});

export const collections = { actualites };
