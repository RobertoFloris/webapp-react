import { useState } from "react"

const CreateMovie = () => {

  const initialMovieData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null
  }

  const [formData, setFormData] = useState(initialMovieData)

  const setChangeValue = (e) => {

    const { value, name } = e.target;

    if (name === "image") {
      setFormData(prev => ({
        ...prev,
        [name]: e.target.files[0]
      }))
    } else {
      setFormData((prev => ({
        ...prev,
        [name]: value
      })))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  }



  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-center">INSERISCI UN NUOVO FILM</h3>
      </div>
      <div className="form-group my-3">
        <label>Titolo</label>
        <input
          name="title"
          type="text"
          className="form-control"
          placeholder="Inserire titolo"
          value={formData.title}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Regista</label>
        <input
          name="director"
          type="text"
          className="form-control"
          placeholder="Inserire regista"
          value={formData.director}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Genere</label>
        <input
          name="genre"
          type="text"
          className="form-control"
          placeholder="Inserire genere"
          value={formData.genre}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Anno di pubblicazione</label>
        <input
          name="release_year"
          type="number"
          className="form-control"
          placeholder="Inserire anno di pubblicazione"
          min="1890"
          max="2025"
          value={formData.release_year}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Trama</label>
        <textarea
          name="abstract"
          type="text"
          className="form-control"
          placeholder="Inserire trama"
          value={formData.abstract}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Immagine</label>
        <input
          name="image"
          type="file"
          className="form-control"
          placeholder="Inserire testo"
          onChange={setChangeValue}
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">Invia</button>
    </form>
  )
}

export default CreateMovie