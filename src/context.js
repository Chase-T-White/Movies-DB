import React, { useState, useContext } from "react";
import useFetch from "./useFetch";

// &s=
// &i=
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("avengers");

  const { loading, error, data: movies } = useFetch(`&s=${search}`);

  console.log(loading, error, movies);

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
