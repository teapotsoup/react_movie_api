import PropTypes from "prop-types"
function Movie({medium_cover_image,title,summary,genres,id}) {
  return (
    <div >
      <img src={medium_cover_image} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={id + g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    id:PropTypes.number.isRequired,
} 
export default Movie;
