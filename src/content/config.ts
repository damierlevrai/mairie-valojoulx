import { z, defineCollection } from 'astro:content';

const actualites = defineCollection({
  type: 'content',
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
