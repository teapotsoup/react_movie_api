import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moviedesc from "../components/Moviedesc";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Moviedesc
          id={detail.id}
          rating={detail.rating}
          download_count={detail.download_count}
          runtime={detail.runtime}
          description_intro={detail.description_intro}
          year={detail.year}
          title={detail.title}
          genres={detail.genres}
        />
      )}
    </div>
  );
}

export default Detail;
