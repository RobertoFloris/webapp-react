
import { useState } from "react"

import axios from "axios";

const ReviewForm = ({ id, fetchMovie }) => {

  const url = `${import.meta.env.VITE_API_URL}/${id}`;

  const initialFormData = {
    name: '',
    text: '',
    vote: ''
  }

  const [formData, setFormData] = useState(initialFormData);

  const setChangeValue = (e) => {

    const { value, name } = e.target;

    setFormData((prev => ({
      ...prev,
      [name]: value
    })))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, formData, { headers: { "Content-Type": "application/json" } })
      .then(res => {
        setFormData(initialFormData);
        fetchMovie(id)
      })
      .catch(err => console.log(err));
  }

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-center">INSERISCI UNA NUOVA RECENSIONE</h3>
      </div>
      <div className="form-group my-3">
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Inserire nome"
          value={formData.name}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Text</label>
        <textarea
          name="text"
          type="text"
          className="form-control"
          placeholder="Inserire testo"
          value={formData.text}
          onChange={setChangeValue}
        />
      </div>
      <div className="form-group my-3">
        <label>Vote</label>
        <input
          name="vote"
          type="number"
          className="form-control"
          placeholder="Inserire voto"
          min="1"
          max="5"
          value={formData.vote}
          onChange={setChangeValue}
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">Invia</button>
    </form>
  )
}

export default ReviewForm