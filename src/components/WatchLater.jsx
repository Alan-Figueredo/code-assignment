import watchLaterSlice from '../data/watchLaterSlice'
import MovieList from './MovieList'

const WatchLater = () => {
  return (
    <MovieList
      listType="watchLater"
      slice={watchLaterSlice}
    />
  )
}

export default WatchLater
