import Home from "./pages/Home"
import DetailsMovie from "./pages/DetailsMovie"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import CreateMovie from "./pages/CreateMovie"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<DetailsMovie />} />
            <Route path="/movie/create" element={<CreateMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App