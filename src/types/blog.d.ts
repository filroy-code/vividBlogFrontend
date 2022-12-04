export interface IBlog {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  published_at: Date | null;
}
