import PropTypes from "prop-types";
import styles from "./Moviedesc.module.css";



function Moviedesc({ rating, download_count, runtime, description_intro, year, title,genres,id }) {
  return (
    <div >
      <ul>
        {genres.map((g) => (
          <li key={id + g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Moviedesc.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  runtime : PropTypes.number.isRequired,
  download_count : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
};
export default Moviedesc;
