import watchLaterSlice from '../data/watchLaterSlice'
import MovieList from './MovieList'

const WatchLater = ({viewTrailer}) => {
  return (
    <MovieList
      listType="watchLater"
      slice={watchLaterSlice}
      viewTrailer={viewTrailer}
    />
  )
}

export default WatchLater
