export type Service = {
  slug: string;
  title: string;
  excerpt: string;
};

export type ProjectCover = { src: string; alt?: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: ProjectCover;
};
