import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const url = import.meta.env.VITE_API_URL;

  // VARIABILE URL NON FUNZIONA SU .ENV??
  // const url = "http://localhost:3000/api/movies";

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])

  const fetchMovies = () => {
    axios.get(url)
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => console.log(err));
  }

  const fetchMovie = (id) => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => console.log(err));
  }

  const value = {
    fetchMovies,
    movies,
    fetchMovie,
    movie
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}