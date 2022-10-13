const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movie = ({ Poster, Title, Year }) => {
  return (
    <div className='movie-card'>
      <img
        src={Poster === "N/A" ? url : Poster}
        alt={Title}
        className='movie__img'
      />
      <div className='movie__card-info'>
        <p className='movie__card-title'>{Title}</p>
        <p className='movie__card-release'>{Year}</p>
      </div>
    </div>
  );
};

export default Movie;
