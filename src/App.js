import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import 'reactjs-popup/dist/index.css'

import Header from './components/Header'
import Movies from './components/Movies'
import Starred from './components/Starred'
import WatchLater from './components/WatchLater'
import './app.scss'
import Modal from './components/Modal'
import { API_KEY, ENDPOINT } from './constants'

const App = () => {

  const { movies } = useSelector((state) => state)
  const [videoKey, setVideoKey] = useState(null)
  const [isOpen, setOpen] = useState(false)

  const closeModal = () => setOpen(false)
  const viewTrailer = (movie) => {
    getMovie(movie.id)
    setOpen(true)
  }
  const getMovie = async (id) => {
    const URL = `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`

    setVideoKey(null)
    const videoData = await fetch(URL)
      .then((response) => response.json())

    if (videoData.videos && videoData.videos.results.length) {
      const trailer = videoData.videos.results.find(vid => vid.type === 'Trailer')
      setVideoKey(trailer ? trailer.key : videoData.videos.results[0].key)
    }
  }

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
