import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        // <h1>Loading...</h1>
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((e) => (
            <Movie
              key={e.id}
              coverImg={e.medium_cover_image}
              year={e.year}
              title={e.title}
              summary={e.summary}
              genres={e.genres}
              id={e.id}
            ></Movie>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
