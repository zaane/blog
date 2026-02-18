import type { CollectionEntry } from "astro:content";

export type ProjectSectionId = "current" | "past" | "guided";
export type Project = Omit<CollectionEntry<"projects">["data"], "order">;

export interface ProjectSection {
  id: ProjectSectionId;
  title: string;
  description: string;
  projects: Project[];
}

