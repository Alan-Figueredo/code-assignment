import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import 'reactjs-popup/dist/index.css'
import Header from './components/Header'
import Movies from './components/Movies'
import Starred from './components/Starred'
import WatchLater from './components/WatchLater'
import './app.scss'
import Modal from './components/Modal'
import { useModal } from './hooks/useModal'

const App = () => {

  const { movies } = useSelector((state) => state)
  const { isOpen, closeModal, videoKey, viewTrailer } = useModal();

  return (
    <div className="App">
      <Header />
      <div className="container">
        {isOpen && <Modal closeModal={closeModal} videoKey={videoKey} />}
        <Routes>
          <Route path="/" element={<Movies movies={movies} viewTrailer={viewTrailer} />} />
          <Route path="/starred" element={<Starred viewTrailer={viewTrailer} />} />
          <Route path="/watch-later" element={<WatchLater viewTrailer={viewTrailer} />} />
          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
