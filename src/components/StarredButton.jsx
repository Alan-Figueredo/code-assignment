import { useDispatch } from "react-redux";
import starredSlice from '../data/starredSlice'
import { movieObject } from "../utils/movieObject";

export const StarredButton = ({ starred, movie }) => {
    const dispatch = useDispatch();
    const { starMovie, unstarMovie } = starredSlice.actions

    return (
        !starred.starredMovies.map(movie => movie.id).includes(movie.id) ? (
            <span className="btn-star" data-testid="starred-link" onClick={(e) => {
                dispatch(starMovie(movieObject(movie)));
                e.stopPropagation()
            }
            }>
                <i className="bi bi-star" />
            </span>
        ) : (
            <span className="btn-star" data-testid="unstar-link" onClick={(e) => {
                dispatch(unstarMovie(movie));
                e.stopPropagation();
            }}>
                <i className="bi bi-star-fill" data-testid="star-fill" />
            </span>
        )
    )

}