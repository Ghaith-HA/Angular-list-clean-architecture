import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const changeCounter = createAction('[Counter] ChangeCounter', (response: any) => response);
export const changeMovieList = createAction('[Movies List] ChangeMovieList', (response: any) => response);
export const changeSearchText = createAction('[Advanced Search ] ChangeSearchText', (response: any) => response);