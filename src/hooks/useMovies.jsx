import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'

import { fetchMovies, searchMovies } from '../data/moviesSlice'
import { useCallback } from 'react';

export const useMovies = () => {
    const dispatch = useDispatch();

    const loadMovies = useCallback(debounce((page, search) => {
        if (search) {
            dispatch(searchMovies({ page, search }));
            return;
        }
        dispatch(fetchMovies({ page }));
    }, 400), [dispatch]);

    return { loadMovies };
};
