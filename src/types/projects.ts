export type status = "COMPLETED" | "IN_PROGRESS";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: status;
  githubUrl: string | null;
  githubUrlBackend: string | null;
  livelinkUrl: string | null;
  thumbnailUrl: string | null;
  featured: boolean;
  createdAt: string;
  technologies: Technology[];
}

export interface Technology {
  id: number;
  name: string;
}
