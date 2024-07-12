import starredSlice from '../data/starredSlice'
import MovieList from './MovieList'

const Starred = ({ viewTrailer }) => {
  return (
    <MovieList
      listType="starred"
      slice={starredSlice}
      viewTrailer={viewTrailer}
    />
  )
}

export default Starred
