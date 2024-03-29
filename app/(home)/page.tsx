import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constant";

export const metadata = {
  title: "Home",
};

// credit
// https://nomad-movies.nomadcoders.workers.dev/
// - /movies/:id/providers
// - /movies/:id/similar
async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
