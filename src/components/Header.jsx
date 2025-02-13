import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="d-flex justify-content-around align-items-center navbar navbar-light bg-light">
        <Link to={'/'} className="navbar-brand mb-0 h1 mx-3">Booliwood Cinema</Link>
        <Link to={`/movie/create`} className="btn btn-primary">Aggiungi film</Link>
      </nav>
    </header>
  )
}

export default Header