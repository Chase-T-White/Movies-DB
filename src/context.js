import React, { useState, useEffect, useContext, useCallback } from "react";

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_MOVIEKEY}`;
// &s=
// &i=
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}&s=${search}`);
      const data = await response.json();
      console.log(data.Search);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchMovies();
  }, [search]);

  return (
    <AppContext.Provider value={{ setSearch, loading, error, search, movies }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
