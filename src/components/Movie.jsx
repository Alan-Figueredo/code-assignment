import { useDispatch, useSelector } from 'react-redux'
import starredSlice from '../data/starredSlice'
import watchLaterSlice from '../data/watchLaterSlice'
import placeholder from '../assets/not-found-500X750.jpeg'
import { movieObject } from '../utils/movieObject'
import { POSTER_URL } from '../constants'

const Movie = ({ movie, viewTrailer }) => {

    const { starred, watchLater } = useSelector((state) => state)
    const { starMovie, unstarMovie } = starredSlice.actions
    const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions

    const dispatch = useDispatch()

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
                        {!starred.starredMovies.map(movie => movie.id).includes(movie.id) ? (
                            <span className="btn-star" data-testid="starred-link" onClick={() =>
                                dispatch(starMovie(movieObject(movie))
                                )}>
                                <i className="bi bi-star" />
                            </span>
                        ) : (
                            <span className="btn-star" data-testid="unstar-link" onClick={() => dispatch(unstarMovie(movie))}>
                                <i className="bi bi-star-fill" data-testid="star-fill" />
                            </span>
                        )}
                        {!watchLater.watchLaterMovies.map(movie => movie.id).includes(movie.id) ? (
                            <button type="button" data-testid="watch-later" className="btn btn-light btn-watch-later" onClick={() => dispatch(addToWatchLater(movieObject(movie)))}>Watch Later</button>
                        ) : (
                            <button type="button" data-testid="remove-watch-later" className="btn btn-light btn-watch-later blue" onClick={() => dispatch(removeFromWatchLater(movie))}><i className="bi bi-check"></i></button>
                        )}
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