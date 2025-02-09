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
    <div className="container my-5">
      <div className="row">
        {movies.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home