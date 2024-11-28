import Result from "@/components/Result";
import styles from "../../Style/SearchPage.module.scss";

interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie" | "tv";
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  name: string;
}

const API_KEY = "ad489d97dc4b2b3432c39e443fa2bb44";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  // Await the params since it is expected to be a Promise
  const { searchTerm } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results: Movie[] = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className={styles.h1}>No results found</h1>
      )}
      {results && results.length > 0 && <Result results={results} />}
    </div>
  );
}
