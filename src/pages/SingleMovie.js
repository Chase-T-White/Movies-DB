import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);
  console.log(loading, error, movie);

  if (loading) {
    return (
      <section>
        <div className='container'>
          <div className='loading'>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className='movie'>
      <div className='container'>
        <div className='movie__container flex'>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className='movie__page-img'
          />
          <div className='movie__info'>
            <h2 className='movie__title'>{movie.Title}</h2>
            <p className='movie__plot'>{movie.Plot}</p>
            <div className='movie__more-info flex'>
              <ul className='movie__details-list'>
                <li className='detail'>Director:</li>
                <li className='detail'>Actors:</li>
                <li className='detail'>Writers:</li>
                <li className='detail'>Released:</li>
                <li className='detail'>Rated:</li>
                <li className='detail'>Genre:</li>
                <li className='detail'>Runtime:</li>
              </ul>
              <ul className='movie__values-list'>
                <li className='value'>{movie.Director}</li>
                <li className='value'>{movie.Actors}</li>
                <li className='value'>{movie.Writer}</li>
                <li className='value'>{movie.Released}</li>
                <li className='value'>{movie.Rated}</li>
                <li className='value'>{movie.Genre}</li>
                <li className='value'>{movie.Runtime}</li>
              </ul>
            </div>
            <div className='movie__ratings flex'>
              {movie.Ratings.map((rating) => {
                return (
                  <div className='movie__ratings--container'>
                    <h4 className='rating__source'>{rating.Source}</h4>
                    <h4 className='rating__value'>{rating.Value}</h4>
                  </div>
                );
              })}
            </div>
            <Link to={"/"} className='btn'>
              Search Movies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
