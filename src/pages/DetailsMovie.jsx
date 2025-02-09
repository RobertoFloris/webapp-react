import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react";

const DetailsMovie = () => {

  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();

  useEffect(() => {
    fetchMovie(id)
  }, [])

  console.log(movie);

  return (
    <div>DetailsMovie</div>
  )
}

export default DetailsMovie