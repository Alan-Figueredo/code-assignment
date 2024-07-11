import starredSlice from '../data/starredSlice'
import MovieList from './MovieList'

const Starred = () => {
  return (
    <MovieList
      listType="starred"
      slice={starredSlice}
    />
  )
}

export default Starred
