import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const Home = () => {
  const { fetchMovies, movies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies)
  return (
    <div>{movies[0]?.title}</div>
  )
}

export default Home