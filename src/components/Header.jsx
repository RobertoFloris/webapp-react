import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to={'/'} className="navbar-brand mb-0 h1 mx-3">Booliwood Cinema</Link>
      </nav>
    </header>
  )
}

export default Header