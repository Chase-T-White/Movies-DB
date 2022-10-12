const Movie = ({ Poster, Title }) => {
  return (
    <div className='movie-card'>
      <img src={Poster} alt={Title} className='movie__img' />
    </div>
  );
};

export default Movie;
