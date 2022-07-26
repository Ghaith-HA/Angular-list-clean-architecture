import {Injectable} from '@angular/core';
import { select, Store } from '@ngrx/store';
import axios from "axios";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { changeCounter, changeMovieList, reset } from 'src/app/actions';
import { movieConfig } from 'src/app/config/movie';
import { MovieList } from 'src/app/core/entity';
import { MovieListRepository } from 'src/app/core/repository';

@Injectable({
  providedIn: 'root'
})
export class MovieListRepositoryService extends MovieListRepository {
  
  private movieList: MovieList[] = [];
  private movieDetails: any;
  count$: Observable<number>;
  movieList$: Observable<MovieList[]>;
  _unsubscribeAll: Subject<any> = new Subject();
  
  constructor(
    private store: Store<{ count: number, movieList: any }>
  ){
    super();
    this.count$ = store.pipe(select('count'));
    this.movieList$ = store.pipe(select('movieList'));
  }
  
  public async getAllMovies(searchText: string = '', size: Number = 20, skip: Number = 0): Promise<MovieList[]>{
    try {
      let data: MovieList[] = this.movieList;
      let randomMovies: any;
      if(searchText !== ''){
        randomMovies = await axios.get(`${movieConfig.SEARCH}&query=${searchText}`);
      }
      else {
        randomMovies = await axios.get(`${movieConfig.DICOVER}`);
      }
      
      if(randomMovies && randomMovies.data.results && randomMovies.data.results.length){
        data = [ ...randomMovies.data.results ];
        /** Here we change the state of movie list */
        this.store.dispatch(changeMovieList({movieList: data}));
        this.store.dispatch(changeCounter({counter: randomMovies.data.total_results}));
      }
      return data;
      
    } catch(err) {
      console.log("error: ", err);
      return this.movieList
    }
  }

  public async getMovieDetails(movieId: number): Promise<MovieList>{
    try {
      let data: MovieList = this.movieDetails;
      let movieDetails: any;
      movieDetails = await axios.get(`${movieConfig.DETAILS}/${movieId}?api_key=${movieConfig.API}`);
      
      data = {...movieDetails.data};
      
      return data;
      
    } catch(err) {
      console.log("error: ", err);
      return this.movieDetails
    }
  };
}
