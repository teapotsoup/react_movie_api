import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
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
    // console.log(movies)
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((e) => (
            <Movie key={e.id} medium_cover_image={e.medium_cover_image} title={e.title} summary={e.summary} genres={e.genres} id={e.id}></Movie>
          ))
        )}
      </div>
    );
}

export default Home