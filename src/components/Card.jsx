import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { id, title, director, genre, image } = movie;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{director}</p>
          <p className="card-text">{genre}</p>
        </div>
        <div className="my-3">
          <Link to={`/movie/${id}`} className="btn btn-primary">Maggiori informazioni</Link>
        </div>
      </div>
    </div>
  )

}

export default Card