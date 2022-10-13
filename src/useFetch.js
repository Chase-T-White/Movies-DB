import { useState, useEffect } from "react";

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_MOVIEKEY}`;

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovies = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${url}${urlParams}`);
  }, [urlParams]);

  return { loading, data, error };
};

export default useFetch;
