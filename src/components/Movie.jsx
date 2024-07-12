import { useSelector } from 'react-redux'
import placeholder from '../assets/not-found-500X750.jpeg'
import { POSTER_URL } from '../constants'
import { WatchLaterButton } from './WatchLaterButton'
import { StarredButton } from './StarredButton'

const Movie = ({ movie, viewTrailer }) => {
    const { starred, watchLater } = useSelector((state) => state)

    const myClickHandler = (e) => {
        if (!e) e = window.event
        e.cancelBubble = true
        e.target.parentElement.parentElement.classList.remove('opened')
    }

    return (
        <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card" onClick={(e) => e.currentTarget.classList.add('opened')} >
                <div className="card-body text-center">
                    <div className="overlay" />
                    <div className="info_panel">
                        <div className="overview">{movie.overview}</div>
                        <div className="year">{movie.release_date?.substring(0, 4)}</div>
                        <StarredButton starred={starred} movie={movie} />
                        <WatchLaterButton watchLater={watchLater} movie={movie} />
                        <button type="button" className="btn btn-dark" onClick={() => viewTrailer(movie)}>View Trailer</button>
                    </div>
                    <img className="center-block" src={(movie.poster_path) ? `${POSTER_URL}${movie.poster_path}` : placeholder} alt="Movie poster" />
                </div>
                <h6 className="title mobile-card">{movie.title}</h6>
                <h6 className="title">{movie.title}</h6>
                <button type="button" className="close" onClick={(e) => myClickHandler(e)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Movie