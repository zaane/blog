import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    order: z.number().int().nonnegative().optional(),
    status: z.enum(["Open Source", "Closed Source"]).optional(),
    videoLabel: z.string().optional(),
    videoUrl: z.string().optional(),
    videoTitle: z.string().optional(),
    videoPosterQuality: z.enum(["max", "high", "default", "low"]).optional(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    externalUrl: z.string().optional(),
    externalLabel: z.string().optional(),
    description: z.string().optional(),
    techStack: z
      .object({
        frontend: z.array(z.string()).default([]),
        backend: z.array(z.string()).default([]),
      })
      .optional(),
    currentFeatures: z.array(z.string()).optional(),
    nextSteps: z.array(z.string()).optional(),
    whatItIs: z.string().optional(),
    whatILearned: z.string().optional(),
    otherNotes: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
