import { defineCollection, z } from 'astro:content';

const noteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(true),
    language: z.enum(['ja', 'en']),
  }),
});

export const collections = {
  'note': noteCollection,
};