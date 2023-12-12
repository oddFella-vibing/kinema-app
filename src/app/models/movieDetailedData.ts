export interface MovieDetaiedData {
  title: string;
  adult: boolean;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  tagline: string;
  runtime: number;
  homepage: string;
}
