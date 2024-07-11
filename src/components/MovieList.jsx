import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Movie from './Movie'
import '../styles/starred.scss'

const MovieList = ({ listType, slice }) => {
    const state = useSelector((state) => state)
    const list = state[listType]
    const { clearAll } = slice.actions
    const dispatch = useDispatch()

    const listNames = {
        starred: {
            header: 'Starred movies',
            emptyMessage: 'There are no starred movies.',
            icon: 'bi bi-star',
        },
        watchLater: {
            header: 'Watch Later List',
            emptyMessage: 'You have no movies saved to watch later.',
            icon: 'bi bi-heart',
        },
    }

    return (
        <div className="starred" data-testid={`${listType}-div`}>
            {list[`${listType}Movies`].length > 0 && (
                <div data-testid={`${listType}-movies`} className="starred-movies">
                    <h6 className="header">{listNames[listType].header}</h6>
                    <div className="row">
                        {list[`${listType}Movies`].map((movie) => (
                            <Movie
                                movie={movie}
                                key={movie.id}
                            />
                        ))}
                    </div>

                    <footer className="text-center">
                        <button className="btn btn-primary" onClick={() => dispatch(clearAll())}>Remove all {listType}</button>
                    </footer>
                </div>
            )}

            {list[`${listType}Movies`].length === 0 && (
                <div className="text-center empty-cart">
                    <i className={listNames[listType].icon} />
                    <p>{listNames[listType].emptyMessage}</p>
                    <p>Go to <Link to='/'>Home</Link></p>
                </div>
            )}
        </div>
    )
}

export default MovieList
