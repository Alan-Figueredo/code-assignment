import { useDispatch } from "react-redux"
import { movieObject } from "../utils/movieObject";
import watchLaterSlice from '../data/watchLaterSlice'

export const WatchLaterButton = ({ watchLater, movie }) => {
    const dispatch = useDispatch();
    const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions

    return (
        !watchLater.watchLaterMovies.map(movie => movie.id).includes(movie.id) ? (
            <button type="button" data-testid="watch-later" className="btn btn-light btn-watch-later" onClick={(e) => {dispatch(addToWatchLater(movieObject(movie))); e.stopPropagation()}}>Watch Later</button>
        ) : (
            <button type="button" data-testid="remove-watch-later" className="btn btn-light btn-watch-later blue" onClick={(e) => {dispatch(removeFromWatchLater(movie)); e.stopPropagation()}}><i className="bi bi-check"></i></button>
        )
    )

}