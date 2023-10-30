export class Movie {
  id?: number;
  title: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  original_language: string;
  pretty_original_language?: string;
  backdrop_path: string;
  vote_count: string;
  popularity: string;
  overview: string;
  spoken_languages: any[] = [];

  refactor() {
    this.spoken_languages.some((item) => {
      if (item.iso_639_1 == this.original_language) {
        this.pretty_original_language = item.english_name;

        return true;
      }
      return false;
    })
  }
}
