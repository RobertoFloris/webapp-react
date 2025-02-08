import Home from "./pages/Home"
import DetailsMovie from "./pages/DetailsMovie"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailsMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App