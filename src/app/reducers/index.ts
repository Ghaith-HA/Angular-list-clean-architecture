import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, changeCounter, changeMovieList, changeSearchText } from '../actions/index';
import { MovieList } from '../core/entity';

export const initialCounterState: number = 0;
export const initialSearchTextState: string = '';
export const initialMovieListState: MovieList[] = [];

const _counterReducer = createReducer(initialCounterState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(changeCounter, (state, response) => {
    if(response && response.counter){
      return response.counter;
    }
    else{
      return state
    }
    
  }),
);

const _movieListReducer = createReducer(initialMovieListState,
  on(changeMovieList, (state, response) => {
    if(response && response.movieList && response.movieList.length){
      return response.movieList;
    }
    else{
      return state
    }
    
  }),
);

const _searchTextReducer = createReducer(initialSearchTextState,
    on(changeSearchText, (state, response) => {
      if(response && response.searchText ){
        return response.searchText;
      }
      else{
        return state
      }
      
    }),
  )
export function counterReducer(state: number, action: Action): any {
  return _counterReducer(state, action);
}

export function movieListReducer(state: MovieList[], action: Action): any {
  return _movieListReducer(state, action);
}

export function searchTextReducer(state: string, action: Action): any {
  return _searchTextReducer(state, action);
}
