import Movie from './Movie'
import '../styles/movies.scss'
import { useEffect, useRef } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import useNearScreen from '../hooks/useNearScreen';
import { useSelector } from 'react-redux';
import { useMovies } from '../hooks/useMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = ({ movies, viewTrailer }) => {
    const { movies: { page, hasMorePages } } = useSelector((state) => state)
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef, once: false });
    const { loadMovies } = useMovies();
    const isLoading = movies.fetchStatus === 'loading';
    const debounceFn = loadMovies;

    useEffect(() => {
        debounceFn(1, searchQuery)
    }, [searchQuery, debounceFn]);

    useEffect(() => {
        if (!isLoading && isNearScreen && hasMorePages) {
            debounceFn(page + 1, searchQuery)
        }
    }, [isNearScreen, page, hasMorePages, isLoading, debounceFn, searchQuery]);
    return (
        <>
            <div className="movies-container" data-testid="movies">
                {movies.movies?.map((movie) => {
                    return (
                        <Movie
                            movie={movie}
                            key={movie.id}
                            viewTrailer={viewTrailer}
                        />
                    )
                })}
            </div>
            {isLoading && !!searchQuery && <LoadingSpinner />}
            {!isLoading && <div id='visor' ref={externalRef}></div>}

        </>
    )
}

export default Movies
