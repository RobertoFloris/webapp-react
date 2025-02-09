import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

import Card from "../components/Card";

const Home = () => {
  const { fetchMovies, movies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies)
  return (
    <div className="row row-cols-3 my-5">
      {movies.map(movie => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default Home