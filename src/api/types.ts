interface BookLaunch {
  launch_id: string;
  provider: string;
}

interface BookEvent {
  event_id: number;
  provider: string;
}

export interface Book {
  isbn13?: number |string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  url?: any;
  authors?: string;
  ublisher?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  pdf?: string;
  publisher: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: true;
  launches: BookLaunch[];
  events: BookEvent[];
}
