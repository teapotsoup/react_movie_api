import PropTypes from "prop-types";
import styles from "./Moviedesc.module.css";

function Moviedesc({
  rating,
  download_count,
  runtime,
  description_intro,
  year,
  title,
  genres,
  coverImg,
  id,
}) {
  return (
    // <div className={styles.case}></div>
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title}></img>
      <span>
        <h1>{title}</h1>
        <h3>{year}</h3>
        
        <ul className={styles.ul_remove}>
          {genres.map((g) => (
            <li className={styles.li_remove} key={id + g}><h6>{g}</h6></li>
          ))}
        </ul>
      </span>
      <div>
        <div>  runtime : {runtime}</div>
        <div>rating : {rating}</div>
        <div>download_count : {download_count}</div>
      </div>
      <p className={styles.p_remove}>{description_intro.length > 235 ? `${description_intro.slice(0, 235)}...` : description_intro}</p>
    </div>
  );
}

Moviedesc.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  download_count: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
export default Moviedesc;
