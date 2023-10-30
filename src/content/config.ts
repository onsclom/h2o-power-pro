import { z, defineCollection } from "astro:content"

const about = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string(),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  about,
}
