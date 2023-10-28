export class Movie {
  id?: number;
  title: string | undefined;
  original_title: string | undefined;
  release_date: string | undefined;
  vote_average: number | undefined;
  poster_path: string | undefined;
  original_language: string | undefined;
  pretty_original_language: string | undefined;
  backdrop_path: string | undefined;
  vote_count: string | undefined;
  popularity: string | undefined;
  overview: string | undefined;
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
