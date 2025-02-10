import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react";

import ReviewCard from "../components/ReviewCard";

const DetailsMovie = () => {

  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();

  useEffect(() => {
    fetchMovie(id)
  }, [])

  return (
    <>
      <div className="container d-flex justify-content-center my-5">

        <div className="card">
          <img className="card-img-top" src={movie.image} alt="Card image cap" style={{ width: '18rem' }} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.director}</p>
            <p className="card-text">{movie.genre}</p>
            <p className="card-text">{movie.average_vote}</p>
          </div>
        </div>

      </div>

      <div className="m-3">
        {movie.reviews?.map(item => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>
    </>

  )
}

export default DetailsMovie