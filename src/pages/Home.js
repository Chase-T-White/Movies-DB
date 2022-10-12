import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
};

const Home = () => {
  const { setSearch, movies, loading, search, error } = useGlobalContext();
  return (
    <section>
      <div className='container'>
        <div className='title-container'>
          <div className='lines'>
            <h2 className='title'>
              Movies <span>DB</span>
            </h2>
          </div>
        </div>
        <form className='form flex fd-column' onSubmit={handleSubmit}>
          <label>Search your favorite movies</label>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            {error.show && <div className="error">{error.msg}</div>}
          />
        </form>
        <div className='movies-list'>
          {loading ? (
            <div className='loading'>Loading...</div>
          ) : (
            movies.map((movie) => {
              return <Movie key={movie.imdbID} {...movie} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
