const Card = ({ movie }) => {
  const { title, director, genre, image } = movie;
  return (
    <div className="col">
      <div className="card mb-4">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{director}</p>
          <p className="card-text">{genre}</p>
        </div>
      </div>
    </div>

  )
}

export default Card