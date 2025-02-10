const ReviewCard = ({ review }) => {

  const { name, text, vote } = review

  return (
    <div className="card m-3">
      <p className="card-text">{name}</p>
      <p className="card-text">{text}</p>
      <p className="card-text">{vote}</p>
    </div>

  )
}

export default ReviewCard